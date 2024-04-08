import * as http from "node:http"

const port: number = Number(process.argv[2])


// Funció que retorna un objecte amb hores,minuts i segons
function parsetime(time: Date) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

// Funció que retorna l'unixtime
function unixtime(time: Date) {
    //console.log(time)
    return { unixtime: time.getTime() }
}

const server = http.createServer(function (req: http.IncomingMessage, res: http.ServerResponse<http.IncomingMessage>) {
    // Comprovo que req.url no sigui undefined
    if (!req.url) {
        console.error('URL is missing in the request')
        return
    }
    const myUrl: URL = new URL(req.url, `http://${req.headers.host}`)
    // console.log(myUrl)
    const isoParam: string | null = myUrl.searchParams.get('iso') // Comprovo existencia de data i hora en ISO 8061

    if (isoParam === null) {
        console.error('ISO params are missing in the request')
        return
    }
    const time: Date = new Date(isoParam)

    let result

    if (myUrl.pathname === '/api/parsetime') {
        result = parsetime(time)
    } else if (myUrl.pathname === '/api/unixtime') {
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
server.listen(port)