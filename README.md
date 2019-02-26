# RN diff PURGE

[![Build Status](https://travis-ci.org/pvinis/rn-diff-purge.svg?branch=master)](https://travis-ci.org/pvinis/rn-diff-purge)
[![Greenkeeper badge](https://badges.greenkeeper.io/pvinis/rn-diff-purge.svg)](https://greenkeeper.io/)

[Vote in the Poll for branches!](https://github.com/pvinis/rn-diff-purge/issues/15)


This repository exposes an untouched React Native app generated with the CLI
`react-native init RnDiffApp`. Each new React Native version causes a new project to be created, removing the old one, and getting a diff between them. This way, the diff is always clean, always in sync with the changes of the init template, and there is no reason to use the broken `react-native upgrade` or `git-upgrade` or whatever.

A dedicated branch per version makes changes very easy
to watch. For example:

* https://github.com/pvinis/rn-diff-purge/compare/version/0.28.0...version/0.29.0
(Change in Android template)
* https://github.com/pvinis/rn-diff-purge/compare/version/0.29.0...version/0.29.2
(no change)
* https://github.com/pvinis/rn-diff-purge/compare/version/0.30.0...version/0.31.0
(minor change in `.flowconfig` )

See table below for the complete list.

This repository can also be used to upgrade React Native without the often broken `react-native-git-upgrade` command.
See [USAGE.md](https://github.com/pvinis/rn-diff-purge/blob/master/USAGE.md) for details.

For some more info about the benefits of this repo's way versus the default way and rn-diff's way, read some of the conversation around [here](https://github.com/react-native-community/discussions-and-proposals/issues/68#issuecomment-452227478).

Please :star: this repository if I helped you, and if you upgraded successfully because of `purge`, [buy me a pizza](https://www.buymeacoffee.com/DGWwHVZ4s) :pizza:

## Diff table

| From->To    | R        | E        | A             | C        | T             |               | N        | A        | T        | I        | V        | E   |
| ----------- | -------- | -------- | ------------- | -------- | ------------- | ------------- | -------- | -------- | -------- | -------- | -------- | --- |
| 0.59.1      | X        | -        | -             | -        | -             | -             | -        | -        | -        | -        | -        | -   |
| 0.59.0      | ->0.59.1 | X        | -             | -        | -             | -             | -        | -        | -        | -        | -        | -   |
| 0.59.0-rc.2 | ->0.59.1 | ->0.59.0 | X             | -        | -             | -             | -        | -        | -        | -        | -        | -   |
| 0.58.5      | ->0.59.1 | ->0.59.0 | ->0.59.0-rc.2 | X        | ->0.59.0-rc.1 | ->0.59.0-rc.0 | -        | -        | -        | -        | -        | -   |
| 0.59.0-rc.1 | ->0.59.1 | ->0.59.0 | ->0.59.0-rc.2 | -        | X             | -             | -        | -        | -        | -        | -        | -   |
| 0.59.0-rc.0 | ->0.59.1 | ->0.59.0 | ->0.59.0-rc.2 | -        | ->0.59.0-rc.1 | X             | -        | -        | -        | -        | -        | -   |
| 0.58.4      | ->0.59.1 | ->0.59.0 | ->0.59.0-rc.2 | ->0.58.5 | ->0.59.0-rc.1 | ->0.59.0-rc.0 | X        | -        | -        | -        | -        | -   |
| 0.58.3      | ->0.59.1 | ->0.59.0 | ->0.59.0-rc.2 | ->0.58.5 | ->0.59.0-rc.1 | ->0.59.0-rc.0 | ->0.58.4 | X        | -        | -        | -        | -   |
| 0.58.2      | ->0.59.1 | ->0.59.0 | ->0.59.0-rc.2 | ->0.58.5 | ->0.59.0-rc.1 | ->0.59.0-rc.0 | ->0.58.4 | ->0.58.3 | X        | -        | -        | -   |
| 0.58.1      | ->0.59.1 | ->0.59.0 | ->0.59.0-rc.2 | ->0.58.5 | ->0.59.0-rc.1 | ->0.59.0-rc.0 | ->0.58.4 | ->0.58.3 | ->0.58.2 | X        | -        | -   |
| 0.58.0      | ->0.59.1 | ->0.59.0 | ->0.59.0-rc.2 | ->0.58.5 | ->0.59.0-rc.1 | ->0.59.0-rc.0 | ->0.58.4 | ->0.58.3 | ->0.58.2 | ->0.58.1 | X        | -   |
| 0.57.8      | ->0.59.1 | ->0.59.0 | ->0.59.0-rc.2 | ->0.58.5 | ->0.59.0-rc.1 | ->0.59.0-rc.0 | ->0.58.4 | ->0.58.3 | ->0.58.2 | ->0.58.1 | ->0.58.0 | X   |

## Diff list

Version|Compare|Patch|Stats|RN Compare
----|----|----|----|----
0.58.5|[0.59.0-rc.2...0.58.5](https://github.com/pvinis/rn-diff-purge/compare/version/0.59.0-rc.2...version/0.58.5)|[0.59.0-rc.2...0.58.5](https://github.com/pvinis/rn-diff-purge/compare/version/0.59.0-rc.2...version/0.58.5.diff)| 14 files changed, 37 insertions(+), 70 deletions(-)|[0.59.0-rc.2...0.58.5](https://github.com/facebook/react-native/compare/v0.59.0-rc.2...v0.58.5)
0.59.0-rc.2|[0.59.0-rc.1...0.59.0-rc.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.59.0-rc.1...version/0.59.0-rc.2)|[0.59.0-rc.1...0.59.0-rc.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.59.0-rc.1...version/0.59.0-rc.2.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)|[0.59.0-rc.1...0.59.0-rc.2](https://github.com/facebook/react-native/compare/v0.59.0-rc.1...v0.59.0-rc.2)
0.59.0-rc.1|[0.59.0-rc.0...0.59.0-rc.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.59.0-rc.0...version/0.59.0-rc.1)|[0.59.0-rc.0...0.59.0-rc.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.59.0-rc.0...version/0.59.0-rc.1.diff)| 2 files changed, 3 insertions(+), 3 deletions(-)|[0.59.0-rc.0...0.59.0-rc.1](https://github.com/facebook/react-native/compare/v0.59.0-rc.0...v0.59.0-rc.1)
0.59.0-rc.0[🎣](https://github.com/pvinis/rn-diff-purge#hooks)|[0.58.4...0.59.0-rc.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.58.4...version/0.59.0-rc.0)|[0.58.4...0.59.0-rc.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.58.4...version/0.59.0-rc.0.diff)| 15 files changed, 71 insertions(+), 38 deletions(-)|[0.58.4...0.59.0-rc.0](https://github.com/facebook/react-native/compare/v0.58.4...v0.59.0-rc.0)
0.58.4|[0.58.3...0.58.4](https://github.com/pvinis/rn-diff-purge/compare/version/0.58.3...version/0.58.4)|[0.58.3...0.58.4](https://github.com/pvinis/rn-diff-purge/compare/version/0.58.3...version/0.58.4.diff)| 1 file changed, 3 insertions(+), 3 deletions(-)|[0.58.3...0.58.4](https://github.com/facebook/react-native/compare/v0.58.3...v0.58.4)
0.58.3|[0.58.2...0.58.3](https://github.com/pvinis/rn-diff-purge/compare/version/0.58.2...version/0.58.3)|[0.58.2...0.58.3](https://github.com/pvinis/rn-diff-purge/compare/version/0.58.2...version/0.58.3.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)|[0.58.2...0.58.3](https://github.com/facebook/react-native/compare/v0.58.2...v0.58.3)
0.58.2|[0.58.1...0.58.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.58.1...version/0.58.2)|[0.58.1...0.58.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.58.1...version/0.58.2.diff)| 2 files changed, 2 insertions(+), 2 deletions(-)|[0.58.1...0.58.2](https://github.com/facebook/react-native/compare/v0.58.1...v0.58.2)
0.58.1|[0.58.0...0.58.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.58.0...version/0.58.1)|[0.58.0...0.58.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.58.0...version/0.58.1.diff)| 1 file changed, 3 insertions(+), 3 deletions(-)|[0.58.0...0.58.1](https://github.com/facebook/react-native/compare/v0.58.0...v0.58.1)
0.58.0|[0.57.8...0.58.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.57.8...version/0.58.0)|[0.57.8...0.58.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.57.8...version/0.58.0.diff)| 18 files changed, 74 insertions(+), 43 deletions(-)|[0.57.8...0.58.0](https://github.com/facebook/react-native/compare/v0.57.8...v0.58.0)
0.57.8|[0.57.7...0.57.8](https://github.com/pvinis/rn-diff-purge/compare/version/0.57.7...version/0.57.8)|[0.57.7...0.57.8](https://github.com/pvinis/rn-diff-purge/compare/version/0.57.7...version/0.57.8.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)|[0.57.7...0.57.8](https://github.com/facebook/react-native/compare/v0.57.7...v0.57.8)
0.57.7|[0.57.6...0.57.7](https://github.com/pvinis/rn-diff-purge/compare/version/0.57.6...version/0.57.7)|[0.57.6...0.57.7](https://github.com/pvinis/rn-diff-purge/compare/version/0.57.6...version/0.57.7.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)|[0.57.6...0.57.7](https://github.com/facebook/react-native/compare/v0.57.6...v0.57.7)
0.57.6|[0.57.5...0.57.6](https://github.com/pvinis/rn-diff-purge/compare/version/0.57.5...version/0.57.6)|[0.57.5...0.57.6](https://github.com/pvinis/rn-diff-purge/compare/version/0.57.5...version/0.57.6.diff)| 1 file changed, 2 insertions(+), 2 deletions(-)|[0.57.5...0.57.6](https://github.com/facebook/react-native/compare/v0.57.5...v0.57.6)
0.57.5|[0.57.4...0.57.5](https://github.com/pvinis/rn-diff-purge/compare/version/0.57.4...version/0.57.5)|[0.57.4...0.57.5](https://github.com/pvinis/rn-diff-purge/compare/version/0.57.4...version/0.57.5.diff)| 2 files changed, 5 insertions(+), 5 deletions(-)
0.57.4|[0.57.3...0.57.4](https://github.com/pvinis/rn-diff-purge/compare/version/0.57.3...version/0.57.4)|[0.57.3...0.57.4](https://github.com/pvinis/rn-diff-purge/compare/version/0.57.3...version/0.57.4.diff)| 2 files changed, 3 insertions(+), 3 deletions(-)
0.57.3|[0.57.2...0.57.3](https://github.com/pvinis/rn-diff-purge/compare/version/0.57.2...version/0.57.3)|[0.57.2...0.57.3](https://github.com/pvinis/rn-diff-purge/compare/version/0.57.2...version/0.57.3.diff)| 1 file changed, 4 insertions(+), 4 deletions(-)
0.57.2|[0.57.1...0.57.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.57.1...version/0.57.2)|[0.57.1...0.57.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.57.1...version/0.57.2.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.57.1|[0.57.0...0.57.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.57.0...version/0.57.1)|[0.57.0...0.57.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.57.0...version/0.57.1.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.57.0|[0.56.0...0.57.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.56.0...version/0.57.0)|[0.56.0...0.57.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.56.0...version/0.57.0.diff)| 15 files changed, 112 insertions(+), 80 deletions(-)
0.56.0|[0.55.4...0.56.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.4...version/0.56.0)|[0.55.4...0.56.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.4...version/0.56.0.diff)| 19 files changed, 60 insertions(+), 90 deletions(-)
0.55.4|[0.55.0...0.55.4](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0...version/0.55.4)|[0.55.0...0.55.4](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0...version/0.55.4.diff)| 1 file changed, 3 insertions(+), 3 deletions(-)
0.55.0|[0.54.4...0.55.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.4...version/0.55.0)|[0.54.4...0.55.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.4...version/0.55.0.diff)| 9 files changed, 148 insertions(+), 35 deletions(-)
0.54.4|[0.54.0...0.54.4](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.0...version/0.54.4)|[0.54.0...0.54.4](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.0...version/0.54.4.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.54.0|[0.53.3...0.54.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.53.3...version/0.54.0)|[0.53.3...0.54.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.53.3...version/0.54.0.diff)| 3 files changed, 6 insertions(+), 12 deletions(-)
0.53.3|[0.53.0...0.53.3](https://github.com/pvinis/rn-diff-purge/compare/version/0.53.0...version/0.53.3)|[0.53.0...0.53.3](https://github.com/pvinis/rn-diff-purge/compare/version/0.53.0...version/0.53.3.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.53.0|[0.52.2...0.53.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.52.2...version/0.53.0)|[0.52.2...0.53.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.52.2...version/0.53.0.diff)| 3 files changed, 4 insertions(+), 5 deletions(-)
0.52.2|[0.52.0...0.52.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.52.0...version/0.52.2)|[0.52.0...0.52.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.52.0...version/0.52.2.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.52.0|[0.51.0...0.52.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.51.0...version/0.52.0)|[0.51.0...0.52.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.51.0...version/0.52.0.diff)| 3 files changed, 77 insertions(+), 15 deletions(-)
0.51.0|[0.50.4...0.51.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.50.4...version/0.51.0)|[0.50.4...0.51.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.50.4...version/0.51.0.diff)| 2 files changed, 23 insertions(+), 23 deletions(-)
0.50.4|[0.50.0...0.50.4](https://github.com/pvinis/rn-diff-purge/compare/version/0.50.0...version/0.50.4)|[0.50.0...0.50.4](https://github.com/pvinis/rn-diff-purge/compare/version/0.50.0...version/0.50.4.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.50.0|[0.49.5...0.50.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.49.5...version/0.50.0)|[0.49.5...0.50.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.49.5...version/0.50.0.diff)| 3 files changed, 12 insertions(+), 6 deletions(-)
0.49.5|[0.49.0...0.49.5](https://github.com/pvinis/rn-diff-purge/compare/version/0.49.0...version/0.49.5)|[0.49.0...0.49.5](https://github.com/pvinis/rn-diff-purge/compare/version/0.49.0...version/0.49.5.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.49.0|[0.48.4...0.49.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.48.4...version/0.49.0)|[0.48.4...0.49.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.48.4...version/0.49.0.diff)| 11 files changed, 43 insertions(+), 88 deletions(-)
0.48.4|[0.48.3...0.48.4](https://github.com/pvinis/rn-diff-purge/compare/version/0.48.3...version/0.48.4)|[0.48.3...0.48.4](https://github.com/pvinis/rn-diff-purge/compare/version/0.48.3...version/0.48.4.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.48.3|[0.48.2...0.48.3](https://github.com/pvinis/rn-diff-purge/compare/version/0.48.2...version/0.48.3)|[0.48.2...0.48.3](https://github.com/pvinis/rn-diff-purge/compare/version/0.48.2...version/0.48.3.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.48.2|[0.48.1...0.48.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.48.1...version/0.48.2)|[0.48.1...0.48.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.48.1...version/0.48.2.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.48.1|[0.48.0...0.48.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.48.0...version/0.48.1)|[0.48.0...0.48.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.48.0...version/0.48.1.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.48.0|[0.47.2...0.48.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.47.2...version/0.48.0)|[0.47.2...0.48.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.47.2...version/0.48.0.diff)| 2 files changed, 36 insertions(+), 3 deletions(-)
0.47.2|[0.47.1...0.47.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.47.1...version/0.47.2)|[0.47.1...0.47.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.47.1...version/0.47.2.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.47.1|[0.47.0...0.47.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.47.0...version/0.47.1)|[0.47.0...0.47.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.47.0...version/0.47.1.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.47.0|[0.46.4...0.47.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.46.4...version/0.47.0)|[0.46.4...0.47.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.46.4...version/0.47.0.diff)| 2 files changed, 4 insertions(+), 4 deletions(-)
0.46.4|[0.46.3...0.46.4](https://github.com/pvinis/rn-diff-purge/compare/version/0.46.3...version/0.46.4)|[0.46.3...0.46.4](https://github.com/pvinis/rn-diff-purge/compare/version/0.46.3...version/0.46.4.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.46.3|[0.46.2...0.46.3](https://github.com/pvinis/rn-diff-purge/compare/version/0.46.2...version/0.46.3)|[0.46.2...0.46.3](https://github.com/pvinis/rn-diff-purge/compare/version/0.46.2...version/0.46.3.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.46.2|[0.46.1...0.46.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.46.1...version/0.46.2)|[0.46.1...0.46.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.46.1...version/0.46.2.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.46.1|[0.46.0...0.46.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.46.0...version/0.46.1)|[0.46.0...0.46.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.46.0...version/0.46.1.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.46.0|[0.45.1...0.46.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.45.1...version/0.46.0)|[0.45.1...0.46.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.45.1...version/0.46.0.diff)| 3 files changed, 6 insertions(+), 8 deletions(-)
0.45.1|[0.45.0...0.45.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.45.0...version/0.45.1)|[0.45.0...0.45.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.45.0...version/0.45.1.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.45.0|[0.44.3...0.45.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.44.3...version/0.45.0)|[0.44.3...0.45.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.44.3...version/0.45.0.diff)| 3 files changed, 13 insertions(+), 6 deletions(-)
0.44.3|[0.44.2...0.44.3](https://github.com/pvinis/rn-diff-purge/compare/version/0.44.2...version/0.44.3)|[0.44.2...0.44.3](https://github.com/pvinis/rn-diff-purge/compare/version/0.44.2...version/0.44.3.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.44.2|[0.44.1...0.44.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.44.1...version/0.44.2)|[0.44.1...0.44.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.44.1...version/0.44.2.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.44.1|[0.44.0...0.44.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.44.0...version/0.44.1)|[0.44.0...0.44.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.44.0...version/0.44.1.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.44.0|[0.43.4...0.44.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.43.4...version/0.44.0)|[0.43.4...0.44.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.43.4...version/0.44.0.diff)| 6 files changed, 12 insertions(+), 8 deletions(-)
0.43.4|[0.43.3...0.43.4](https://github.com/pvinis/rn-diff-purge/compare/version/0.43.3...version/0.43.4)|[0.43.3...0.43.4](https://github.com/pvinis/rn-diff-purge/compare/version/0.43.3...version/0.43.4.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.43.3|[0.43.2...0.43.3](https://github.com/pvinis/rn-diff-purge/compare/version/0.43.2...version/0.43.3)|[0.43.2...0.43.3](https://github.com/pvinis/rn-diff-purge/compare/version/0.43.2...version/0.43.3.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.43.2|[0.43.1...0.43.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.43.1...version/0.43.2)|[0.43.1...0.43.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.43.1...version/0.43.2.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.43.1|[0.43.0...0.43.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.43.0...version/0.43.1)|[0.43.0...0.43.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.43.0...version/0.43.1.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.43.0|[0.42.3...0.43.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.42.3...version/0.43.0)|[0.42.3...0.43.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.42.3...version/0.43.0.diff)| 4 files changed, 39 insertions(+), 39 deletions(-)
0.42.3|[0.42.2...0.42.3](https://github.com/pvinis/rn-diff-purge/compare/version/0.42.2...version/0.42.3)|[0.42.2...0.42.3](https://github.com/pvinis/rn-diff-purge/compare/version/0.42.2...version/0.42.3.diff)| 3 files changed, 7 insertions(+), 1 deletion(-)
0.42.2|[0.42.0...0.42.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.42.0...version/0.42.2)|[0.42.0...0.42.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.42.0...version/0.42.2.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.42.0|[0.41.2...0.42.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.41.2...version/0.42.0)|[0.41.2...0.42.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.41.2...version/0.42.0.diff)| 9 files changed, 12 insertions(+), 18 deletions(-)
0.41.2|[0.41.1...0.41.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.41.1...version/0.41.2)|[0.41.1...0.41.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.41.1...version/0.41.2.diff)| 3 files changed, 9 insertions(+), 3 deletions(-)
0.41.1|[0.41.0...0.41.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.41.0...version/0.41.1)|[0.41.0...0.41.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.41.0...version/0.41.1.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.41.0|[0.40.0...0.41.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.40.0...version/0.41.0)|[0.40.0...0.41.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.40.0...version/0.41.0.diff)| 8 files changed, 477 insertions(+), 6 deletions(-)
0.40.0|[0.39.1...0.40.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.39.1...version/0.40.0)|[0.39.1...0.40.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.39.1...version/0.40.0.diff)| 7 files changed, 238 insertions(+), 26 deletions(-)
0.39.1|[0.39.0...0.39.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.39.0...version/0.39.1)|[0.39.0...0.39.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.39.0...version/0.39.1.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.39.0|[0.38.0...0.39.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.38.0...version/0.39.0)|[0.38.0...0.39.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.38.0...version/0.39.0.diff)| 5 files changed, 76 insertions(+), 55 deletions(-)
0.38.0|[0.37.0...0.38.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.37.0...version/0.38.0)|[0.37.0...0.38.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.37.0...version/0.38.0.diff)| 4 files changed, 14 insertions(+), 6 deletions(-)
0.37.0|[0.36.1...0.37.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.36.1...version/0.37.0)|[0.36.1...0.37.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.36.1...version/0.37.0.diff)| 2 files changed, 9 insertions(+), 9 deletions(-)
0.36.1|[0.36.0...0.36.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.36.0...version/0.36.1)|[0.36.0...0.36.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.36.0...version/0.36.1.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.36.0|[0.35.0...0.36.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.35.0...version/0.36.0)|[0.35.0...0.36.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.35.0...version/0.36.0.diff)| 3 files changed, 5 insertions(+), 5 deletions(-)
0.35.0|[0.34.1...0.35.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.34.1...version/0.35.0)|[0.34.1...0.35.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.34.1...version/0.35.0.diff)| 6 files changed, 50 insertions(+), 12 deletions(-)
0.34.1|[0.34.0...0.34.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.34.0...version/0.34.1)|[0.34.0...0.34.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.34.0...version/0.34.1.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.34.0|[0.33.1...0.34.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.33.1...version/0.34.0)|[0.33.1...0.34.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.33.1...version/0.34.0.diff)| 3 files changed, 13 insertions(+), 9 deletions(-)
0.33.1|[0.33.0...0.33.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.33.0...version/0.33.1)|[0.33.0...0.33.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.33.0...version/0.33.1.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.33.0|[0.32.0...0.33.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.32.0...version/0.33.0)|[0.32.0...0.33.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.32.0...version/0.33.0.diff)| 3 files changed, 10 insertions(+), 10 deletions(-)
0.32.0|[0.31.0...0.32.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.31.0...version/0.32.0)|[0.31.0...0.32.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.31.0...version/0.32.0.diff)| 2 files changed, 6 insertions(+), 6 deletions(-)
0.31.0|[0.30.0...0.31.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.30.0...version/0.31.0)|[0.30.0...0.31.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.30.0...version/0.31.0.diff)| 2 files changed, 21 insertions(+), 4 deletions(-)
0.30.0|[0.29.2...0.30.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.29.2...version/0.30.0)|[0.29.2...0.30.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.29.2...version/0.30.0.diff)| 4 files changed, 3 insertions(+), 3 deletions(-)
0.29.2|[0.29.1...0.29.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.29.1...version/0.29.2)|[0.29.1...0.29.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.29.1...version/0.29.2.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.29.1|[0.29.0...0.29.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.29.0...version/0.29.1)|[0.29.0...0.29.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.29.0...version/0.29.1.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.29.0|[0.28.0...0.29.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.28.0...version/0.29.0)|[0.28.0...0.29.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.28.0...version/0.29.0.diff)| 7 files changed, 48 insertions(+), 115 deletions(-)
0.28.0|[0.27.2...0.28.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.27.2...version/0.28.0)|[0.27.2...0.28.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.27.2...version/0.28.0.diff)| 8 files changed, 33 insertions(+), 13 deletions(-)
0.27.2|[0.27.1...0.27.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.27.1...version/0.27.2)|[0.27.1...0.27.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.27.1...version/0.27.2.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.27.1|[0.27.0...0.27.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.27.0...version/0.27.1)|[0.27.0...0.27.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.27.0...version/0.27.1.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.27.0|[0.26.3...0.27.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.26.3...version/0.27.0)|[0.26.3...0.27.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.26.3...version/0.27.0.diff)| 5 files changed, 13 insertions(+), 8 deletions(-)
0.26.3|[0.26.2...0.26.3](https://github.com/pvinis/rn-diff-purge/compare/version/0.26.2...version/0.26.3)|[0.26.2...0.26.3](https://github.com/pvinis/rn-diff-purge/compare/version/0.26.2...version/0.26.3.diff)| 1 file changed, 2 insertions(+), 2 deletions(-)
0.26.2|[0.26.1...0.26.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.26.1...version/0.26.2)|[0.26.1...0.26.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.26.1...version/0.26.2.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.26.1|[0.26.0...0.26.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.26.0...version/0.26.1)|[0.26.0...0.26.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.26.0...version/0.26.1.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.26.0|[0.25.1...0.26.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.25.1...version/0.26.0)|[0.25.1...0.26.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.25.1...version/0.26.0.diff)| 3 files changed, 14 insertions(+), 18 deletions(-)
0.25.1|[0.24.1...0.25.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.24.1...version/0.25.1)|[0.24.1...0.25.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.24.1...version/0.25.1.diff)| 7 files changed, 10 insertions(+), 14 deletions(-)
0.24.1|[0.24.0...0.24.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.24.0...version/0.24.1)|[0.24.0...0.24.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.24.0...version/0.24.1.diff)| 1 file changed, 1 insertion(+), 1 deletion(-)
0.24.0|[0.23.1...0.24.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.23.1...version/0.24.0)|[0.23.1...0.24.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.23.1...version/0.24.0.diff)| 11 files changed, 117 insertions(+), 102 deletions(-)
0.23.1|[0.23.0...0.23.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.23.0...version/0.23.1)|[0.23.0...0.23.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.23.0...version/0.23.1.diff)| 1 file changed, 2 insertions(+), 2 deletions(-)
0.23.0|X|X|X

Note that the diff stat (last column) doesn't take the `package.json` into account (it
doesn't have to: the `package.json` must be updated by hand before upgrading React Native).

## Why this repository?
`react-native-git-upgrade` is painful. A simple diff by recreating the project is a much much simpler way to get a diff on every new React Native version.

## Notes

### Hooks
React Native [0.59.0-rc.0](https://github.com/pvinis/rn-diff-purge#version-changes) gets hooks! 🎉🥳  
Here are some docs:
- [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)
- [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)

Thanks to the RN team!


## FAQ

### Why starting from 0.23.0?

The starting point is the generation of an app with the CLI tool. I've started from the oldest
version of `react-native` I could go with `react-native-cli` (October 2018).

### How did you do this?

I initialized the 3 or 4 first commits manually to see where was it going. Then I automated
things with this [script](https://github.com/pvinis/rn-diff-purge/blob/master/new-version.sh).

### How can I contribute?

Unfortunately you can't ;). Correct me if I'm wrong but due to the particular structure of the
branch tree, it's impossible to collaborate in the classic way (Pull Request on a non-existing
branch).

Nevertheless, when a new version of React Native is released, I'll have to be prompt to provide
the new diff. I guess having 3 or 4 collaborators on this project will help in the future.
If you're interested, please open an issue to discuss.

Of course, the above doesn't concern suggesting changes on the `master` branch (script or
README.md). Pull Requests are highly welcome!


### Down here!

If you have: 
- questions
- suggestions
- ideas to make this even better
- the urge to just to say hello to me :)

feel free to make an issue or contact me. I'm pretty easy to find!
