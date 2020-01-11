import { newReleaseScript } from './src/new-release'

console.log('aha local')

const newRelease = process.argv[2]
newReleaseScript(newRelease)
