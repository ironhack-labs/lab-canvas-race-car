window.onload = function() {
 
  document.getElementById("start-button").onclick = function() {
    var juego = new Game("road");
    juego.startGame();
  };

};
