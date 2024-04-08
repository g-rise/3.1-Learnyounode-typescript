import * as net from "node:net"

const port: number = +process.argv[2]

const server = net.createServer((socket) => {
    // socket.connect(5000)
    // console.log('client connected')







    // client.end()

    const now = new Date()
    const year = now.getFullYear()
    const month = (now.getMonth() + 1).toString().padStart(2, '0')
    const day = now.getDate().toString().padStart(2, '0')
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')

    const dateToString = `${year}-${month}-${day} ${hours}:${minutes}\n`
    // console.log(dateToString)
    // socket.write(now.toString())
    socket.write(dateToString)
    socket.end()
    // // socket.write("HOLA")
    // socket.end(now)
})


server.listen(port, () => {
    // net.connect(5000)
    console.log("Server listening...")


})

const client = net.createConnection({ port }, () => {
    console.log('Connected to server!')

});

client.on('data', (data) => {
    console.log(data.toString());
});

client.on('close', () => {
    console.log('Connection closed');
    server.close()
});


// const server = net.createServer((c) => {
//     // 'connection' listener.
//     console.log('client connected');
//     c.on('end', () => {
//         console.log('client disconnected');
//     });
//     c.write('hello\r\n');
//     c.pipe(c);
// });
// server.on('error', (err) => {
//     throw err;
// });
// server.listen(8124, () => {
//     console.log('server bound');
// });
