const fs = require('node:fs')
const process = require('node:process')

const file = fs.readFileSync(process.argv[2])     // Obtenció del Buffer 
const fileToString = file.toString()              // Conversió del Buffer a String
const fileToArray = fileToString.split('\n')      //  De string a Array, divisió per salt de línia

const newLines = fileToArray.length - 1           //  Obtenció del nombre de noves línies 
console.log(newLines)


// SOLUCIÓ OFICIAL
/*
'use strict'
const fs = require('fs')

const contents = fs.readFileSync(process.argv[2])
const lines = contents.toString().split('\n').length - 1
console.log(lines)
*/