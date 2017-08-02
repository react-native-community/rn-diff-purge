# New version generation instructions

To generate `0.46.4 -> 0.47.0`

```sh
./new-version.sh rn-0.46.4 0.47.0
```

Verify the commit is ok, with the `package.json` file updated and any other file changes.

If all is well, press `y` to push the branch.

Afterwards, commit the new line on `README.md` and push to master.
