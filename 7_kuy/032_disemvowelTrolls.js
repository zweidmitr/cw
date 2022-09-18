
function disemvowel(str) {
    let del = 'aeiou'
    return str.split('')
        .filter(letter => !del.includes(letter.toLowerCase()))
        .join('');
}

function disemvowelBest(str) {
    return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel("This website is for losers LOL!"))
console.log(disemvowelBest("This website is for losers LOL!"))