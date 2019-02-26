#!/usr/bin/env bash
set -euxo pipefail


ErrorVersionExists=2

AppName=RnDiffApp
AppBaseBranch=app-base
VersionsFile=VERSIONS

newVersion=$1


function guardExisting () {
    if grep -q "$newVersion" "$VersionsFile"; then
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
    git checkout -b version/"$newVersion"

    # generate app
    react-native init "$AppName" --version "$newVersion"

    # commit
    git add "$AppName"
    git commit -m "Version $newVersion"

    # go back to master
    git checkout new-new-master
}

function addVersionToList () {
    echo "$newVersion" >> "$VersionsFile"
    #   take each line ->dedup->    sort them         -> reverse them -> save them
    cat "$VersionsFile" | uniq | xargs yarn --silent semver | tac      > tmpfile
    mv tmpfile "$VersionsFile"
}


guardExisting 

prepare
generateNewVersionBranch
addVersionToList
