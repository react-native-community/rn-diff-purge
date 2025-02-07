#!/usr/bin/env bash
set -euo pipefail

releases=(
  0.64.3
)

if [ ! -d wt-diffs ]; then
  git worktree add wt-diffs diffs
fi

for i in "${!releases[@]}"; do
  vfrom="${releases[$i]}"
  echo "For release $vfrom:"
  for j in "${!releases[@]}"; do
    # Skip if j index is less than or equal to i
    if [ $j -le $i ]; then
      continue
    fi
    vto="${releases[$j]}"

    result=0
    ./scripts/compare-releases.js "$vfrom" "$vto" || result=$?

    case $result in
    1)
      echo "with later release $vto: Generating diff file.."
      git diff --binary -w -M15% origin/release/"$vfrom"..origin/release/"$vto" >wt-diffs/diffs/"$vfrom".."$vto".diff
      ;;
    3)
      echo "with earlier release $vto: Generating diff file.."
      git diff --binary -w -M15% origin/release/"$vto"..origin/release/"$vfrom" >wt-diffs/diffs/"$vto".."$vfrom".diff
      ;;
    *)
      echo "Error: Unexpected return code $result from compare-releases.js"
      ;;
    esac
  done
done
