#!/usr/bin/env bash
set -euxo pipefail

newVersion=$1
projectName=RnDiffApp

# go to project branch
git checkout project

# get previous version
prevTag=$(git tag --points-at HEAD)
prevVersion=$(basename "$prevTag")

# delete the old project
rm -rf RnDiffApp

# create a new project using the new version
react-native init "$projectName" --version "$newVersion"

# add new files and commit
git add RnDiffApp
git commit -m "version ${newVersion}"

# tag the commit with the new version
git tag version/"${newVersion}"

# save the stats
diffStat=$(git --no-pager diff HEAD~1 --shortstat)

# print diff
git --no-pager diff HEAD~1

# ask for confirmation before pushing
echo -e "\\nIs that OK ? (Yn)"
read -r confirmation

if [ -z "$confirmation" ] || [ "$confirmation" = "y" ] || [ "$confirmation" = "Y" ]
then
  echo -e "Pushing project branch.."

  # push the project branch
  git push origin project --tags
fi

# come back to master branch
git checkout master

# update readme
diffUrl="[${prevVersion}...${newVersion}](https://github.com/pvinis/rn-diff-purge/compare/version${prevVersion}...version/${newVersion})"
patchUrl="[${prevVersion}...${newVersion}](https://github.com/pvinis/rn-diff-purge/compare/version${prevVersion}...version/${newVersion}.diff)"

# insert a row in the version table
# shellcheck disable=SC1004
sed -i '' 's/----|----|----|----/----|----|----|----\
NEWLINE/g' README.md
# edit the new line with the version info
sed -i "" "s@NEWLINE@${newVersion}|${diffUrl}|${patchUrl}|${diffStat}@" README.md

# prepare readme update
git add README.md
git commit -m "Add version ${newVersion}"

# print diff
git --no-pager diff HEAD~1

# ask for confirmation before pushing
echo -e "\\nIs that also OK ? (Yn)"
read -r confirmation

if [ -z "$confirmation" ] || [ "$confirmation" = "y" ] || [ "$confirmation" = "Y" ]
then
  echo -e "Pushing master branch.."

  # push the master branch
  git push origin master
fi
