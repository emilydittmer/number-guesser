/////global variables

var minRange = document.querySelector('#minrange');
var maxRange = document.querySelector('#maxrange');
var chal1 = document.querySelector('#chal1');
var chal2 = document.querySelector('#chal2');
var guess1;
var guess2;
var updateBtn = document.querySelector('#update-btn');
var guessBtn = document.querySelector('#guess-btn');
var clearBtn = document.querySelector('#clear-btn');
var resetBtn = document.querySelector('#reset-btn');
var randomNum;
var updateChal1;
var updateChal2;
// var chal1Name


/////default button states

// window.onload = 

// updateBtn.disabled = true;
// guessBtn.disabled = true;
// clearBtn.disabled = true;
// resetBtn.disabled = true;


/////event listeners

updateBtn.addEventListener('click', function(e) {
  e.preventDefault();
  getRange();
  clearRangeInputs();
});

guessBtn.addEventListener('click', function(e) {
  e.preventDefault();
  updateGuesses();
  displayNames();
  displayGuesses();
  displayStatus();
  clearGuessInputs();
});

clearBtn.addEventListener('click', function() {
  clearGuessInputs()
});

resetBtn.addEventListener('click', function() {
  clearRangeInputs();
  clearGuessInputs();
  getRange();
})

/////functions

function getRange() {
  var min = parseInt(minRange.value) || 1;
  var max = parseInt(maxRange.value) || 100;
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum);
  var updateMin = document.querySelector('.update-min');
  var updateMax = document.querySelector('.update-max');
  updateMin.innerText = min;
  updateMax.innerText = max;
  clearRangeInputs();
};

function clearRangeInputs() {
  minRange.value = "";
  maxRange.value = "";
  updateBtn.disabled = true;
} 

// function updateBtnState() {
//   if (minRange.value = "" && maxRange.value = "") {
//     updateBtn.disabled = true;
//   } else {
//     updateBtn.disabled = false;
//   }
// }

function updateGuesses() {
  guess1 = document.querySelector('#guess1').value;
  guess2 = document.querySelector('#guess2').value; 
}

function clearGuessInputs() {
  chal1.value = "";
  chal2.value = "";
  guess1 = document.querySelector('#guess1').value = "";
  guess2 = document.querySelector('#guess2').value = "";
  clearBtn.disabled = true;
  resetBtn.disabled = true;
}

function displayNames() {
  var scoreName1 = document.querySelector('#score-name-1');
  var scoreName2 = document.querySelector('#score-name-2');
  var updateChal1 = chal1.value;
  var updateChal2 = chal2.value;
  scoreName1.innerText = updateChal1;
  scoreName2.innerText = updateChal2;
}

function displayGuesses() {
  var scoreGuess1 = document.querySelector('#score-guess-1');
  var scoreGuess2 = document.querySelector('#score-guess-2'); 
  scoreGuess1.innerText = guess1;
  scoreGuess2.innerText = guess2;
}

function displayStatus() {
  var status1 = document.querySelector('#score-guess-1-status');
  var status2 = document.querySelector('#score-guess-2-status');
  
  if (guess1 > randomNum) {
    status1.innerText = 'Too High';
  } else if (guess1 < randomNum) {
    status1.innerText = 'Too Low';
  }  else {
    status1.innerText = 'BOOM!';
  }

  if (guess2 > randomNum) {
    status2.innerText = 'Too High';
  } else if (guess2 < randomNum) {
    status2.innerText = 'Too Low';
  }  else {
    status2.innerText = 'BOOM!';
  }
  // theWinner();
  // createCard();
}


/////this shit is to get winner and make card and doesn't work

// function theWinner(){
//   var winnerName = document.getElementById('#winner-name');
//   if (guess1.value == randomNum && guess2.value == randomNum){
//     winnerName.innerText = 'TIE GAME';
//   } else if (guess1.value == randomNum){
//     winnerName.innerText = chal1.value;
//   } else if (guess2.value == randomNum){
//     winnerName.innerText = chal2.value;
//   }
// }

// function createCard(name1, name2, winnerName) {
//   var name1 = chal1.value;
//   var name2 = chal2.value;
//   var scoreboard = document.querySelector('.scoreboard');
//   var newCard = 
//   `<article class="scorecard">
//       <section class="card">
//         <h4 class="updateChal1 card-names">${name1}</h4>
//         <p>vs</p>
//         <h4 class="updateChal2 card-names">${name2}</h4>
//       </section>
//       <section class=“scoreboard”>
//         <h2 id="winner-name">${winnerName}</h2>
//         <h2 class="display-winner">WINNER</h2>
//       </section>
//       <section class="guesses-time">
//         <p>num-guesses</p>
//         <p>time</p>
//         <button class="close-btn" name="close">X</button>
//       </section>
//     </article>`
//   scoreboard.innerHTML = newCard.innerHTML;
// }

/////pseudo button states by action, maybe call onload?


// function guessBtnState() {
//   if (no value in chal name or guess inputs) {
//     submitBtn.disabled = true;
//   } else {
//     submitBtn.disabled = false;
//   }
// }

// function clearResetBtnState() {
//   if (no value in chal name or guess inputs)
//     submitBtn.disabled = true;
//   } else {
//     submitBtn.disabled = false;
//   }

