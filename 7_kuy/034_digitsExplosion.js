function explode(s) {
    let rsl =""
    for (let i = 0; i < s.length; i++) {
        for (let temp = s[i]; temp > 0; temp--) {
            rsl += s[i]
        }
    }
    return rsl;
}

console.log(explode('132'))