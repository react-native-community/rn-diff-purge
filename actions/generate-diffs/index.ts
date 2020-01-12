
import { newReleaseScript } from '../../src/new-release'

console.log('aha github')

const newRelease = '0.60.0';
(async () => {
    await newReleaseScript(newRelease)
})()
