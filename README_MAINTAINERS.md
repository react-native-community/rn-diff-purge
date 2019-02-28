# New version generation instructions

To generate `0.57.2 -> 0.57.3`:



```sh
./new-version.sh 0.57.3
```

Note: Always go one by one.

Verify the commit is ok, with the `package.json` file updated and any other file changes.

If all is well, press `y` to push the branch.

Afterwards, commit the new line on `README.md` and push to master.
