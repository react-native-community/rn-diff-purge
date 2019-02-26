#!/usr/bin/env node

const table = require('markdown-table')
const R = require('ramda')
const semver = require('semver')
const fs = require('fs')
const replace = require('replace-in-file')
const execa = require('execa')



const VersionsFile = 'VERSIONS.md'

 
 

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






// newVersion=$1

// # go to project branch
// git checkout project
// git pull

// # get previous version
// prevTag=$(git tag --points-at HEAD)
// prevVersion=$(basename "$prevTag")


// # save the stats
// diffStat=$(git --no-pager diff HEAD~1 --shortstat)

// # print diff
// git --no-pager diff HEAD~1

//   # push the project branch
//   git push origin project --tags


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

// # prepare readme update
// git add README.md
// git commit -m "Add version ${newVersion}"

// # print diff
// git --no-pager diff HEAD~1

// # ask for confirmation before pushing
// echo -e "\\nIs that also OK ? (Yn)"
// read -r confirmation

// if [ -z "$confirmation" ] || [ "$confirmation" = "y" ] || [ "$confirmation" = "Y" ]
// then
//   echo -e "Pushing master branch.."

//   # push the master branch
//   git push origin master
// fi


execa('./generate-new-version-branch.sh', ['0.24.1']).then(({stdout}) => console.log(stdout))
// (async () => {
    // await main() 
// })()
