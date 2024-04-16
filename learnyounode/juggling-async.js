const http = require('node:http')
const bl = require('bl')
const { resolve } = require('node:path')

const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]

// Al ser les tres funcions asincrones poden tornar la response en ordre diferent del cridat
/*
http.get(url1, (response) => {
    response.pipe(bl((err, data) => {
        if (err) { console.log(err) }
        data = data.toString()
        console.log("first")
        console.log(data)
    }))
})

http.get(url2, (response) => {
    response.pipe(bl((err, data) => {
        if (err) { console.log(err) }
        data = data.toString()
        console.log("second")
        console.log(data)
    }))
})

http.get(url3, (response) => {
    response.pipe(bl((err, data) => {
        if (err) { console.log(err) }
        data = data.toString()
        console.log("third")
        console.log(data)
    }))
})
*/

const results = []

function fetchData(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (response) => {
            response.pipe(bl((err, data) => {
                if (err) {
                    reject(err)
                }

                resolve(data.toString())

            }))
        })

    })

}

async function allDatas() {
    const data1 = await fetchData(url1)
    const data2 = await fetchData(url2)
    const data3 = await fetchData(url3)

    results.push(data1)
    results.push(data2)
    results.push(data3)

    results.forEach(d => console.log(d))
}

allDatas()



// SOLUCIÓ OFICIAL

/*
 const results = []
    let count = 0

    function printResults () {
      for (let i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (let i = 0; i < 3; i++) {
      httpGet(i)
    }
*/
