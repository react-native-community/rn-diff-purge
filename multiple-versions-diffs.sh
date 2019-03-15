#!/usr/bin/env bash
set -euxo pipefail


versions=(
  0.52.1
  0.52.2
  0.52.3
  0.53.0-rc.0
  0.53.0
  0.53.2
  0.53.3
  0.54.0-rc.0
  0.54.0-rc.2
  0.54.0-rc.3
  0.54.0-rc.4
  0.54.0
  0.54.1
  0.54.2
  0.54.3
  0.54.4
  0.55.0-rc.0
  0.55.0-rc.1
  0.55.0-rc.2
  0.55.0
  0.55.1
  0.55.2
  0.55.3
  0.55.4
  0.56.0-rc
  0.56.0-rc.1
  0.56.0-rc.2
  0.56.0-rc.3
  0.56.0-rc.4
  0.56.0-rc.5
  0.56.0
  0.56.1
  0.57.0-rc.0
  0.57.0-rc.1
  0.57.0-rc.2
  0.57.0-rc.3
  0.57.0-rc.4
  0.57.0
  0.57.1
  0.57.2
  0.57.3
  0.57.4
  0.57.5
  0.57.6
  0.57.7
  0.57.8
  0.58.0-rc.0
  0.58.0-rc.1
  0.58.0-rc.2
  0.58.0-rc.3
  0.58.2
  0.58.3
  0.58.4
  0.59.0-rc.0
  0.59.0-rc.1
  0.59.0-rc.2
  0.59.0-rc.3
)

for vfrom in "${versions[@]}"
do
  for vto in "${versions[@]}"
  do
    echo "from $vfrom to $vto"
    git diff origin/version/"$vfrom"..origin/version/"$vto" > diffs/"$vfrom".."$vto".diff
  done
done
