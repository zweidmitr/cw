
function brightest(colors) {
    let index = 0
    let maxValue = 0
    for (let i = 0; i < colors.length; i++) {
        let color = colors[i]
        let red = parseInt(color.slice(1, 3), 16)
        let green = parseInt(color.slice(3, 5), 16)
        let blue = parseInt(color.slice(5, 7), 16)
        console.log(red, green, blue)
        // V = max(R,G,B)
        let value = Math.max(red, green, blue)
        console.log('max: ' + value)
        if (value > maxValue) {
            maxValue = value
            index = i
        }
    }
    return colors[index]
}

function brightestBest(colors){
    //Find brightness value of each color
    //Sort based on brightness
    //Return the first index, since it will be the brightest
    const sortedColors = colors;
    sortedColors.sort((a, b)=>{
        let rValue = parseInt(a.slice(1, 3), 16);
        let gValue = parseInt(a.slice(3, 5), 16);
        let bValue = parseInt(a.slice(5), 16);
        let brightness = Math.max(rValue, gValue, bValue);

        let rValue2 = parseInt(b.slice(1, 3), 16);
        let gValue2 = parseInt(b.slice(3, 5), 16);
        let bValue2 = parseInt(b.slice(5), 16);
        let brightness2 = Math.max(rValue2, gValue2, bValue2);
        return brightness2 - brightness;
    });
    return sortedColors[0];
}

console.log(brightest(['#00FF00', '#FFFF00']))
console.log(brightestBest(['#00FF00', '#FFFF00']))