import fs from 'fs'
import { some, none, getRefinement } from 'fp-ts/lib/Option'

import { PurgeError } from './errors'


const AppName='RnDiffApp'
const AppBaseBranch='app-base'
const ReleasesFile= 'RELEASES'


export const newReleaseScript = (newRelease: string | undefined) => {
	guardMissingArg(newRelease)
	guardExisting(newRelease)
}



const guardMissingArg = getRefinement<string | undefined, string>(newRelease => {
	if (newRelease === undefined) {
		console.log('Release argument missing.')
		// process.exit(PurgeError.ReleaseArgMissing)
		return none
	}
	some(newRelease)
})

const guardExisting = (newRelease: string) => {
	const releasesBuffer = fs.readFileSync(ReleasesFile)
	const exists = releasesBuffer.includes(newRelease)
	if (exists) {
		console.log(`Release ${newRelease} already exists.`)
		process.exit(PurgeError.ReleaseExists)
	}
}

