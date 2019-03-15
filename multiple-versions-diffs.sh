#!/usr/bin/env bash
set -euxo pipefail

IFS=$'\n' GLOBIGNORE='*' command eval 'versions=($(cat VERSIONS))'

for vfrom in "${versions[@]}"
do
  echo "from $vfrom"
  for vto in "${versions[@]}"
  do
    git diff origin/version/"$vfrom"..origin/version/"$vto" > diffs/"$vfrom".."$vto".diff
  done
done
