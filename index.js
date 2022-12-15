// Generate random number, do not show number to user
let guess = "number"

if (guess > randomNumber){
    return "Go Lower"
} else if (guess < randomNumber){
    return "Go Highers"
}


const generateWinningNumber = () => Math.floor(100 * Math.random() + 1);

const shuffle = (arr) => {
    let lastIndex = arr.length, temp, i;
    while (lastIndex) {
        i = Math.floor(Math.random() * lastIndex--);
        temp = arr[lastIndex];
        arr[lastIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
