console.log(process.argv)

const arrayFiltered: string[] = process.argv.slice(2) //filtro process.argv per obtenir un array amb només els nombres
const arrayFilteredNumbers: number[] = arrayFiltered.map(item => +item) //converteixo els nombres de string a number
const sum: number = arrayFilteredNumbers.reduce((acc, item) => acc + item, 0) //Suma dels nombres que té l'array

// Opció en una mateixa expressió
const sum1: number = process.argv.slice(2)
    .map(item => Number(item))
    .reduce((acc, num) => acc + num, 0)


console.log(arrayFiltered)
console.log(arrayFilteredNumbers)

console.log(sum)

console.log(sum1)