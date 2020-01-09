// const numbers = [2,4,1,5,4]

// function isBiggerThanTwo (num) {
//   return num > 2
// }

// const f = numbers.filter(isBiggerThanTwo)

// console.log(f);


//*******************************************************/

// const fs = require('fs')
// fs.readFile('file.md', 'utf-8', function (err, content) {
//   if (err) {
//     return console.log(err)
//   }

//   console.log(content)
// })

//*******************************************************/

const fs = require('fs')

console.log('start reading a file...')

fs.readFile('file.d', 'utf-8', function (err, content) {
  if (err) {
    console.log('error happened during reading the file')
    return console.log(err)
  }

  console.log(content)
})

console.log('end of the file')