const fs = require('node:fs')
const process = require('node:process')


fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.split('\n').length - 1)
})


// SOLUCIÓ OFICIAL
/*
 'use strict'
    const fs = require('fs')
    const file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) can also be used
      const lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
*/