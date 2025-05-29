let scoreHome = 0
let scoreGuest = 0

document.getElementById("score-home").textContent = scoreHome
document.getElementById("score-guest").textContent = scoreGuest

///////////////

let newScoreHome = document.getElementById("score-home")
let newScoreGuest = document.getElementById("score-guest")

function incrHome1() {
    scoreHome += 1
    newScoreHome.textContent = scoreHome
}

function incrHome2() {
    scoreHome += 2
    newScoreHome.textContent = scoreHome  
}

function incrHome3() {
    scoreHome += 3
    newScoreHome.textContent = scoreHome
}

///

let playerGuest = document.getElementById("player-guest")
let playerHome = document.getElementById("player-home")

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
}

function incrGuest2() {
    scoreGuest += 2
    newScoreGuest.textContent = scoreGuest
}

function incrGuest3() {
    scoreGuest += 3
    newScoreGuest.textContent = scoreGuest
}

//////////////

let foulsHome = 0
let foulsGuest = 0

let foulLightHome1 = document.getElementById("home-foul-light1")
let foulLightHome2 = document.getElementById("home-foul-light2")
let foulLightHome3 = document.getElementById("home-foul-light3")
let foulLightHome4 = document.getElementById("home-foul-light4")
let foulLightHome5 = document.getElementById("home-foul-light5")

let foulLightGuest1 = document.getElementById("guest-foul-light1")
let foulLightGuest2 = document.getElementById("guest-foul-light2")
let foulLightGuest3 = document.getElementById("guest-foul-light3")
let foulLightGuest4 = document.getElementById("guest-foul-light4")
let foulLightGuest5 = document.getElementById("guest-foul-light5")

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
        foulLightHome3.style.setProperty("--after-bg", "var(--color-foul-yellow)")
        foulLightHome3.style.setProperty("--after-shadow", "var(--color-shadow-light)")
    } else if (foulsHome == 4) {
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
        foulLightGuest3.style.setProperty("--after-bg", "var(--color-foul-yellow)")
        foulLightGuest3.style.setProperty("--after-shadow", "var(--color-shadow-light)")
      } else if (foulsGuest == 4) {
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
    foulLightHome1.style.setProperty("--after-shadow", "var(--color-bg)")
    foulLightHome2.style.setProperty("--after-shadow", "var(--color-bg)")
    foulLightHome3.style.setProperty("--after-shadow", "var(--color-bg)")
    foulLightHome4.style.setProperty("--after-shadow", "var(--color-bg)")
    foulLightHome5.style.setProperty("--after-shadow", "var(--color-bg)")
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