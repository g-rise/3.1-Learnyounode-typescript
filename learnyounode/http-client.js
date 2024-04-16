const http = require('node:http')

const url = process.argv[2]


http.get(url, (response) => {
    let data = ""
    response.setEncoding('utf8')

    response.on('error', () => {
        console.error(`Hi ha hagut un error`)
    })

    response.on('data', (chunk) => {
        // console.log(url)
        console.log(chunk)
        data += chunk
    })

    /*
    response.on('end', () => {
        console.log(data.length)
    })*/
})

// SOLUCIÓ Oficial
/*
'use strict'
const http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
}).on('error', console.error)
*/