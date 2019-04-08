#!/usr/bin/env bash
set -euxo pipefail

IFS=$'\n' GLOBIGNORE='*' command eval 'releases=($(cat RELEASES))'

for vfrom in "${releases[@]}"
do
  echo "from $vfrom"
  for vto in "${releases[@]}"
  do
    git diff --binary origin/release/"$vfrom"..origin/release/"$vto" > diffs/"$vfrom".."$vto".diff
  done
done
