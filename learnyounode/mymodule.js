const fs = require('node:fs')
const path = require('node:path')


module.exports = function (directory, extension, callback) {
    fs.readdir(directory, (err, files) => {
        if (err) return callback(err)

        const filesFiltered = files.filter(item => path.extname(item) === `.${extension}`)
        callback(null, filesFiltered)
    })

}



// SOLUCIÓ OFICIAL
/*
'use strict'
const fs = require('fs')
const path = require('path')

module.exports = function (dir, filterStr, callback) {
    fs.readdir(dir, function (err, list) {
    if (err) {
        return callback(err)
    }

    list = list.filter(function (file) {
        return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
    })
}

*/

