import { listFilesFiltered } from "./06-my-module"

const directory: string = './support-files/fake_directory'
const extension: string = '.txt'

listFilesFiltered(directory, extension, (err: Error, files: string[]) => {
    if (err) {
        return console.error('Hi ha hagut el següent error' + err)
    }

    files.forEach(item => console.log(item)) // Impressió per consola de tots els files filtrats
})
