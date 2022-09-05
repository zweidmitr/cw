function fakeBin(x) {
  let array = x.split('')
  for (let i = 0; i < array.length; i++) {
    Number(array[i]) < 5 ? (array[i] = 0).toString : (array[i] = 1).toString
  }
  return array.join('')
}

function fakeBinBest(x) {
  return x.replace(/\d/g, (value) => (value < 5 ? 0 : 1))
}
function fakeBinTheBest(x) {
  return x
    .split('')
    .map((value) => (value < 5 ? 0 : 1))
    .join('')
}

console.log(fakeBin('45385593107843568'))
console.log(typeof fakeBin('45385593107843568'))

console.log(fakeBinBest('45385593107843568'))
console.log(fakeBinTheBest('45385593107843568'))
