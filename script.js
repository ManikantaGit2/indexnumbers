let numbers = [17, 31, 77, 20, 63];

let numberInputEl = document.getElementById("numberInput");
let userInputEl = document.getElementById("userInput");
let findNumberEl = document.getElementById("findNumber");
let indexNumberInputEl = document.getElementById("indexNumberInput");

function findNumbersOn() {
    let number = parseInt(userInput.value) 
    let itemIndex = numbers.findIndex(function(eachItem) {
        if(eachItem === number) {
            return true;
        } else {
            return false;
        }
    });
    
    indexNumberInputEl.textContent = itemIndex;
}