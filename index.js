let scoreHome = 0
let scoreGuest = 0
let foulsHome = 0
let foulsGuest = 0

const playerGuest = document.getElementById("player-guest")
const playerHome = document.getElementById("player-home")
const newScoreHome = document.getElementById("score-home")
const newScoreGuest = document.getElementById("score-guest")

const leaderStyles = {
   leader: {
      textShadow: "0 0 5px var(--color-shadow-leader), 0 0 10px var(--color-shadow-leader)",
      beforeContent: "'LEADER'",
      beforeVisibility: "visible",
      beforeOpacity: "1",
   },
   noLeader: {
      textShadow: "none",
      beforeContent: "''",
      beforeVisibility: "hidden",
      beforeOpacity: "0"
   },
   tie: {
      textShadow: "0 0 2px var(--color-shadow-tie), 0 0 7px var(--color-shadow-tie)",
      beforeContent: "'- EVEN -'",
      beforeVisibility: "visible",
      beforeOpacity: "1"
   }
}

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


function incrScore(team, score) {
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

function applyStyles(element, styleObj) {
   element.style.textShadow = styleObj.textShadow
   element.style.setProperty("--before-content", styleObj.beforeContent)
   element.style.setProperty("--before-visibility", styleObj.beforeVisibility)
   element.style.setProperty("--before-opacity", styleObj.beforeOpacity)
}

function winner() {
   if (scoreHome > scoreGuest) {
      applyStyles(playerHome, leaderStyles.leader)
      applyStyles(playerGuest, leaderStyles.noLeader)
   } 
   else if (scoreHome < scoreGuest) {
      applyStyles(playerGuest, leaderStyles.leader)
      applyStyles(playerHome, leaderStyles.noLeader)
   } 
   else {
      applyStyles(playerGuest, leaderStyles.tie)
      applyStyles(playerHome, leaderStyles.tie)
   }
}

function incrFouls(team) {
   const foulCount = team === "home" ? ++foulsHome : ++foulsGuest
   if (foulCount > 5) {
      if (team === "home") foulsHome = 5
      else foulsGuest = 5
      return
   }
   updateFoulLights(team, foulCount)
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

function resetFouls(team) {
   const foulLights = team === "home" ? foulLightsHome : foulLightsGuest
   const foulCount = team === "home" ? (foulsHome = 0) : (foulsGuest = 0)
   
   // reset styles
   if (team === "home") foulsHome = 0
   else if (team === "guest") foulsGuest = 0
   updateFoulLights(team, 0)
}

function newGame() {
   scoreHome = 0
   newScoreHome.textContent = 0
   applyStyles(playerHome, leaderStyles.noLeader)
   resetFouls("home")
   
   scoreGuest = 0
   newScoreGuest.textContent = 0
   applyStyles(playerGuest, leaderStyles.noLeader)
   resetFouls("guest")
}

document.getElementById("incr-home1-btn").addEventListener("click", () => incrScore("home", 1))
document.getElementById("incr-home2-btn").addEventListener("click", () => incrScore("home", 2))
document.getElementById("incr-home3-btn").addEventListener("click", () => incrScore("home", 3))

document.getElementById("incr-guest1-btn").addEventListener("click", () => incrScore("guest", 1))
document.getElementById("incr-guest2-btn").addEventListener("click", () => incrScore("guest", 2))
document.getElementById("incr-guest3-btn").addEventListener("click", () => incrScore("guest", 3))

document.getElementById("home-foul-btn").addEventListener("click", () => incrFouls("home"))
document.getElementById("guest-foul-btn").addEventListener("click", () => incrFouls("guest"))

document.getElementById("new-game-btn").addEventListener("click", newGame)