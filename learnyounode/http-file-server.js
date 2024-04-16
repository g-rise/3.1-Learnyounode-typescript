const http = require('node:http')
const fs = require('node:fs')


const port = +process.argv[2]
const file = process.argv[3]

const server = http.createServer((request, response) => {
    const stream = fs.createReadStream(file)

    stream.pipe(response)
});

server.listen(port, () => {
    console.log(`Server has started on port: ${port}`)
})
/*
const server = http.createServer((request, response) => {
    const stream = fs.createReadStream(file)

    let data = ""

    stream.on('data', (chunk) => {
        // console.log(chunk.length)
        // console.log(chunk.toString())
        data += chunk
    })

    stream.on('end', () => {
        console.log(data)
    })

    response.write(data)


    // response.end(() => {
    //     console.log(data)

    // })

    // response.write(`Escoltan en el port.... ${port}`)

    // const contingut = fs.readFileSync(file)
    // console.log(contingut.toString())
    // console.log(contingut.length)
})

server.on('connection', (socket) => {
    console.log('Connected')
})

server.listen(port)*/