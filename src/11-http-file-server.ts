import * as http from "node:http"
import * as fs from "node:fs"

const port: number = +process.argv[2]
const file: string = process.argv[3]


const server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse> = http.createServer((req, res) => {
    // res.writeHead(200, {
    //     'Content-Type': 'text/plain',
    // })
    // fs.readFile(file, (err, data) => {
    //     if (err) {
    //         res.writeHead(404)
    //         res.write("Archiu no encontrat")
    //     } else {
    //         res.write(data.toString())
    //         res.end()
    //     }
    // })

    const readStream = fs.createReadStream(file)

    // Pipe the read stream to the HTTP response
    readStream.pipe(res)

    // Optional: Handle errors (e.g., file not found)
    readStream.on('error', (err) => {
        res.statusCode = 500
        res.end(`Error reading file: ${err.message}`)
    })
})


server.listen(port, () => {
    console.log(`Server has started on port: ${port}`)
})
