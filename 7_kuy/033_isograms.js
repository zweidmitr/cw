function isIsogram(str){
    let set =new Set(str.toUpperCase())
    return set.size == str.length;
}

console.log(isIsogram("moOse"))