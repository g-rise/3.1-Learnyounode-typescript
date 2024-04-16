const net = require('node:net')

const server = net.createServer((c) => {
    // 'connection' listener.
    console.log('client connected')

    const date = new Date()
    // console.log(typeof date)
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')

    const dateToString = `${year}-${month}-${day} ${hours}:${minutes}\n`


    /**
     * date.getMonth() // empieza en 0
     date.getDate() // devuelve día del mes, empieza en 1
     date.getHours()
     date.getMinutes()
     */

    c.write(dateToString)
    c.end()
})

server.listen(process.argv[2])


// SOLUCIÓ LEARNYOUNODE
/**
 * 'use strict'
    const net = require('net')

    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }

    function now () {
      const d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }

    const server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })

    server.listen(Number(process.argv[2]))
 */