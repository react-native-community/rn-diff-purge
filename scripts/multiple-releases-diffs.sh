#!/usr/bin/env bash
set -euxo pipefail

releases=(
0.75.0-rc.2
0.74.2
0.74.1
0.74.1-rc.0
0.74.0
0.74.0-rc.9
0.74.0-rc.8
0.74.0-rc.7
0.74.0-rc.6
0.74.0-rc.5
0.74.0-rc.4
0.74.0-rc.3
0.74.0-rc.2
0.74.0-rc.0
)


if [ ! -d wt-diffs ]; then
  git worktree add wt-diffs diffs
fi

for vfrom in "${releases[@]}"
do
  echo "from $vfrom"
  for vto in "${releases[@]}"
  do
    git diff --binary -w -M15% origin/release/"$vfrom"..origin/release/"$vto" > wt-diffs/diffs/"$vfrom".."$vto".diff
  done
done
