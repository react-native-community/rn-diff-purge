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

            const toBeReplaced = 'diff --git a/RnDiffApp/android/app/src/main/res/values/strings.xml b/RnDiffApp/android/app/src/main/res/values/strings.xml\nindex 890b3b408..0c79c4bad 100644\n--- a/RnDiffApp/android/app/src/main/res/values/strings.xml\n+++ b/RnDiffApp/android/app/src/main/res/values/strings.xml\n@@ -1,3 +1,3 @@\n <resources>\n-    <string name="app_name">RnDiffApp</string>\n+    <string name="app_name">Hello App Display Name</string>\n </resources>\n'

            replace.sync({
                files: fullpath,
                from: new RegExp(escreg(toBeReplaced)),
                to: '',
            })
        })
    }
}


(async () => {
    await removeSomething()
})()
