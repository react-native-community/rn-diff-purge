
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
