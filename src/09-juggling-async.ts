import * as http from "node:http"
import { BufferListStream } from "bl"



const url1: string = 'http://jsonplaceholder.typicode.com/users/1'
const url2: string = 'http://jsonplaceholder.typicode.com/users/2'
const url3: string = 'http://jsonplaceholder.typicode.com/users/3'



// Creo un TIPO Usuari per recollectar l'informació que m'interessa
type Usuari = {
    userId: number,
    userName: string
}

// Creo un Array de reults on pujar tots els usuari
const results: Usuari[] = []

// amb la funció fetchData recullo la promesa de un buffer de la Api consultada
function fetchData(url: string) {
    return new Promise<Buffer>((resolve, reject) => {
        http.get(url, (response) => {
            response.pipe(BufferListStream((err: Error, data: Buffer) => {
                if (err) { reject(err) }
                resolve(data)
            }))
        })
    })

}

// Amb la funcio resumeUser manipulo l'informació rebuda de la Api per crear un objecte de type Usuari
function resumeUser(data: Buffer): Usuari {
    const parsedData = JSON.parse(data.toString()) // Transformo el JSON en un Objecte
    const userId: number = parsedData.id // Agafo una proprietat de l'objecte 
    const userName: string = parsedData.name
    return {
        userId,
        userName
    }


}


// La funció asincrona recollectData em permit recullir els usuari i després pujar-los ordenadament a l'array -> Finalment imprimeix per consola els usuaris ordenats
async function recollectData() {
    const user1: Usuari = resumeUser(await fetchData(url1))
    const user2: Usuari = resumeUser(await fetchData(url2))
    const user3: Usuari = resumeUser(await fetchData(url3))



    results.push(user1)
    results.push(user2)
    results.push(user3)

    imprimirData(results)

}

// imprimirData itera sobre l'array de usuari per imprimir-los per consola 
function imprimirData(array: Usuari[]) {
    for (const iterator of array) {
        console.log(`Usuari ${iterator.userId}: ${iterator.userName}`)
    }
}


recollectData()

/*
http.get(url1, (res) => {

    res.setEncoding('utf8')
    let rawData = '' // Recullo l'archiu en cru
    res.on('data', (chunk) => { rawData += chunk })
    res.on('end', () => {
        const parsedData = JSON.parse(rawData) // Transformo el JSON en un Objecte
        const userId: number = parsedData.id // Agafo una proprietat de l'objecte 
        const userName: string = parsedData.name
        console.log(`Usuari ${userId}: ${userName}`)
    })
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`)
})

http.get(url2, (res) => {

    res.setEncoding('utf8')
    let rawData = '' // Recullo l'archiu en cru
    res.on('data', (chunk) => { rawData += chunk })
    res.on('end', () => {
        const parsedData = JSON.parse(rawData) // Transformo el JSON en un Objecte
        const userId: number = parsedData.id // Agafo una proprietat de l'objecte 
        const userName: string = parsedData.name
        console.log(`Usuari ${userId}: ${userName}`)
    })
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`)
})

http.get(url3, (res) => {

    res.setEncoding('utf8')
    let rawData = '' // Recullo l'archiu en cru
    res.on('data', (chunk) => { rawData += chunk })
    res.on('end', () => {
        const parsedData = JSON.parse(rawData) // Transformo el JSON en un Objecte
        const userId: number = parsedData.id // Agafo una proprietat de l'objecte 
        const userName: string = parsedData.name
        console.log(`Usuari ${userId}: ${userName}`)
    })
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`)
})
*/