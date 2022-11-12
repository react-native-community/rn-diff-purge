#!/usr/bin/env node

import { markdownTable } from "markdown-table"
import { map, pipe, range, dropLast, includes, split } from "ramda"
import semver from "semver"
import getStdin from "get-stdin"

const RepoUrl = "https://github.com/react-native-community/rn-diff-purge"

const generateTable = async () => {
	const isBig = includes("--big", process.argv)
	const input = await getStdin()
	const releases = dropLast(1, split("\n")(input))

	// words or phrases of length 12
	const comments = [
		"react native",
		"this is cool",
		"purge time!!",
		"i love diffs",
		"diffs == fun",
		"rn core team",
	]

	const diffTable = [
		[
			"From->To",
			...comments[Math.floor(Math.random() * comments.length)]
				.toUpperCase()
				.split(""),
		],
		...map((fromRelease) => {
			const length = releases.length
			return [
				fromRelease,
				...pipe(
					map((idx) => {
						const toRelease = releases[idx]
						if (semver.eq(fromRelease, toRelease)) {
							return "X"
						}
						if (semver.gt(fromRelease, toRelease)) {
							return "-"
						}
						return isBig
							? `[->${toRelease}](${RepoUrl}/compare/release/${fromRelease}..release/${toRelease}) [core](https://github.com/facebook/react-native/compare/v${fromRelease}...v${toRelease})`
							: `[->${toRelease}](${RepoUrl}/compare/release/${fromRelease}..release/${toRelease})`
					})
				)(range(0, length)),
			]
		}, releases),
	]

	console.log(markdownTable(diffTable))
}

;(async () => {
	await generateTable()
})()
