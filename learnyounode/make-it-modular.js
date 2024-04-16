const mymodule = require('./mymodule')

const dir = process.argv[2]
const ext = process.argv[3]

// const dir = 'C:/Users/giuli/Desktop/NODE-JS/SPRINT/SPRINT 3/ENTREGA_3.1/Learnyounode'
// const ext = 'js'

mymodule(dir, ext, (err, data) => {
    if (err) throw `Ha ocorregut el següent error: ${err}`
    data.forEach(item => console.log(item))
})


// SOLUCIÓ OFICIAL
/*
'use strict'
const filterFn = require('./solution_filter.js')
const dir = process.argv[2]
const filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
    if (err) {
    return console.error('There was an error:', err)
    }

    list.forEach(function (file) {
    console.log(file)
    })
})
*/

