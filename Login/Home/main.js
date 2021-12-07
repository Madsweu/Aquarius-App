//www.youtube.com/watch?v=9FC87h9ktxY&ab_channel=FrontendGrowth

// Select the two buttons
const addButton = document.querySelector(".add"),
      removeButton = document.querySelector(".remove");

// Elements for updating
const currentCupEl = document.querySelector('.current-cups'),
      currentLitersEl = document.querySelector('.current-liters'), 
      currentPercentageEl = document.querySelector('.current-percentage'),
      progessArea = document.querySelector('.progess'); 

// Setting a max and minimum of cups

const MAX_CUPS = 10,
   MIN_CUPS = 0;

let cups = 0, 
    liters = 0,
    percentage = 0;


addButton.addEventListener("click", addCup);
removeButton.addEventListener("click", removeCup);

// Making a function for addCup and removeCup

function addCup(){
    cups++;
    liters += 250;
    percentage = (cups / MAX_CUPS) * 100;

    updateLayout();

    if (cups === MAX_CUPS){
        addButton.disabled = true;
    } else {
        removeButton.disabled = false;
    }
}
    
function removeCup() {
    cups--;
    liters -= 250;
    percentage = (cups / MAX_CUPS) * 100;

    updateLayout();

    if (cups === MIN_CUPS){
        removeButton.disabled = true;
    } else {
        addButton.disabled = false;
    }
}

function updateLayout(){
     // updating layout
     currentCupEl.textContent = `${cups}/10`;
     currentLitersEl.textContent = `${liters / 1000}l/2.5l`;
     currentPercentageEl.textContent = `${percentage}%`;
     progessArea.style.height = `${percentage}%`;
}