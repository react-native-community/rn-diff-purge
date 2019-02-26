#!/usr/bin/env bash
set -euxo pipefail


versions=(
  0.32.0-rc.0
  0.32.0
  0.22.2
  0.23.0-rc1
  0.23.0-rc3
  0.23.0-rc4
  0.32.1
  0.33.0-rc.0
  0.33.0-rc.1
  0.33.0
  0.33.1
  0.34.0-rc.0
  0.34.0
  0.34.1
  0.35.0-rc.0
  0.35.0
  0.36.0-rc.0
  0.36.0-rc.1
  0.36.0
  0.36.1
)

for v in "${versions[@]}"
do
    echo $v
    ./new-version.sh $v
done
