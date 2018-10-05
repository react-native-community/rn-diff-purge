# Using rn-diff-purge patches

The git patches can be used as a replacement of `react-native upgrade`. The procedure isn't really
straightforward but it's still more efficient than using the upgrade command.

## Procedure

#### 1 Download the git patch

Download the patch for your version, for example:

```shell
curl https://github.com/ncuillery/rn-diff/compare/rn-0.29.0...rn-0.30.0.diff > upgrade-rn.patch
```

#### 2 Prepare the patch

The patch is made for the RnDiffApp located in the *RnDiffApp* folder of this repository.
To use it in your own repository, some changes are needed.

Don't worry about the root folder *RnDiffApp*, it can be ignored with the option `-p 2`
(see https://git-scm.com/docs/git-apply)

Then, some files include the name of the app in their path:

- All files in the `ios` directory (example: `ios/RnDiffApp/AppDelegate.m`)
- Some files in the `android` directory (example:
`android/app/src/main/java/com/rndiffapp/MainActivity.java`)

You have to edit the patch and replace all occurences of `ios/RnDiffApp` and `com/rndiffapp`
by the name of your app.

#### 3 Set up the 3-way merge

By default in case of conflicts, the `git apply` command will fail and leave the files untouched.
It could be interesting to fallback on a 3-way merge (option `--3way`) in order to resolve the
conflicts with your favorite merge tool.

To do this, git needs to know the blob referenced in the patch
(line `index 4c88077..e49e881 100644` for example). So you have to add rn-diff as a remote
repository and fetch it (see this [SO question](http://stackoverflow.com/questions/33577383/git-apply-3way-error-repository-lacks-the-necessary-blob-to-fall-back-on-3-way)
for details).

```shell
git remote add rn-diff https://github.com/ncuillery/rn-diff.git
git fetch rn-diff
```

#### 4 Run the apply command
```shell
git apply upgrade-rn.patch --exclude=package.json -p 2 --3way
```


## Wrap up

```shell
# Download the patch
curl https://github.com/ncuillery/rn-diff/compare/rn-0.29.0...rn-0.30.0.diff > upgrade-rn.patch

# Replace RnDiffApp occurences
appNameCamelCase=MyApp
appNameLowerCase=myapp
sed -i "" "s-ios/RnDiffApp-ios/${appNameCamelCase}-" upgrade-rn.patch
sed -i "" "s-java/com/rndiffapp-java/com/${appNameLowerCase}-" upgrade-rn.patch

# Set up the 3-way merge
git remote add rn-diff https://github.com/ncuillery/rn-diff.git
git fetch rn-diff

# Run the apply command
git apply upgrade-rn.patch --exclude=package.json -p 2 --3way
```

## :warning: Known issues

- A new Java file has been added in [0.29.0](https://github.com/ncuillery/rn-diff/compare/rn-0.28.0...rn-0.29.0#diff-dc772a7e567909f837c8078e7db52a27R1).
It contains the name of the app (package declaration) at line 1. You have to replace
it after applying the patch.
