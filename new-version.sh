#!/usr/bin/env bash
set -euxo pipefail


ErrorVersionExists=2
ErrorVersionArgMissing=3

AppName=RnDiffApp
AppBaseBranch=app-base
VersionsFile=VERSIONS
NumberOfVersions=12


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
    git checkout new-new-master
}

function addVersionToList () {
    echo "$newVersion" >> "$VersionsFile"
    #   take each line ->dedup->    sort them         -> reverse them -> save them
    cat "$VersionsFile" | uniq | xargs yarn --silent semver | tail -r  > tmpfile
    mv tmpfile "$VersionsFile"

    # commit and push
    git add "$VersionsFile"
    git commit -m "add version $newVersion"
    git push
}

function generateTable () {
    head -n "$NumberOfVersions" "$VersionsFile" | ./generate-table.js
}


guardMissingArg $*
newVersion=$1

guardExisting

prepare
generateNewVersionBranch
addVersionToList
generateTable
