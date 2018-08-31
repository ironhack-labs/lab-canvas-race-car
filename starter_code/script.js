window.onload = function() {
  const start = document.getElementById("start-button");
  start.onclick = function() {
    startGame();
  };
};

function startGame() {
  gameArea.obstacles = []; // El obstáculo es una propiedad a la que le paso un array vacío como value dentro de la variable gameArea.
  gameArea.start(); //
  component = new Component(30, 70, "./images/car.png", (gameArea.canvas.width/2) - 15, gameArea.canvas.height - 100, "component");
}component

// var gameArea = { objetos } Aquí crearía los objetos que necesito.

/*document.onkeydown = function(e) {
  if (e.keyCode == 39 && component.x < (gameArea.canvas.width - component.width - 55)) {
    component.x += 10;
  }
  if (e.keyCode == 37 && component.x > 55) {
    component.x -= 10;
  }
};*/
