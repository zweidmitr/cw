function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1)
}

const capitalize = (word) =>
  word.replace(word.charAt(0), word.charAt(0).toUpperCase())

console.log(capitalizeWord('dima'))
console.log(capitalize('dima'))
