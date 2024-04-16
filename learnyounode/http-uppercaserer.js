const http = require('node:http')

// const fs = require('node:fs')
// let map = require("through2-map")

const port = process.argv[2]


const server = http.createServer((req, res) => {
  if (req.method != 'POST') {
    res.end('El mètode ha de ser POST')
  }
  let data = '';
  req.on('data', chunk => {
    data += chunk.toString().toUpperCase();
  })
  req.on('end', () => {
    res.end(data)
  })




  // res.writeHead(200, { 'Content-Type': 'text' })
  // const inStream = fs.createReadStream(file)
  // inStream.pipe(map(function (chunk) {
  //     return chunk.toString().toUpperCase()
  // })).pipe(res)
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

// SOLUCIÓ OFICIAL
/**
 * 'use strict'
    const http = require('http')
    const map = require('through2-map')

    const server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))
 */