# RN diff PURGE

This repository exposes an untouched React Native app generated with the CLI
`react-native init RnDiffApp` and upgraded with the CLI `react-native upgrade`
after each version of React Native.

A dedicated branch per version makes changes very easy
to watch. For example:

* https://github.com/ncuillery/rn-diff/compare/rn-0.28.0...rn-0.29.0
(Change in Android template)
* https://github.com/ncuillery/rn-diff/compare/rn-0.29.0...rn-0.29.2
(no change)
* https://github.com/ncuillery/rn-diff/compare/rn-0.30.0...rn-0.31.0
(minor change in `.flowconfig` )

See table below for the complete list.

This repository can also be used to upgrade React Native with a git-like interface which is
faster and easier than running the `react-native upgrade` command.
See [USAGE.md](https://github.com/ncuillery/rn-diff/blob/master/USAGE.md) for details.

Please :star: this repository if I helped you ;)

## Version changes

Version|Compare view|Patch|Stats
----|----|----|----
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
look at the `project.pbxproj`, there is only one flag added, so the best decision
for this file is to keep it untouched and report the flag yourself on the right
position.

## Known issues

### babel

The version 0.56.0 and 0.57.0 changed a lot about the packager and babel. Because the upgrade was not easy or successful, I created a new project over the existing, and got the diff that way.

The version jumps from 0.55.4 to 0.57.0.

### index.js

The version 0.49.0 introduces a unified entry-point: `index.ios.js` and `index.android.js` were replaced by `index.js`.

rn-diff doesn't show that change because the concerned files are [skipped during the upgrade process](https://github.com/facebook/react-native/blob/0cd69e8a02d254577fac9ccd3ff8a1727a024cc8/local-cli/generator/copyProjectTemplateAndReplace.js#L45-L47).

That change is referenced in some native files though, so you have to follow the update guide in the [0.49.0 release notes](https://github.com/facebook/react-native/releases/tag/v0.49.0).


### AndroidManifest.xml

Due to an issue with the Yeoman generator used before 0.39.0 (the `AndroidManifest.xml`
file was never updated), the diff of this file
[from 0.38.0 to 0.39.0](https://github.com/ncuillery/rn-diff/compare/rn-0.38.0...rn-0.39.0#diff-ce925d749acbf5fb99afc2d465a0f352)
is irrelevant. It shows the diff from **0.23.0** to 0.39.0 because the RnDiffApp has been
generated with 0.23.0. You'll probably have less changes on this file when upgrading from 0.38.0 to
0.39.0 depending of the version your app has been generated with. See
[#8](https://github.com/ncuillery/rn-diff/issues/8) for details.

## FAQ

### Why starting from 0.23.0 ?

The starting point is the generation of an app with the CLI tool. I've started from the first
version of `react-native` since the release 0.2.0 the `react-native-cli` (March 2016), the first
to seem mature and stable (3 months after the previous release).

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
README.md). Pull Requests are highly welcome !
