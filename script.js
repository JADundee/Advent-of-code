
//Question 1 PART 1
/* const fs = require('fs')

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

q1() */

//Question 1 PART 2
const fs = require('fs')

function q2() {
    fs.readFile('./santa.txt', (err, data) => {
        const directions = data.toString()
        const dArray = directions.split('')
        let number = 0
        let counter = 0
        const answer = dArray.some((currentValue) => {
            if (currentValue === '(') {
                 number += 1
            } else if (currentValue === ')') {
                 number -=1
            }
            counter ++
            return number < 0
        })
        console.log(counter)
    })
    
}

q2()