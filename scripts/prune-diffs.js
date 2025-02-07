#!/usr/bin/env node

import fs from "fs"
import path from "path"
import semver from "semver"

const MINIMUM_STORED_VERSION = "0.65.0"

const DIFFS_DIR = "./wt-diffs/diffs"

function pruneDiffFiles() {
	const files = fs.readdirSync(DIFFS_DIR)

	files.forEach((file) => {
		// Only consider files ending with '.patch'
		if (path.extname(file) !== ".diff") return

		const [fromVersion, toVersionWithExt] = file.split("..")
		const [toVersion] = toVersionWithExt.split(".diff")

		if (
			semver.lt(fromVersion, MINIMUM_STORED_VERSION) ||
			semver.lt(toVersion, MINIMUM_STORED_VERSION)
		) {
			const filePath = path.join(DIFFS_DIR, file)
			fs.unlinkSync(filePath)
			console.log(`Removed diff file: ${file}`)
		}
	})
}

function pruneRELEASESFile() {
	const releasesContent = fs.readFileSync("RELEASES", "utf8")
	const releases = releasesContent.split("\n").filter(Boolean) // Remove empty lines
	
	const keptReleases = releases.filter(version => 
		!semver.lt(version, MINIMUM_STORED_VERSION)
	)
	
	fs.writeFileSync("RELEASES", keptReleases.join("\n") + "\n")
	
	const removedCount = releases.length - keptReleases.length
	console.log(`Removed ${removedCount} old releases from RELEASES file`)
}

const exists = fs.existsSync(DIFFS_DIR)
if (!exists) {
	console.log("Diffs worktree does not exist.")
	console.log("Use `git worktree add wt-diffs diffs` to create it.")
	process.exit(1)
}

pruneDiffFiles()
pruneRELEASESFile()
