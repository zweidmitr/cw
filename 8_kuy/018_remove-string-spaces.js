function noSpace(x) {
  return x.split(' ').join('')
}
function noSpaceBest(x) {
  Regex
  return x.replace(/\s/g, '')
  //      \s - это регулярное выражение для "пробелов", а g - это "глобальный" флаг, что означает соответствие всем \s (пробелам).
}
console.log(noSpace('asfasf sdfasf s adf'))
console.log(noSpaceBest('asfasf sdfasf s adf'))
