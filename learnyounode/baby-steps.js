const process = require('node:process')
// console.log(process.argv)

const resultatSuma = process.argv.splice(2).map(item => +item).reduce((acc, item) => acc + item, 0)
console.log(resultatSuma)


// SOLUCIÓ OFICIAL
/*
'use strict'

    let result = 0

    for (let i = 2; i < process.argv.length; i++) {
      result += Number(process.argv[i])
    }

    console.log(result)
*/