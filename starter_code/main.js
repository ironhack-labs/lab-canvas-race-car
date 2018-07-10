var game, assets, canvas, car, obstacles;

window.onload = function() {
  init();

  canvas.drawRoad();  
  canvas.drawLines(); 
  car.drawCar();
  
  document.getElementById("start-button").onclick = function() {
    init();
    canvas.drawRoad();
    canvas.drawLines(); 
    car.drawCar();
    game.startGame(draw);
  };

  document.onkeydown = function(e){
    if(e.key == "ArrowRight")
    {
      car.moveRight();
    } 
    else if(e.key == "ArrowLeft"){
      car.moveLeft();
    }
  };
}

function init(){
  game = new Game(document.getElementById('canvas').getContext('2d'));
  assets = game.assets;
  canvas = game.canvas;
  car = game.car;
  obstacles = game.obstacles;
  assets.carX=assets.ctx.width/2 - assets.carWidth/2;
  assets.carY = assets.ctx.height - 150;
}

function draw(){
  canvas.clearCanvas();
  canvas.drawRoad();
  canvas.drawLines();
  car.drawCar();
  obstacles.forEach(function(obstacle){
    obstacle.updatePosition();
    obstacle.drawObstacle();
    if(car.hasCollided(obstacle))
    {
      game.stopGame();
    }
    // if(car.hasAvoided(obstacle))
    // {
    //   game.score(obstacle);
    // }
  });
  
}
