const gameContainer = document.getElementById("game");
let firstCard = null
let secondCard = null


 


 

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}



// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked

 const clickedCard = event.target

  if (!clickedCard.classList.contains("matched")) {
    if (firstCard === null) {
      firstCard = clickedCard;
      firstCard.style.backgroundColor = firstCard.classList[0];
    } 
    
    else if (secondCard === null && clickedCard !== firstCard) {
      secondCard = clickedCard;
      secondCard.style.backgroundColor = secondCard.classList[0];
      
      
      if (firstCard.classList[0] === secondCard.classList[0]) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        firstCard = null;
        secondCard = null;
      } 
      
      else {
        setTimeout(function () {
          if (firstCard !== null) {
            firstCard.style.backgroundColor = "";
          }
          if (secondCard !== null) {
            secondCard.style.backgroundColor = "";
          }
          firstCard = null;
          secondCard = null;
        }, 1000);
      }
    }
  }

  console.log("you just clicked", clickedCard);
}

// when the DOM loads
createDivsForColors(shuffledColors);



