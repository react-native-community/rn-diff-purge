#!/usr/bin/env node

import core from "@actions/core"
import github from "@actions/github"

const repositoryData = {
	owner: "react-native-community",
	repo: "rn-diff-purge",
}

const releasesFileName = "RELEASES"

;(async () => {
	const client = new github.GitHub(process.argv[1])

	await Promise.all(
		github.context.payload.commits.map(async ({ id: commitRef }) => {
			const {
				data: { files },
			} = await client.repos.getCommit({
				...repositoryData,
				ref: commitRef,
			})

			const [releaseFile] = files.filter(
				({ filename }) => filename === releasesFileName
			)

			if (!releaseFile) {
				core.debug(`No release file changed on commit ${commitRef}, moving on`)

				return
			}

			core.debug(
				`Release file changed on commit ${commitRef}, sending notification`
			)

			await client.repos.createDispatchEvent({
				...repositoryData,
				repo: "upgrade-support",
				event_type: "NEW_RELEASE",
			})
		})
	)
})()
