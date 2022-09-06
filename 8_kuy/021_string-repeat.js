function repeatStr(n, s) {
  let temp = ''
  for (let i = 0; i < n; i++) {
    temp += s
  }
  return temp
}

function repeatStrJBest(n, s) {
  return s.repeat(n)
}

console.log(repeatStr(3, 'ups'))
console.log(repeatStrJBest(3, 'ups'))
