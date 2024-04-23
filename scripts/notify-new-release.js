#!/usr/bin/env node

import { Octokit, App } from "octokit"

const repositoryData = {
	owner: "react-native-community",
	repo: "rn-diff-purge",
}

const releasesFileName = "RELEASES"

;(async () => {
	const octokit = new Octokit({ auth: process.env.SPECIAL_GITHUB_TOKEN })

	// await Promise.all(
	const commits = await octokit.rest.repos.listCommits(repositoryData)
	console.log(commits)
	// octokit.context.payload.commits.map(async ({ id: commitRef }) => {
	// 	const {
	// 		data: { files },
	// 	} = await octokit.rest.repos.getCommit({
	// 		...repositoryData,
	// 		ref: commitRef,
	// 	})

	// 	const [releaseFile] = files.filter(
	// 		({ filename }) => filename === releasesFileName
	// 	)

	// 	if (!releaseFile) {
	// 		console.log(`No release file changed on commit ${commitRef}, moving on`)

	// 		return
	// 	}

	// 	console.log(
	// 		`Release file changed on commit ${commitRef}, sending notification`
	// 	)

	// 	await octokit.rest.repos.createDispatchEvent({
	// 		...repositoryData,
	// 		repo: "upgrade-support",
	// 		event_type: "NEW_RELEASE",
	// 	})
	// })
	// )
})()
