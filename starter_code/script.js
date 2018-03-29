window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    dibujarCarretera();
    
  };

 

  function startGame() {
    var canvas = document.createElement("canvas");
    document.getElementById("game-board").appendChild(canvas);
    canvas.id = "road";
    canvas.setAttribute("width", 400);
    canvas.setAttribute("height", 600);
  }

  function dibujarCarretera() {
    var road = new Road("road");
    road.draw();
  }
};
