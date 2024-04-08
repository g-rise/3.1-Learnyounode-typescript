import { readdir } from "node:fs"
import { extname } from "node:path";

// dir Ruta de la carpeta
// ext Extensió dels archius

export function listFilesFiltered(dir: string, ext: string, callback: Function) {
    readdir(dir, (err: NodeJS.ErrnoException | null, files: string[]): void => {
        if (err) return callback(err)

        const filesFiltered: string[] = files.filter(x => extname(x) === ext)
        if (filesFiltered.length > 0) return callback(null, filesFiltered)
        throw new Error("No hi ha cap archiu amb l'extensió buscada")  // gestionem si es torna un array buit o per error en l'extensió o per falta d'archius d'una determinada extensió


    })
}

