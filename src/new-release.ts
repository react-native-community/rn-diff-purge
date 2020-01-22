import lineReader from 'line-reader'
import readline from 'readline'
import fs from 'fs'
import { some, none, getRefinement } from 'fp-ts/lib/Option'

import { PurgeError } from './errors'


const AppName='RnDiffApp'
const AppBaseBranch='app-base'
const ReleasesFile= 'RELEASES'


export const newReleaseScript = async (newRelease: string | undefined) => {
	if (missingArg(newRelease)) {
		console.log('Release argument missing.')
		process.exit(PurgeError.ReleaseArgMissing)
	}

	if (await releaseExists(newRelease)) {
		console.log(`Release ${newRelease} already exists.`)
		process.exit(PurgeError.ReleaseExists)
	}

	console.log('diff generation')
}



// ReadmeFile=README.md
// ReadmeTable=README_TABLE.md
// ReadmeTableBig=README_TABLE_BIG.md

// NumberOfReleases=12 # the number of releases on the table

const missingArg = getRefinement<string | undefined, undefined>(newRelease => {
	return newRelease === undefined ?  some(newRelease) : none
})

const releaseExists = async (newRelease: string) => {
	let exists = false

		const fileStream = fs.createReadStream(ReleasesFile)

		const rl = readline.createInterface({
			input: fileStream ,
			crlfDelay: Infinity,
		})

		for await (const line of rl) {
					if (line === newRelease) {
						exists = true
						break
					}
		}

	return exists
}

// function prepare () {
//     git pull
//     yarn install
// }

const generateNewReleaseBranch = () => {
	// go to the base app branch
	//     git worktree add wt-app "$AppBaseBranch"
	//     cd wt-app

	//     # clear any existing stuff
	//     rm -rf "$AppName"

	//     git pull
	//     # make a new branch
	//     branchName=release/"$newRelease"
	//     git branch -D "$branchName" || true
	//     git checkout -b "$branchName"

	//     # generate app
	//    npx react-native init "$AppName" --version "$newRelease"

	//     # commit and push branch
	//     git add "$AppName"
	//     git commit -m "Release $newRelease"
	//     # git push origin --delete "$branchName" || git push origin "$branchName"
	//     # git push --set-upstream origin "$branchName"

	//     # go back to master
	//     cd ..
	//     rm -rf wt-app
	//     git worktree prune
}

// function addReleaseToList () {
//     echo "$newRelease" >> "$ReleasesFile"

//     if command -v tac; then
//         #   take each line ->dedup->    sort them              -> reverse them -> save them
//         cat "$ReleasesFile" | uniq | xargs yarn --silent semver | tac           > tmpfile
//     else
//         #   take each line ->dedup->    sort them              -> reverse them -> save them
//         cat "$ReleasesFile" | uniq | xargs yarn --silent semver | tail -r       > tmpfile
//     fi

//     mv tmpfile "$ReleasesFile"
// }

// function generateDiffs () {
//     if [ ! -d wt-diffs ]; then
//         git worktree add wt-diffs diffs
//     fi

//     cd wt-diffs
//     git pull
//     cd ..

//     IFS=$'\n' GLOBIGNORE='*' command eval 'releases=($(cat "$ReleasesFile"))'
//     for existingRelease in "${releases[@]}"
//     do
//         git diff --binary origin/release/"$existingRelease"..origin/release/"$newRelease" > wt-diffs/diffs/"$existingRelease".."$newRelease".diff
//         git diff --binary origin/release/"$newRelease"..origin/release/"$existingRelease" > wt-diffs/diffs/"$newRelease".."$existingRelease".diff
//     done

//     cd wt-diffs
//     git add .
//     git commit -m "Add release $newRelease diffs"
//     git push
//     cd ..
// }

// function pushMaster () {
//     # commit and push
//     git add .
//     git commit -m "Add release $newRelease"
//     git push
// }

// function generateTable () {
//     head -n "$NumberOfReleases" "$ReleasesFile" | ./generate-table.js > "$ReadmeTable"
// }

// function generateBigTable () {
//     cat "$ReleasesFile" | ./generate-table.js --big > "$ReadmeTableBig"
// }

// ReadmeHeader=README_HEADER.md
// ReadmeFooter=README_FOOTER.md

// function breakUpReadme () {
//     perl -p0e 's/(.*## Diff table[^\n]*\n\n)(.*)/$1/smg' "$ReadmeFile" > "$ReadmeHeader"
//     perl -p0e 's/(.*)(\n## To see.*)/$2/smg' "$ReadmeFile" > "$ReadmeFooter"
// }

// function makeUpReadme () {
//     cat "$ReadmeHeader" "$ReadmeTable" "$ReadmeFooter" > "$ReadmeFile"
// }

// function generateReadme () {
//     breakUpReadme
//     makeUpReadme
// }

// function generateGHPages () {
//     cp docs/_index.html docs/index.html
//     yarn --silent markdown "$ReadmeTableBig" >> docs/index.html
// }

// function cleanUp () {
//     rm -rf "$ReadmeHeader" "$ReadmeFooter" "$ReadmeTable" "$ReadmeTableBig"
//     rm -rf wt-app
//     git worktree prune
// }



// # prepare
// # generateNewReleaseBranch
// # addReleaseToList
// # generateDiffs

// # generateTable
// # generateReadme

// # generateBigTable
// # generateGHPages

// # cleanUp
// # pushMaster
