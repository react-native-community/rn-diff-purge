#!/usr/bin/env node

import fs from "fs"
import replace from "replace-in-file"

const diffsDir = "wt-diffs/diffs"

const removeSomething = async () => {
	const allFiles = await fs.readdirSync(diffsDir)

	// separate files list in smaller chunks to avoid the `too many files open` errors
	while (allFiles.length) {
		const fewFiles = allFiles.splice(0, 10)
		fewFiles.forEach((file) => {
			const fullpath = `${diffsDir}/${file}`
			// const fullpath = `wt-diffs/diffs/0.43.1..0.67.5.diff`
			console.log(fullpath)

			// check on https://regex101.com
			const toBeReplaced =
				/diff --git a\/RnDiffApp\/vendor\/bundle\/ruby.*?diff/s

			replace.sync({
				files: fullpath,
				from: new RegExp(toBeReplaced),
				to: "diff",
			})
		})
	}
}

;(async () => {
	await removeSomething()
})()
