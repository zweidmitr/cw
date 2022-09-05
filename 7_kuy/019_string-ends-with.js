function solution(str, ending) {
  let temp = str.indexOf(ending, str.length - ending.length)
  return temp !== -1 ? true : false
}

function solutionBest(str, ending) {
  return str.endsWith(ending)
}

console.log(solution('abcde', 'des'))
console.log(solutionBest('abcde', 'des'))
