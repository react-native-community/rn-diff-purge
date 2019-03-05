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

