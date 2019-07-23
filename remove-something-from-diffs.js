#!/usr/bin/env node

const fs = require('fs')
const replace = require('replace-in-file')
const escreg = require('escape-string-regexp')


const diffsDir = 'wt-diffs/diffs'


const removeSomething = async () => {
    const allFiles = await fs.readdirSync(diffsDir)

    // separate files list in smaller chunks to avoid the `too many files open` errors
    while (allFiles.length) {
        const fewFiles = allFiles.splice(0, 10)
        fewFiles.forEach(file => {
            const fullpath = `${diffsDir}/${file}`
            console.log(fullpath)

            const toBeReplaced = '@@ -5,11 +5,11 @@\n 	<key>CFBundleDevelopmentRegion</key>\n 	<string>en</string>\n 	<key>CFBundleDisplayName</key>\n-	<string>RnDiffApp</string>\n+	<string>Hello App Display Name</string>\n'

            replace.sync({
                files: fullpath,
                from: new RegExp(escreg(toBeReplaced)),
                to: '@@ -9,11 +9,11 @@\n',
            })
        })
    }
}


(async () => {
    await removeSomething()
})()
