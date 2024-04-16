'use strict'
const http = require('node:http')
//const bl = require('bl') // No caldria perquè no l'utilitzo

const url = process.argv[2]


// SOLUCIÓ 1 

http.get(url, (response) => {
    response.setEncoding('utf8')

    let data = ""
    response.on('error', console.error)
    response.on('data', (chunk) => {
        // console.log(chunk)
        data += chunk
    })
    response.on('end', () => {
        console.log(data.length)
        console.log(data)
    })
})



/*
// SOLUCIÓ 2
http.get(url, (response) => {
    response.pipe(bl((err, data) => {
        if (err) { console.error }
        data = data.toString()
        console.log(data.length)
        console.log(data)

    }))
})
*/