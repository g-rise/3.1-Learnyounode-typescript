const fs = require('node:fs')
const path = require('node:path')


const directory = process.argv[2]
const extension = process.argv[3]


fs.readdir(directory, (err, files) => {
    if (err) throw err

    const filteredFiles = files.filter(item => path.extname(item) === `.${extension}`)
    filteredFiles.map(item => console.log(item))
})


// SOLUCIÓ OFICIAL
/*
'use strict'
const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
if (err) return console.error(err)
files.forEach(function (file) {
    if (path.extname(file) === ext) {
        console.log(file)
        }
    })
})
*/
