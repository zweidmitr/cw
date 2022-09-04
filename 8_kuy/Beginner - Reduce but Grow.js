// function grow(x) {
//   let count = 1
//   x.forEach((element) => {
//     count = element * count
//   })
//   return count
// }

// best practice
const grow = (x) => x.reduce((a, b) => a * b)

let array = [2, 2, 2, 2, 2, 2]
console.log(grow(array))
