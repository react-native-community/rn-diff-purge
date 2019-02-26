#!/usr/bin/env node

const table = require('markdown-table')
const R = require('ramda')
const semver = require('semver')
const fs = require('fs')
const replace = require('replace-in-file')
const execa = require('execa')
const shell = require('shelljs')



const AppBaseBranch = 'app-base'
const AppName = 'RnDiffApp'
 
 

const main = async () => {
    const newVersion = '0.33.0'
    await generateNewVersionBranch(newVersion) 
}


const generateReadme = () => {
    const versions = [
        '0.59.1',
        '0.59.0',
        '0.59.0-rc.2',
        '0.58.5',
        '0.59.0-rc.1',
        '0.59.0-rc.0',
        '0.58.4',
        '0.58.3',
        '0.58.2',
        '0.58.1',
        '0.58.0',
        '0.57.8',
    ]

    // words or phrases of length 12
    const comments = [
        'react native',
        'this is cool',
        'purge time!!',
        'i love diffs',
        'diffs == fun',
        'rn core team',
    ]

    const diffTable = [
        ['From->To', ...comments[Math.floor(Math.random() * comments.length)] .toUpperCase() .split('')],
        ...R.map(fromVersion => {
            const length = versions.length
            return [
                fromVersion,
                ...R.pipe(
                    R.map(idx => {
                        const toVersion = versions[idx]
                        if (semver.eq(fromVersion, toVersion)) {
                            return 'X'
                        }
                        if (semver.gt(fromVersion, toVersion)) {
                            return '-'
                        }
                        return `->${toVersion}`
                    }),
                )(R.range(0, length)),
            ]
        }, versions),
    ]

    console.log(table(diffTable))
    fs.writeFileSync('Test.md', table(diffTable))
}



// # get previous version
// prevTag=$(git tag --points-at HEAD)
// prevVersion=$(basename "$prevTag")


// # save the stats
// diffStat=$(git --no-pager diff HEAD~1 --shortstat)


// # update readme
// diffUrl="[${prevVersion}...${newVersion}](https://github.com/pvinis/rn-diff-purge/compare/version/${prevVersion}...version/${newVersion})"
// patchUrl="[${prevVersion}...${newVersion}](https://github.com/pvinis/rn-diff-purge/compare/version/${prevVersion}...version/${newVersion}.diff)"
// rnDiffUrl="[${prevVersion}...${newVersion}](https://github.com/facebook/react-native/compare/v${prevVersion}...v${newVersion})"

// # insert a row in the version table
// # shellcheck disable=SC1004
// sed -i '' 's/----|----|----|----|----/----|----|----|----|----\
// NEWLINE/g' README.md
// # edit the new line with the version info
// sed -i "" "s@NEWLINE@${newVersion}|${diffUrl}|${patchUrl}|${diffStat}|${rnDiffUrl}@" README.md

// (async () => {
    // await main() 
// })()
