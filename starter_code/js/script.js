var canvas, ctx, road, key, img, counter = 0, obstacles = [], obstaclesInterval;

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};
function startGame() {
  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');
  road = new Road();

  car = new Car();
  car.setCarImage();
  road.render();
  obstaclesInterval = window.setInterval(generateObstacles, 2000);
  // generateObstacles();


  animLoop();
 }

 function renderObstacles() {
  //  console.log(obstacles);
   for (var i = 0 ; i < obstacles.length ; i++){
   ctx.fillStyle = 'red';
   ctx.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].width, obstacles[i].height);
   obstacles[i].moveDown();
  //  console.log(obstacles[i]);
  }
}
function generateObstacles() {
  obstacles.push(new Obstacle);
  // obstacles.forEach(obstacle => renderObstacle(obstacle));
  // renderObstacle(obstacles[0]);
}


//Game loop
function animLoop() {
  counter++;
  // console.log(counter);

  ctx.clearRect(0,0, 300, 450);
  road.render();
  renderObstacles();
  ctx.drawImage(img, car.x, car.y, car.width, car.height);
  requestAnimationFrame(animLoop);
}

//Keyboard controls
key = {
  pressed: {},

  left: 37,
  right: 39,

  isDown: function(keyCode) {
    return this.pressed[keyCode];
  },

  onKeydown: function(event) {
    this.pressed[event.keyCode] = true;
    car.update();
  },

  onKeyup: function(event) {
    delete this.pressed[event.keyCode];
  }
};

window.addEventListener('keyup', function(event) { key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { key.onKeydown(event); }, false);
