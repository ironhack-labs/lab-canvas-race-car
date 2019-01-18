window.onload = function() {
  var road = new Road();
  road.init("#roadCanvas");
  var obstacle1 = new Obstacle(150, -50, 100, 20)
  road.obstacles = [obstacle1]
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  // document.onkeydown = function(e) {
  //   if(e.keyCode == 37) road.carPosX -= 5;
  //   if(e.keyCode == 39) road.carPosX += 5;
  // }

  window.addEventListener("keydown", moveCar, false);

  function moveCar(e) {
    if(e.keyCode == 37) road.carPosX -= 5;
    if(e.keyCode == 39) road.carPosX += 5;
  }

  function startGame() {
    var roadCanvas = document.querySelector("#roadCanvas");
    var divIntro = document.querySelector(".game-intro");
    road.moveDiscLines();
  }

  
};
