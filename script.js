/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// global constants
var clueHoldTime = 500; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var mistake = 0;
var pattern = [2, 5, 4, 3, 6, 1, 2, 4];
pattern.length = 6;
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var start = 10;


function random(num){
  return 1 + Math.floor(Math.random()*num);
}

function myTimer() {
  start -= 1;
  document.getElementById("timer").innerHTML = "Timer: " + start;
  if(start == 0){
    clearInterval(myInterval);
    loseGame();
  }
}

function myStop() {
  clearInterval(myTimer, 1000);
}

var myInterval;

function startGame(){
  mistake = 0;
  for(let i = 0; i < pattern.length; i++){
    pattern[i] = random(pattern.length);
    console.log(pattern[i]);
  }
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  start = 10;
  myInterval = setInterval(myTimer, 1000)
}

function stopGame(){
  clearInterval(myInterval);
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500,
  6: 550
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    clueHoldTime = clueHoldTime - 15;
    delay += clueHoldTime; 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  if(pattern[guessCounter] == btn){

    if(guessCounter == progress){
      clearInterval(myInterval);
      start = 11;
      myInterval = setInterval(myTimer, 1000);
      /*
      clearInterval(myTimer);
      start = 10;
      setInterval(myTimer, 1000)
      */
      if(progress == (pattern.length -1)){
        winGame();
      }
      else{
        progress++;
        playClueSequence();
      }
    }
    else{
      guessCounter++;
    }
  }
  else{
    mistake += 1;
    if(mistake == 3){
      loseGame();
    }
  }

}