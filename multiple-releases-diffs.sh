#!/usr/bin/env bash
set -euxo pipefail

IFS=$'\n' GLOBIGNORE='*' command eval 'releases=($(tac RELEASES))'

for vfrom in "${releases[@]}"
do
  echo "from $vfrom"
  for vto in "${releases[@]}"
  do
    git diff --binary -M15% origin/release/"$vfrom"..origin/release/"$vto" > wt-diffs/diffs/"$vfrom".."$vto".diff
  done
done
