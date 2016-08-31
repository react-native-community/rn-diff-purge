# RN diff

This repository exposes an untouched React Native app generated with the CLI
`react-native init RnDiffApp` and upgraded by the CLI `react-native upgrade`
after each version of React Native.

A dedicated branch per version makes changes very easy
to watch. For example:

* https://github.com/ncuillery/rn-diff/compare/rn-0.28.0...rn-0.29.0
(Change in Android template)
* https://github.com/ncuillery/rn-diff/compare/rn-0.29.0...rn-0.29.2
(no change)
* https://github.com/ncuillery/rn-diff/compare/rn-0.30.0...rn-0.31.0
(minor change in `.flowconfig` )

Please :star: this repository if I helped you ;)

## Why this repository ?

After an upgrade of React Native on your project, according to the
[documentation](https://facebook.github.io/react-native/docs/upgrading.html),
you have to run the CLI command `react-native upgrade` to upgrade the files in the
`ios` and `android` directories with the new template.

This process can be painful if you had made some changes in these files, especially
those which are not meant to be read by human (the goddam `project.pbxproj` !).
It inevitably happens by using 3rd-party librairies or changing native
stuff (device orientation, splash screen, etc.).

The CLI detects any file changed by user, shows the diff and asks user if it
must be override or keep untouched.

By knowing the real changes due to the React Native upgrade, you can easily
know which option is the best for you. For example, from
[the 0.28.0 to the 0.29.0](https://github.com/ncuillery/rn-diff/compare/rn-0.28.0...rn-0.29.0)
the changes in the `android` files are huge so it may be easier for you to override
and reapplied your changes (relinking your 3-rd parties, etc.) **BUT** if you
look at the `project.pbjproj`, there is only one flag added, so the best decision
for this file is to keep it untouched and report the flag yourself on the right
position.

## FAQ

### Why starting from 0.23.0 ?

The starting point is the generation of an app with the CLI tool. I've started from the first
version of `react-native` since the release 0.2.0 the `react-native-cli` (March 2016) which
is the first to seem mature and stable (3 months after the previous release).

### How did you do this ?

I initialized the 3 or 4 first commits manually to see where was it going. Then I automated
things with this [script](https://github.com/ncuillery/rn-diff/blob/master/new-version.sh).

### How can I contribute ?

Unfortunately you can't ;). Correct me if I'm wrong but due to the particular structure of the
branch tree, it's impossible to collaborate in the classic way (Pull Request on a non-existing
branch).

Nevertheless, when a new version of React Native is released, I'll have to be prompt to provide
the new diff. I guess having 3 or 4 collaborators on this project will help in the future.
If you're interested, please open an issue to discuss.

Of course, the above doesn't concern suggesting changes on the `master` branch (script or
README.md). Pull Requests are highly welcomed !
