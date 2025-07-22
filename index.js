let scoreHome = 0
let scoreGuest = 0

const playerGuest = document.getElementById("player-guest")
const playerHome = document.getElementById("player-home")

document.getElementById("score-home").textContent = scoreHome
document.getElementById("score-guest").textContent = scoreGuest

///////////////

const newScoreHome = document.getElementById("score-home")
const newScoreGuest = document.getElementById("score-guest")

///

function incrementScore(team, score) {
   if (team === "home") {
      scoreHome += score
      newScoreHome.textContent = scoreHome
   } 
   else if (team === "guest") {
      scoreGuest += score
      newScoreGuest.textContent = scoreGuest
   }
   winner()
}

///

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

let foulsHome = 0
let foulsGuest = 0

const foulLightsHome = [
   document.getElementById("home-foul-light1"),
   document.getElementById("home-foul-light2"),
   document.getElementById("home-foul-light3"),
   document.getElementById("home-foul-light4"),
   document.getElementById("home-foul-light5")
]

const foulLightsGuest = [
   document.getElementById("guest-foul-light1"),
   document.getElementById("guest-foul-light2"),
   document.getElementById("guest-foul-light3"),
   document.getElementById("guest-foul-light4"),
   document.getElementById("guest-foul-light5")
]

///

function incrFouls(team) {
   if (team === "home") {
      foulsHome++

      if (foulsHome > 5) {
         foulsHome = 5
         return
      }
      updateFoulLights(team, foulsHome)
   }
   else if (team === "guest") {
      foulsGuest++

      if (foulsGuest > 5) {
         foulsGuest = 5
         return
      }
      updateFoulLights(team, foulsGuest)
   }
}

function updateFoulLights(team, count) {
   const foulLights = team === "home" ? foulLightsHome : foulLightsGuest
   const foulColors = {
      1: "var(--color-foul-green)",
      2: "var(--color-foul-green)",
      3: "var(--color-foul-yellow)",
      4: "var(--color-foul-orange)",
      5: "var(--color-bonus)"
   }
   const foulShadows = "var(--color-shadow-light)"

   // reset styles
   foulLights.forEach( light => {
      light.style.setProperty("--after-bg", "var(--color-bg-score)")
      light.style.setProperty("--after-shadow", "var(--color-bg)")
   })

   if (count > 0 && count <= 5) {
      const color = foulColors[count] || "var(--color-bg-score)"
      for (let i = 0; i < count; i++) {
         foulLights[i].style.setProperty("--after-bg", color)
         foulLights[i].style.setProperty("--after-shadow", foulShadows)
      }
   }
}

///

function resetFouls(team) {
   // Selecciona foulsHome/foulsGuest y foulLightsHome/foulLightsGuest
   const foulLights = team === "home" ? foulLightsHome : foulLightsGuest
   // Pone el contador a 0
   const foulCount = team === "home" ? (foulsHome = 0) : (foulsGuest = 0)
   // Resetea los indicadores a --color-bg-score y --color-bg
   foulLights.forEach(light => {
      light.style.setProperty("--after-bg", "var(--color-bg-score)")
      light.style.setProperty("--after-shadow", "var(--color-bg)")
   })
}


//////////////

function newGame() {
   scoreHome = 0
   newScoreHome.textContent = 0
   playerHome.style.textShadow = "none"
   playerHome.style.setProperty("--before-visibility", "hidden")
   resetFouls("home")
   
   scoreGuest = 0
   newScoreGuest.textContent = 0
   playerGuest.style.textShadow = "none"
   playerGuest.style.setProperty("--before-visibility", "hidden")
   resetFouls("guest")
}

document.getElementById("incr-home1-btn").addEventListener("click", () => incrementScore("home", 1))
document.getElementById("incr-home2-btn").addEventListener("click", () => incrementScore("home", 2))
document.getElementById("incr-home3-btn").addEventListener("click", () => incrementScore("home", 3))
document.getElementById("incr-guest1-btn").addEventListener("click", () => incrementScore("guest", 1))
document.getElementById("incr-guest2-btn").addEventListener("click", () => incrementScore("guest", 2))
document.getElementById("incr-guest3-btn").addEventListener("click", () => incrementScore("guest", 3))

document.getElementById("home-foul-btn").addEventListener("click", () => incrFouls("home"))
document.getElementById("guest-foul-btn").addEventListener("click", () => incrFouls("guest"))

document.getElementById("new-game-btn").addEventListener("click", newGame)