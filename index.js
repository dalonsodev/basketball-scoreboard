let scoreHome = 0
let scoreGuest = 0

document.getElementById("score-home").textContent = scoreHome
document.getElementById("score-guest").textContent = scoreGuest

///////////////

const newScoreHome = document.getElementById("score-home")
const newScoreGuest = document.getElementById("score-guest")

function incrHome1() {
   scoreHome += 1
   newScoreHome.textContent = scoreHome
   winner()
}

function incrHome2() {
   scoreHome += 2
   newScoreHome.textContent = scoreHome  
   winner()
}

function incrHome3() {
   scoreHome += 3
   newScoreHome.textContent = scoreHome
   winner()
}

///

const playerGuest = document.getElementById("player-guest")
const playerHome = document.getElementById("player-home")

function winner() {
   if (scoreHome > scoreGuest) {
      playerHome.style.textShadow = "0 0 5px var(--color-shadow-leader), 0 0 10px var(--color-shadow-leader)"
      playerHome.style.setProperty("--before-content", '"LEADER"')
      playerHome.style.setProperty("--before-visibility", "visible")
      playerHome.style.setProperty("--before-opacity", "1")
      playerGuest.style.setProperty("--before-visibility", "hidden")
      playerGuest.style.setProperty("--before-opacity", "0")
      playerGuest.style.textShadow = "none"
   } else if (scoreHome < scoreGuest) {
      playerGuest.style.textShadow = "0 0 5px var(--color-shadow-leader), 0 0 10px var(--color-shadow-leader)"
      playerGuest.style.setProperty("--before-content", '"LEADER"')
      playerGuest.style.setProperty("--before-visibility", "visible")
      playerGuest.style.setProperty("--before-opacity", "1")
      playerHome.style.setProperty("--before-visibility", "hidden")
      playerHome.style.setProperty("--before-opacity", "0")
      playerHome.style.textShadow = "none"
   } else {
      playerHome.style.textShadow = "0 0 2px var(--color-shadow-tie), 0 0 7px var(--color-shadow-tie)"
      playerHome.style.setProperty("--before-content", '"- EVEN -"')
      playerHome.style.setProperty("--before-visibility", "visible")
      playerHome.style.setProperty("--before-opacity", "1")
      playerGuest.style.textShadow = "0 0 2px var(--color-shadow-tie), 0 0 7px var(--color-shadow-tie)"
      playerGuest.style.setProperty("--before-content", '"- EVEN -"')
      playerGuest.style.setProperty("--before-visibility", "visible")
      playerGuest.style.setProperty("--before-opacity", "1")
   }
}

///////////////

function incrGuest1() {
   scoreGuest += 1
   newScoreGuest.textContent = scoreGuest
   winner()
}

function incrGuest2() {
   scoreGuest += 2
   newScoreGuest.textContent = scoreGuest
   winner()
}

function incrGuest3() {
   scoreGuest += 3
   newScoreGuest.textContent = scoreGuest
   winner()
}

//////////////

let foulsHome = 0
let foulsGuest = 0

const foulLightHome1 = document.getElementById("home-foul-light1")
const foulLightHome2 = document.getElementById("home-foul-light2")
const foulLightHome3 = document.getElementById("home-foul-light3")
const foulLightHome4 = document.getElementById("home-foul-light4")
const foulLightHome5 = document.getElementById("home-foul-light5")

const foulLightGuest1 = document.getElementById("guest-foul-light1")
const foulLightGuest2 = document.getElementById("guest-foul-light2")
const foulLightGuest3 = document.getElementById("guest-foul-light3")
const foulLightGuest4 = document.getElementById("guest-foul-light4")
const foulLightGuest5 = document.getElementById("guest-foul-light5")

///

function incrFoulsHome() {
   foulsHome += 1
   
   if (foulsHome == 1) {
      foulLightHome1.style.setProperty("--after-bg", "var(--color-foul-green)")
      foulLightHome1.style.setProperty("--after-shadow", "var(--color-shadow-light)")
   } else if (foulsHome == 2) {
      foulLightHome2.style.setProperty("--after-bg", "var(--color-foul-green)")
      foulLightHome2.style.setProperty("--after-shadow", "var(--color-shadow-light)")
   } else if (foulsHome == 3) {
      foulLightHome1.style.setProperty("--after-bg", "var(--color-foul-yellow)")
      foulLightHome1.style.setProperty("--after-shadow", "var(--color-shadow-light)")
      foulLightHome2.style.setProperty("--after-bg", "var(--color-foul-yellow)")
      foulLightHome2.style.setProperty("--after-shadow", "var(--color-shadow-light)")
      foulLightHome3.style.setProperty("--after-bg", "var(--color-foul-yellow)")
      foulLightHome3.style.setProperty("--after-shadow", "var(--color-shadow-light)")
   } else if (foulsHome == 4) {
      foulLightHome1.style.setProperty("--after-bg", "var(--color-foul-orange)")
      foulLightHome1.style.setProperty("--after-shadow", "var(--color-shadow-light)")
      foulLightHome2.style.setProperty("--after-bg", "var(--color-foul-orange)")
      foulLightHome2.style.setProperty("--after-shadow", "var(--color-shadow-light)")
      foulLightHome3.style.setProperty("--after-bg", "var(--color-foul-orange)")
      foulLightHome3.style.setProperty("--after-shadow", "var(--color-shadow-light)")
      foulLightHome4.style.setProperty("--after-bg", "var(--color-foul-orange)")
      foulLightHome4.style.setProperty("--after-shadow", "var(--color-shadow-light)")
   } else if (foulsHome == 5) {
      foulLightHome1.style.setProperty("--after-bg", "var(--color-bonus)")
      foulLightHome2.style.setProperty("--after-bg", "var(--color-bonus)")
      foulLightHome3.style.setProperty("--after-bg", "var(--color-bonus)")
      foulLightHome4.style.setProperty("--after-bg", "var(--color-bonus)")
      foulLightHome5.style.setProperty("--after-bg", "var(--color-bonus)")
      foulLightHome5.style.setProperty("--after-shadow", "var(--color-shadow-light)")
   }
}

function incrFoulsGuest() {
   foulsGuest += 1
   
   if (foulsGuest == 1) {
      foulLightGuest5.style.setProperty("--after-bg", "var(--color-foul-green)")
      foulLightGuest5.style.setProperty("--after-shadow", "var(--color-shadow-light)")
   } else if (foulsGuest == 2) {
      foulLightGuest4.style.setProperty("--after-bg", "var(--color-foul-green)")
      foulLightGuest4.style.setProperty("--after-shadow", "var(--color-shadow-light)")
   } else if (foulsGuest == 3) {
      foulLightGuest4.style.setProperty("--after-bg", "var(--color-foul-yellow)")
      foulLightGuest4.style.setProperty("--after-shadow", "var(--color-shadow-light)")
      foulLightGuest5.style.setProperty("--after-bg", "var(--color-foul-yellow)")
      foulLightGuest5.style.setProperty("--after-shadow", "var(--color-shadow-light)")
      foulLightGuest3.style.setProperty("--after-bg", "var(--color-foul-yellow)")
      foulLightGuest3.style.setProperty("--after-shadow", "var(--color-shadow-light)")
   } else if (foulsGuest == 4) {
      foulLightGuest4.style.setProperty("--after-bg", "var(--color-foul-orange)")
      foulLightGuest4.style.setProperty("--after-shadow", "var(--color-shadow-light)")
      foulLightGuest5.style.setProperty("--after-bg", "var(--color-foul-orange)")
      foulLightGuest5.style.setProperty("--after-shadow", "var(--color-shadow-light)")
      foulLightGuest3.style.setProperty("--after-bg", "var(--color-foul-orange)")
      foulLightGuest3.style.setProperty("--after-shadow", "var(--color-shadow-light)")
      foulLightGuest2.style.setProperty("--after-bg", "var(--color-foul-orange)")
      foulLightGuest2.style.setProperty("--after-shadow", "var(--color-shadow-light)")
   } else if (foulsGuest == 5) {
      foulLightGuest1.style.setProperty("--after-bg", "var(--color-bonus)")
      foulLightGuest2.style.setProperty("--after-bg", "var(--color-bonus)")
      foulLightGuest3.style.setProperty("--after-bg", "var(--color-bonus)")
      foulLightGuest4.style.setProperty("--after-bg", "var(--color-bonus)")
      foulLightGuest5.style.setProperty("--after-bg", "var(--color-bonus)")
      foulLightGuest5.style.setProperty("--after-shadow", "var(--color-shadow-light)")
   }
}

///

function resetFoulsHome() {
   foulsHome = 0
   
   foulLightHome1.style.setProperty("--after-bg", "var(--color-bg-score)")
   foulLightHome2.style.setProperty("--after-bg", "var(--color-bg-score)")
   foulLightHome3.style.setProperty("--after-bg", "var(--color-bg-score)")
   foulLightHome4.style.setProperty("--after-bg", "var(--color-bg-score)")
   foulLightHome5.style.setProperty("--after-bg", "var(--color-bg-score)")
}

///

function resetFoulsGuest() {
   foulsGuest = 0
   
   foulLightGuest1.style.setProperty("--after-bg", "var(--color-bg-score)")
   foulLightGuest2.style.setProperty("--after-bg", "var(--color-bg-score)")
   foulLightGuest3.style.setProperty("--after-bg", "var(--color-bg-score)")
   foulLightGuest4.style.setProperty("--after-bg", "var(--color-bg-score)")
   foulLightGuest5.style.setProperty("--after-bg", "var(--color-bg-score)")
}

//////////////

function newGame() {
   scoreHome = 0
   newScoreHome.textContent = 0
   playerHome.style.textShadow = "none"
   playerHome.style.setProperty("--before-visibility", "hidden")
   resetFoulsHome()
   
   scoreGuest = 0
   newScoreGuest.textContent = 0
   playerGuest.style.textShadow = "none"
   playerGuest.style.setProperty("--before-visibility", "hidden")
   resetFoulsGuest()
}

document.getElementById("incr-home1").addEventListener("click", incrHome1)
document.getElementById("incr-home2").addEventListener("click", incrHome2)
document.getElementById("incr-home3").addEventListener("click", incrHome3)
document.getElementById("incr-guest1").addEventListener("click", incrGuest1)
document.getElementById("incr-guest2").addEventListener("click", incrGuest2)
document.getElementById("incr-guest3").addEventListener("click", incrGuest3)

document.getElementById("home-foul-btn").addEventListener("click", incrFoulsHome)
document.getElementById("guest-foul-btn").addEventListener("click", incrFoulsGuest)

// document.getElementById("score-home").addEventListener("click", scoreHome)
// document.getElementById("score-guest").addEventListener("click", scoreGuest)

document.getElementById("new-game-btn").addEventListener("click", newGame)