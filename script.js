const fs = require('fs')



function q1() {
    fs.readFile('./santa.txt', (err, data) => {
        const directions = data.toString()
        console.log(directions)
        const dArray = directions.split('')
        const answer = dArray.reduce((number, currentValue) => {
            if (currentValue === '(') {
                return number += 1
            } else if (currentValue === ')') {
                return number -=1
            }
        }, 0)
        console.log(answer.toString())
    })
}

q1()