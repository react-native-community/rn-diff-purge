import lineReader from 'line-reader'
import { some, none, getRefinement } from 'fp-ts/lib/Option'

import { PurgeError } from './errors'


const AppName='RnDiffApp'
const AppBaseBranch='app-base'
const ReleasesFile= 'RELEASES'


export const newReleaseScript = (newRelease: string | undefined) => {
	if (missingArg(newRelease)) {
		console.log('Release argument missing.')
		process.exit(PurgeError.ReleaseArgMissing)
	}

	if (releaseExists(newRelease)) {
		console.log(`Release ${newRelease} already exists.`)
		process.exit(PurgeError.ReleaseExists)
	}

	console.log('diff generation')
}




const missingArg = getRefinement<string | undefined, undefined>(newRelease => {
	return newRelease === undefined ?  some(newRelease) : none
})

const releaseExists = (newRelease: string) => {
	let exists = false
	lineReader.eachLine(ReleasesFile, (line, last) => {
		if (line === newRelease) {
			exists = true
			return false // stop reading
		}
	})
	return exists
}

