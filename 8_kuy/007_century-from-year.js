function century(year) {
  let temp = year / 100
  let tRound = Math.floor(temp)
  return temp > tRound ? tRound + 1 : tRound
}

// best practice
const centuryBest = (year) => {
  return Math.ceil(year / 100)
}

console.log(century(89))
console.log(centuryBest(2000))
