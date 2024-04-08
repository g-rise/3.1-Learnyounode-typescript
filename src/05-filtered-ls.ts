import { readdir } from "node:fs";
import { extname } from "node:path";

// RUTA DEL PROGRAMA
// C:\Users\giuli\Desktop\NODE-JS\SPRINT\SPRINT 3\ENTREGA_3.1\Learnyounode-typescript\support-files\fake_directory
// support-files\fake_directory
// const path: string = process.argv[2]

const directory: string = './support-files/fake_directory'
const extension: string = '.txt'

// El mètode readdir del modulo node:fs rep un path i un callback
readdir(directory, (err: NodeJS.ErrnoException | null, files: string[]): void => {
    if (err) throw err
    const filesFiltered: string[] = files.filter(item => extname(item) === extension) // El mètode extname del modulo node:path torna l¡'extensió de un archiu
    filesFiltered.forEach(item => console.log(item))

})