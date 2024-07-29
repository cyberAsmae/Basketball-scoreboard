//By Cyber Asmae

//Quarters and timer

let timer;
let seconds = 0;
let mins = 0;
let running = false;

function countdown(minutes) {
  mins = minutes;
  seconds = 60;
  tick();
}

function tick() {
  if (!running) return;

  let counter = document.getElementById("timer");
  let current_minutes = mins - 1;
  seconds--;
  counter.textContent =
    current_minutes.toString() +
    ":" +
    (seconds < 10 ? "0" : "") +
    String(seconds);

  if (seconds > 0) {
    timer = setTimeout(tick, 1000);
  } else {
    if (mins > 1) {
      mins--;
      seconds = 60;
      timer = setTimeout(tick, 1000);
    }
  }
}

function startTimer() {
  if (!running) {
    running = true;
    if (!timer) {
      countdown(mins || 15); // Default to 1 minute if not specified
    } else {
      tick();
    }
  }
}

function stopTimer() {
  running = false;
  clearTimeout(timer);
}

function resetTimer() {
  stopTimer();
  mins = 0;
  seconds = 0;
  timer = null;
  document.getElementById("timer").textContent = "00:00";

}

let elQuarter = document.getElementById("quarterNumplc");
let quarterNum = 1;
function addQuarter(){
    if(quarterNum>= 0 && quarterNum<4){
        quarterNum += 1
        elQuarter.textContent = quarterNum
    }

}

function substractQuarter(){
    if(quarterNum>0){
        quarterNum -= 1
        elQuarter.textContent = quarterNum
    }

}


let homeScore = 0;
let display1 = document.getElementById("number1");
display1.textContent = homeScore;

let guestScore = 0;
let display2 = document.getElementById("number2");
display2.textContent = guestScore;

//home score
function incrementHomeScoreBy1() {
  homeScore += 1;
  display1.textContent = homeScore;
}
function incrementHomeScoreBy2() {
  homeScore += 2;
  display1.textContent = homeScore;
}
function incrementHomeScoreBy3() {
  homeScore += 3;
  display1.textContent = homeScore;
}

//guest score
function incrementGuestScoreBy1() {
  guestScore += 1;
  display2.textContent = guestScore;
}
function incrementGuestScoreBy2() {
  guestScore += 2;
  display2.textContent = guestScore;
}
function incrementGuestScoreBy3() {
  guestScore += 3;
  display2.textContent = guestScore;
}

//reset scores

function resetScores() {
  homeScore = 0;
  guestScore = 0;
  document.getElementById("number1").textContent = homeScore;
  document.getElementById("number2").textContent = guestScore;
}
