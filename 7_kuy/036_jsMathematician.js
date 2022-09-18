function calculate(...one) {
    return (...two) =>one.concat(two).reduce((a,b) => a+b,0)
}