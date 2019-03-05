# RN diff PURGE

# THIS REPO HAS MOVED TO THE OFFICIAL REACT-NATIVE-COMMUNITY ORGANIZATION. 😍
# FIND IT HERE:  
# 💪 [react-native-community/rn-diff-purge](https://github.com/react-native-community/rn-diff-purge) 🎉
## Huge thanks to everyone involved, and everyone using and praising this repo! No, you are the best!


 add ncuillery and make paragraph

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

## Diff table (full table [HERE](https://pvinis.github.io/rn-diff-purge))

| From->To    | P                                                                                               | U                                                                                               | R                                                                                               | G                                                                                               | E                                                                                               |                                                                                                           | T                                                                                                         | I                                                                                                    | M                                                                                          | E                                                                                          | !                                                                                          | !   |
| ----------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | --- |
| 0.58.6      | X                                                                                               | -                                                                                               | -                                                                                               | -                                                                                               | -                                                                                               | -                                                                                                         | -                                                                                                         | -                                                                                                    | -                                                                                          | -                                                                                          | -                                                                                          | -   |
| 0.58.5      | [->0.58.6](https://github.com/pvinis/rn-diff-purge/compare/version/0.58.5..version/0.58.6)      | X                                                                                               | -                                                                                               | -                                                                                               | -                                                                                               | -                                                                                                         | -                                                                                                         | -                                                                                                    | -                                                                                          | -                                                                                          | -                                                                                          | -   |
| 0.58.1      | [->0.58.6](https://github.com/pvinis/rn-diff-purge/compare/version/0.58.1..version/0.58.6)      | [->0.58.5](https://github.com/pvinis/rn-diff-purge/compare/version/0.58.1..version/0.58.5)      | X                                                                                               | -                                                                                               | -                                                                                               | -                                                                                                         | -                                                                                                         | -                                                                                                    | -                                                                                          | -                                                                                          | -                                                                                          | -   |
| 0.58.0      | [->0.58.6](https://github.com/pvinis/rn-diff-purge/compare/version/0.58.0..version/0.58.6)      | [->0.58.5](https://github.com/pvinis/rn-diff-purge/compare/version/0.58.0..version/0.58.5)      | [->0.58.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.58.0..version/0.58.1)      | X                                                                                               | -                                                                                               | -                                                                                                         | -                                                                                                         | -                                                                                                    | -                                                                                          | -                                                                                          | -                                                                                          | -   |
| 0.55.0      | [->0.58.6](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0..version/0.58.6)      | [->0.58.5](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0..version/0.58.5)      | [->0.58.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0..version/0.58.1)      | [->0.58.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0..version/0.58.0)      | X                                                                                               | -                                                                                                         | -                                                                                                         | -                                                                                                    | -                                                                                          | -                                                                                          | -                                                                                          | -   |
| 0.55.0-rc.2 | [->0.58.6](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0-rc.2..version/0.58.6) | [->0.58.5](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0-rc.2..version/0.58.5) | [->0.58.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0-rc.2..version/0.58.1) | [->0.58.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0-rc.2..version/0.58.0) | [->0.55.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0-rc.2..version/0.55.0) | X                                                                                                         | -                                                                                                         | -                                                                                                    | -                                                                                          | -                                                                                          | -                                                                                          | -   |
| 0.55.0-rc.1 | [->0.58.6](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0-rc.1..version/0.58.6) | [->0.58.5](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0-rc.1..version/0.58.5) | [->0.58.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0-rc.1..version/0.58.1) | [->0.58.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0-rc.1..version/0.58.0) | [->0.55.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0-rc.1..version/0.55.0) | [->0.55.0-rc.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0-rc.1..version/0.55.0-rc.2) | X                                                                                                         | -                                                                                                    | -                                                                                          | -                                                                                          | -                                                                                          | -   |
| 0.55.0-rc.0 | [->0.58.6](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0-rc.0..version/0.58.6) | [->0.58.5](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0-rc.0..version/0.58.5) | [->0.58.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0-rc.0..version/0.58.1) | [->0.58.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0-rc.0..version/0.58.0) | [->0.55.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0-rc.0..version/0.55.0) | [->0.55.0-rc.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0-rc.0..version/0.55.0-rc.2) | [->0.55.0-rc.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.55.0-rc.0..version/0.55.0-rc.1) | X                                                                                                    | -                                                                                          | -                                                                                          | -                                                                                          | -   |
| 0.54.4      | [->0.58.6](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.4..version/0.58.6)      | [->0.58.5](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.4..version/0.58.5)      | [->0.58.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.4..version/0.58.1)      | [->0.58.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.4..version/0.58.0)      | [->0.55.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.4..version/0.55.0)      | [->0.55.0-rc.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.4..version/0.55.0-rc.2)      | [->0.55.0-rc.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.4..version/0.55.0-rc.1)      | [->0.55.0-rc.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.4..version/0.55.0-rc.0) | X                                                                                          | -                                                                                          | -                                                                                          | -   |
| 0.54.3      | [->0.58.6](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.3..version/0.58.6)      | [->0.58.5](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.3..version/0.58.5)      | [->0.58.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.3..version/0.58.1)      | [->0.58.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.3..version/0.58.0)      | [->0.55.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.3..version/0.55.0)      | [->0.55.0-rc.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.3..version/0.55.0-rc.2)      | [->0.55.0-rc.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.3..version/0.55.0-rc.1)      | [->0.55.0-rc.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.3..version/0.55.0-rc.0) | [->0.54.4](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.3..version/0.54.4) | X                                                                                          | -                                                                                          | -   |
| 0.54.2      | [->0.58.6](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.2..version/0.58.6)      | [->0.58.5](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.2..version/0.58.5)      | [->0.58.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.2..version/0.58.1)      | [->0.58.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.2..version/0.58.0)      | [->0.55.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.2..version/0.55.0)      | [->0.55.0-rc.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.2..version/0.55.0-rc.2)      | [->0.55.0-rc.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.2..version/0.55.0-rc.1)      | [->0.55.0-rc.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.2..version/0.55.0-rc.0) | [->0.54.4](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.2..version/0.54.4) | [->0.54.3](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.2..version/0.54.3) | X                                                                                          | -   |
| 0.54.1      | [->0.58.6](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.1..version/0.58.6)      | [->0.58.5](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.1..version/0.58.5)      | [->0.58.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.1..version/0.58.1)      | [->0.58.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.1..version/0.58.0)      | [->0.55.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.1..version/0.55.0)      | [->0.55.0-rc.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.1..version/0.55.0-rc.2)      | [->0.55.0-rc.1](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.1..version/0.55.0-rc.1)      | [->0.55.0-rc.0](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.1..version/0.55.0-rc.0) | [->0.54.4](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.1..version/0.54.4) | [->0.54.3](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.1..version/0.54.3) | [->0.54.2](https://github.com/pvinis/rn-diff-purge/compare/version/0.54.1..version/0.54.2) | X   |

## To see the full table containing all versions click [HERE](https://pvinis.github.io/rn-diff-purge)

## Notes

### Hooks
React Native [0.59.0-rc.0](https://github.com/pvinis/rn-diff-purge#version-changes) gets hooks! 🎉🥳  
Here are some docs:
- [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)
- [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)

Thanks to the RN team!

## Why this repository?
`react-native-git-upgrade` is painful. A simple diff by recreating the project is a much much simpler way to get a diff on every new React Native version.


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
