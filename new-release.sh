#!/usr/bin/env bash
set -euxo pipefail


ErrorReleaseExists=2
ErrorReleaseArgMissing=3
ErrorReleaseTagExists=4

AppName=RnDiffApp
AppBaseBranch=app-base
ReleasesFile=RELEASES
ReadmeFile=README.md
ReadmeTable=README_TABLE.md
ReadmeTableBig=README_TABLE_BIG.md

NumberOfReleases=12 # the number of releases on the table


function guardMissingArg () {
    if [ "$#" -ne 1 ]; then
        echo "Release argument missing."
        exit "$ErrorReleaseArgMissing"
    fi
}

function guardExisting () {
    if grep -qFx "$newRelease" "$ReleasesFile"; then
        echo "Release $newRelease already exists!"
        exit "$ErrorReleaseExists"
    fi
    if [ $(git tag -l "version/$newRelease") ]; then
        echo "Release tag version/$newRelease already exists!"
        exit "$ErrorReleaseTagExists"
    fi
}

function prepare () {
    # This git config setting, in combination with the `.gitattributes` file, tells the scripts to not pay attention to some files that don't need to be in the diffs, like the root `.gitignore` of this repo (not the RnDiffApp project).
    git config --local diff.nodiff.command true
    git pull
    yarn install
}

function generateNewReleaseBranch () {
    # go to the base app branch
    git worktree add wt-app "$AppBaseBranch"
    cd wt-app

    # clear any existing stuff
    rm -rf "$AppName"

    git pull
    # make a new branch
    branchName=release/"$newRelease"
    git branch -D "$branchName" || true
    git checkout -b "$branchName"

    # generate app
   npx react-native init "$AppName" --version "$newRelease" --skip-install

    # commit and push branch
    git add "$AppName"
    git commit -m "Release $newRelease"
    git push origin --delete "$branchName" || git push origin "$branchName"
    git tag "version/$newRelease" # @react-native-community/cli needs this
    git push --set-upstream origin "$branchName" --tags

    # go back to master
    cd ..
    rm -rf wt-app
    git worktree prune
}

function addReleaseToList () {
    echo "$newRelease" >> "$ReleasesFile"

    if command -v tac; then
        #   take each line ->dedup->    sort them              -> reverse them -> save them
        cat "$ReleasesFile" | uniq | xargs yarn --silent semver | tac           > tmpfile
    else
        #   take each line ->dedup->    sort them              -> reverse them -> save them
        cat "$ReleasesFile" | uniq | xargs yarn --silent semver | tail -r       > tmpfile
    fi

    mv tmpfile "$ReleasesFile"
}

function generateDiffs () {
    if [ ! -d wt-diffs ]; then
        git worktree add wt-diffs diffs
    fi

    cd wt-diffs
    git pull
    cd ..

    IFS=$'\n' GLOBIGNORE='*' command eval 'releases=($(cat "$ReleasesFile"))'
    for existingRelease in "${releases[@]}"
    do
        git diff --binary -M15% origin/release/"$existingRelease"..origin/release/"$newRelease" > wt-diffs/diffs/"$existingRelease".."$newRelease".diff
        git diff --binary -M15% origin/release/"$newRelease"..origin/release/"$existingRelease" > wt-diffs/diffs/"$newRelease".."$existingRelease".diff
    done

    cd wt-diffs
    git add .
    git commit -m "Add release $newRelease diffs"
    git push
    cd ..
}

function pushMaster () {
    # commit and push
    git add .
    git commit -m "Add release $newRelease"
    git push
}

function generateTable () {
    head -n "$NumberOfReleases" "$ReleasesFile" | ./generate-table.mjs > "$ReadmeTable"
}

function generateBigTable () {
    cat "$ReleasesFile" | ./generate-table.mjs --big > "$ReadmeTableBig"
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
    cp docs/_index.html docs/index.html
    yarn --silent markdown "$ReadmeTableBig" >> docs/index.html
}

function cleanUp () {
    rm -rf "$ReadmeHeader" "$ReadmeFooter" "$ReadmeTable" "$ReadmeTableBig"
    rm -rf wt-app
    git worktree prune
}


guardMissingArg $*
newRelease=$1

guardExisting

prepare
generateNewReleaseBranch
addReleaseToList
generateDiffs

generateTable
generateReadme

generateBigTable
generateGHPages

cleanUp
pushMaster
