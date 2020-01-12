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

