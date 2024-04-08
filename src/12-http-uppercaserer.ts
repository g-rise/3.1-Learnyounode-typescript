import * as http from "node:http"
var map = require("through2-map")



// let map = require("through2-map")

const port: number = +process.argv[2]


const server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse> = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method != 'POST') {
        res.end('El mètode ha de ser POST')
    }
    // let data = '';
    // req.on('data', chunk => {
    //     data += chunk.toString().toUpperCase();
    // })
    // req.on('end', () => {
    //     res.end(data)
    // })


    req.pipe(map(function (chunk: Buffer) {
        return chunk.toString().toUpperCase()
    })).pipe(res)




    // res.writeHead(200, { 'Content-Type': 'text' })
    // const inStream = fs.createReadStream(file)
    // inStream.pipe(map(function (chunk) {
    //     return chunk.toString().toUpperCase()
    // })).pipe(res)
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})


