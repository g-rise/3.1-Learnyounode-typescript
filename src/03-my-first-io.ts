import { readFileSync } from "node:fs";

// Creo un Buffer a partir de l'archiu que vull llegir
const fileBuffer: Buffer = readFileSync('C:/Users/giuli/Desktop/NODE-JS/SPRINT/SPRINT 3/ENTREGA_3.1/Learnyounode-typescript/support-files/divina_commedia.txt')
const fileTxt: string = fileBuffer.toString()  // Converteixo el buffer en un string

const arrayLines: string[] = fileTxt.split('\n') // Aprofito del metode split per convertir el string en un array compost per les diferentes linies del texte
const newLines: number = arrayLines.length  // Dedueixo el numero de linies del string a partir de la llargada de l'array

console.log(fileBuffer)
// console.log(arrayLines)
console.log(typeof newLines, newLines)
