#!/usr/bin/env bash
set -euxo pipefail


releases=(
0.60.0-rc.1
0.60.0-rc.2
0.60.0-rc.3
0.60.0
0.60.1
0.60.2
0.60.3
0.60.4
)

for v in "${releases[@]}"
do
    echo $v
    ./new-release.sh $v
done
