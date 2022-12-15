// // Generate random number, do not show number to user
// let guess = "number"

// if (guess > randomNumber){
//     return "Go Lower"
// } else if (guess < randomNumber){
//     return "Go Highers"
// }


// const generateWinningNumber = () => Math.floor(100 * Math.random() + 1);

// const shuffle = (arr) => {
//     let lastIndex = arr.length, temp, i;
//     while (lastIndex) {
//         i = Math.floor(Math.random() * lastIndex--);
//         temp = arr[lastIndex];
//         arr[lastIndex] = arr[i];
//         arr[i] = temp;
//     }
//     return arr;
// }





// Need:
// random number generator, event "refresh, page load"

function randomNumber() {
    const number = Math.floor(Math.random() * 100) + 1;
    return number;
    
}

function render() {
    render.RandomNumber()
}

// function renderRandomNumber()

// capture their input
const textArea = document.querySelector("textarea")
// textArea.value

const button = document.querySelector("button")
    button.addEventListener('click', function() {
       //1. prompt for winning
        console.log(num);
        if (num == textArea.value) {
            document.body.append(winMessage);
            tooHigh.remove();
            tooLow.remove();
            tryAgain.remove();
            hawt.remove();
        }
        //2. prompt for too high
        else if (num < textArea.value && textArea.value < 100 && Math.abs(textArea.value - num) < 10) {
            document.body.append(tooHigh);
            document.body.append(hawt);
            winMessage.remove();
            tooLow.remove();
            tryAgain.remove();
        }
        // not working, now showing numbers 1-100 as tryAgain
        else if (num < textArea.value && textArea.value < 100 && Math.abs(textArea.value - num) < 15) {
            document.body.append(tooHigh);
            document.body.append(beerGoggles);
            winMessage.remove();
            tooLow.remove();
            tryAgain.remove();
            grenade.remove();
            beerGoggles.remove();
            amySchumer.remove();
        }
 // not working, now showing numbers 1-100 as tryAgain
        else if (num < textArea.value && textArea.value < 100 && Math.abs(textArea.value - num) < 25) {
            document.body.append(tooHigh);
            document.body.append(grenade);
            winMessage.remove();
            tooLow.remove();
            tryAgain.remove();
            amySchumer.remove();
            beerGoggles.remove();
            hawt.remove();
        }
 // not working, now showing numbers 1-100 as tryAgain
        else if (num < textArea.value && textArea.value < 100 && Math.abs(textArea.value - num) < 40) {
            document.body.append(tooHigh);
            document.body.append(amySchumer);
            winMessage.remove();
            tooLow.remove();
            tryAgain.remove();
            grenade.remove();
            beerGoggles.remove();
            hawt.remove();
        }
    
         //2. prompt for too low
        else if (num > textArea.value && textArea.value > 1) {
            document.body.append(tooLow);
            tooHigh.remove();
            winMessage.remove();
            tryAgain.remove();
            hawt.remove();
        }

         else {document.body.append(tryAgain);
            tooHigh.remove();
            winMessage.remove();
            tooLow.remove();
            hawt.remove();
        }
            
     } )



// compare input w/ random number
const winMessage = document.createElement("p");
winMessage.textContent = "You win!";

const tryAgain = document.createElement("p");
tryAgain.textContent = "Please enter a number 1-100, stupid."

const tooHigh = document.createElement("p");
tooHigh.textContent = "Too high, try again."

const tooLow = document.createElement("p");
tooLow.textContent = "Too low, try again."

const hawt = document.createElement("p");
hawt.textContent = "Baby gurl, you burnin' up!"

const beerGoggles = document.createElement("p");
beerGoggles.textContent = "Eh, maybe after three shots..."

const grenade = document.createElement("p");
grenade.textContent = "Only for the bros"

const amySchumer = document.createElement("p");
amySchumer.textContent = "Never, under any circumstances... ever. "
 

let num = randomNumber()

console.log(num)







//2. prompt for how close - diff prompt depending on how close 
// end game after 5 guesses


// random number generator





// const errorMessage = document.createElement("p");
// errorMessage.textContent = "Please enter a number between 1 and 100."


// function invalid(input) {
// if (textArea.value !== 25) {
//     document.body.append(errorMessage);
// }

// }