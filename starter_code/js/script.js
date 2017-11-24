function startGame() {
  var game = new Game("canvas");
  game.setGame();
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    alert("window.onload");
    //console.log(window);
    startGame();
  }
}

