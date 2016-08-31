#!/bin/bash

newVersion=$1

# Get the last branch
lastGitBranch=`git for-each-ref --sort='-committerdate' --format='%(refname)' refs/remotes/origin | grep 'rn-' | head -1 | sed -e 's-refs/remotes/origin/--'`

#  Checkout it
git checkout $lastGitBranch

# Get the version of React (and strip the version qualifier)
reactVersion=`npm view react-native@$newVersion peerDependencies.react | sed -e 's/[\~\^]//'`

cd RnDiffApp

# Replace versions in package.json
sed -i "" "s/\"react\": \"[0-9]*\.[0-9]*\.[0-9]*\",/\"react\": \"${reactVersion}\",/" ./package.json
sed -i "" "s/\"react-native\": \"[0-9]*\.[0-9]*\.[0-9]*\"/\"react-native\": \"${newVersion}\"/" ./package.json

# Install dependencies
npm install

# Launch RN upgrade and automatically overwrite all files
echo "a" | react-native upgrade

cd ..

# Create the new branch
git branch rn-$newVersion

# Checkout it
git checkout rn-$newVersion

# Add modified files to commit
git add RnDiffApp

# Commit
git commit -m "Output version ${newVersion}"

# Print diff
git --no-pager diff HEAD~1

# Print all branches (inspired from the oh-my-zsh shortcut: "glola")
git --no-pager log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --all

# Ask for confirmation before pushing
echo -e "\nIs that OK ? (Yn)"
read confirmation

if [ -z $confirmation ] || [ $confirmation = "y" ] || [ $confirmation = "Y" ]
then
  echo -e "Push branch..."

  # Push the branch
  git push origin rn-$newVersion
fi
