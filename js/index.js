const score = document.querySelector(".scoreboard span")

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    gameApp.init('canvas')
  }
}