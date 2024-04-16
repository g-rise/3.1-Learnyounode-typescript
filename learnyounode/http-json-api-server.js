const http = require('node:http')
// const url = require('node:url')



const port = +process.argv[2]

const server = http.createServer((req, res) => {
    const myurl = new URL(req.url, `http://${req.headers.host}`)

    // Altre mètode per trobar la url
    // const myURL = url.parse(req.url)

    const timestamp = Date.parse(myurl.search.slice(5)) // Agafo el valor de search a partir del caracter 5 --> amb Date.parse em torna un valor en millisegons
    const myDate = new Date(timestamp) //Creo una Date a partir del timestamp

    const hours = myDate.getHours()
    const minutes = myDate.getMinutes()
    const seconds = myDate.getSeconds()

    const hora = {
        hour: hours,
        minute: minutes,
        second: seconds
    }

    const tempsMillisecons = {
        unixtime: timestamp
    }
    console.log(myurl)



    if (myurl.pathname === '/api/parsetime') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(hora))
    }

    if (myurl.pathname === '/api/unixtime') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(tempsMillisecons))
    }

})


server.listen(port)

// SOLUCIÓ OFICIAL
/*
'use strict'
    const http = require('http')

    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }

    function unixtime (time) {
      return { unixtime: time.getTime() }
    }

    const server = http.createServer(function (req, res) {
      const parsedUrl = new URL(req.url, 'http://example.com')
      const time = new Date(parsedUrl.searchParams.get('iso'))
      let result

      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }

      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
 */

