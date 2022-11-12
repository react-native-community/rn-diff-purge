# Instructions for diff generation on new release

###### (assuming you have push permissions)

When a new release of `react-native` is out on [npm](https://www.npmjs.com/package/react-native), do the following:

- Clone the repo, or pull the latest `master` if you have it already cloned.

- Execute the main script.

```sh
./new-release.sh <new-release>
```

So for example, if the new release is `0.79.2`, just run:

```sh
./new-release.sh 0.79.2
```

### Extra credit

- Checkout `old/master` and pull.
- Run `./new-version.sh <new-release>`.

This is because we still maintain the old way of rn-diff, for people with the old version of `react-native-cli`. So if you do the extra credits, first of all you are a good person. Second, remember to tell aaaaall your friends, to uninstall `react-native-cli` and install the latest `@react-native-community/cli`.

Thanks for helping to make purge more complete :D
