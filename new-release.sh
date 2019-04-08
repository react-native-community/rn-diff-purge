#!/usr/bin/env bash
set -euxo pipefail


ErrorVersionExists=2
ErrorVersionArgMissing=3

AppName=RnDiffApp
AppBaseBranch=app-base
VersionsFile=VERSIONS
ReadmeFile=README.md
ReadmeTable=README_TABLE.md
ReadmeTableBig=README_TABLE_BIG.md

NumberOfVersions=12 # the number of versions on the table


function guardMissingArg () {
    if [ "$#" -ne 1 ]; then
        echo "Version argument missing."
        exit "$ErrorVersionArgMissing"
    fi
}

function guardExisting () {
    if grep -qFx "$newVersion" "$VersionsFile"; then
        echo "Version $newVersion already exists!"
        exit "$ErrorVersionExists"
    fi
}

function prepare () {
    git pull
    yarn install
}

function generateNewVersionBranch () {
    # go to the base app branch
    git checkout "$AppBaseBranch"

    # clear any existing stuff
    rm -rf "$AppName"

    # make a new branch
    branchName=version/"$newVersion"
    git checkout -b "$branchName"

    # generate app
    react-native init "$AppName" --version "$newVersion"

    # commit and push branch
    git add "$AppName"
    git commit -m "Version $newVersion"
    git push --set-upstream origin "$branchName"

    # go back to master
    git checkout master
}

function addVersionToList () {
    echo "$newVersion" >> "$VersionsFile"

    if command -v tac; then
        #   take each line ->dedup->    sort them              -> reverse them -> save them
        cat "$VersionsFile" | uniq | xargs yarn --silent semver | tac           > tmpfile
    else
        #   take each line ->dedup->    sort them              -> reverse them -> save them
        cat "$VersionsFile" | uniq | xargs yarn --silent semver | tail -r       > tmpfile
    fi

    mv tmpfile "$VersionsFile"
}

function generateDiffs () {
    IFS=$'\n' GLOBIGNORE='*' command eval 'versions=($(cat "$VersionsFile"))'
    for fromVersion in "${versions[@]}"
    do
        git diff --binary origin/version/"$fromVersion"..origin/version/"$newVersion" > diffs/"$fromVersion".."$newVersion".diff
    done
}

function pushMaster () {
    # commit and push
    git add .
    git commit -m "add version $newVersion"
    git push
}

function generateTable () {
    head -n "$NumberOfVersions" "$VersionsFile" | ./generate-table.js > "$ReadmeTable"
}

function generateBigTable () {
    cat "$VersionsFile" | ./generate-table.js --big > "$ReadmeTableBig"
}

ReadmeHeader=README_HEADER.md
ReadmeFooter=README_FOOTER.md

function breakUpReadme () {
    perl -p0e 's/(.*## Diff table[^\n]*\n\n)(.*)/$1/smg' "$ReadmeFile" > "$ReadmeHeader"
    perl -p0e 's/(.*)(\n## To see.*)/$2/smg' "$ReadmeFile" > "$ReadmeFooter"
}

function makeUpReadme () {
    cat "$ReadmeHeader" "$ReadmeTable" "$ReadmeFooter" > "$ReadmeFile"
}

function generateReadme () {
    breakUpReadme
    makeUpReadme
}

function generateGHPages () {
    yarn --silent markdown "$ReadmeTableBig" > docs/index.html
}

function cleanUp () {
    rm -rf "$ReadmeHeader" "$ReadmeFooter" "$ReadmeTable" "$ReadmeTableBig"
}


guardMissingArg $*
newVersion=$1

guardExisting

prepare
generateNewVersionBranch
addVersionToList
generateDiffs

generateTable
generateReadme

generateBigTable
generateGHPages

cleanUp
pushMaster
