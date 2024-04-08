import * as http from "node:http"
import { BufferListStream } from "bl"


const url: string = 'http://jsonplaceholder.typicode.com/comments/' // Utilitzo una fake api 


// OPCIÓ 1
http.get(url, (res) => {

    type Ob = {
        postId: number,
        id: number,
        name: string,
        email: string,
        body: string
    }

    res.setEncoding('utf8');
    let rawData = ''
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {

        const parsedData: Ob[] = JSON.parse(rawData)  // transformo l'informació rebuda de la Api
        console.log(`Elements a dins de l'array: ${parsedData.length}`) // Nombre total de objectes de l'array
        const obj = parsedData.find((x) => x.id == 3) // Busco un objecte en concret
        console.log(obj)

    })
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`)
})






// OPCIÓ 2 --> SOLUCIÓ AMB BUFFERLIST
http.get(url, (response) => {
    type Ob = {
        postId: number,
        id: number,
        name: string,
        email: string,
        body: string
    }
    response.pipe(BufferListStream((err: Error, data: Buffer) => {
        if (err) { console.error(err) }
        const dataStr: string = data.toString()  // Transformo el Buffer en un string
        const dataFetch: Ob[] = JSON.parse(dataStr)
        const comentari: Ob | undefined = dataFetch.find(x => x.id === 2)
        if (comentari !== undefined) {
            console.log(comentari)  // Imprimeixo l'objecte buscat abans
            console.log(dataStr.length) // Nombre de caracteres a dins de l'archiu
            console.log(JSON.stringify(comentari).length) // imprimeixo el nombre de caracteres de l'objecte buscat

        }


    }))
})



/*
const newArray = JSON.parse(data)

        console.log(newArray)
        console.log(newArray.filter(x => x.postId === 1))

*/

