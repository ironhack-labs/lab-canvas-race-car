var app = new DrawApp()

var score = undefined
var scorekills = undefined
var finishscore = undefined
var finishkills = undefined

var finishdiv = undefined


window.onload = function() {
  var gameboard = document.querySelector("#game-board")

  document.getElementById("start-button").onclick = function() {
    startGame();
  };



  function startGame() {
    console.log("working")
    gameboard.innerHTML += '<canvas id="board"></canvas>'
    app.init("board")
    app.drawBackground()
    app.animateApp()
  }
};

document.addEventListener("DOMContentLoaded", function() { 
  score = document.getElementById("score")
  scorekills = document.getElementById("blockskilled")
  finishscore = document.getElementById("finishscore")
  finishdiv = document.querySelector(".finish")
  finishkills = document.getElementById("finishkills")

}
)


window.onkeydown = function(e){
  if (e.keyCode===37) app.moveCarLeft()
  if (e.keyCode===39) app.moveCarRight()
  if (e.keyCode===83) app.bullets.push(new Bullet(app.carposX,app.carposY))
}


