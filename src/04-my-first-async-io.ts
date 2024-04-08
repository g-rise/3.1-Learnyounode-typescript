import { readFile } from "node:fs"

const link: string = 'C:/Users/giuli/Desktop/NODE-JS/SPRINT/SPRINT 3/ENTREGA_3.1/Learnyounode-typescript/support-files/divina_commedia.txt'


// El mètode readfile de node:fs rep un link com 1er parametre, 2on parametre callback (3er si al segon parametre es posa el codificador 'utf-8')
readFile(link, 'utf-8', (err: NodeJS.ErrnoException | null, data: string): void => {
    if (err) throw err
    console.log(`Noves línies: ${data.split('\n').length - 1}`)

})