function mergeArrays(arr1, arr2) {
  const arr = arr1.concat(arr2)
  arr.sort(compare)
  return Array.from(new Set(arr))
}
function compare(n1, n2) {
  if (n1 === n2) return 0
  if (n1 > n2) {
    return 1
  } else {
    return -1
  }
}

console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))
