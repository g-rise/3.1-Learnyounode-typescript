import * as http from "node:http"

const url: string = 'http://jsonplaceholder.typicode.com/comments/' // Utilitzo una fake api 

http.get(url, (res: http.IncomingMessage) => {

    res.setEncoding('utf8')



    let data: string = ''
    let chunkId: number = 0

    res.on('data', (chunk: string) => {
        data += chunk
        chunkId++
        console.log(`Aquest és el chunk ${chunkId}`) //  Veig quants chunk es crean 
    })

    res.on('end', () => {
        console.log(data.length)

    })
}).on('error', (e) => {
    console.error(`Error: ${e.message}`)
})

