window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
  }
};

var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");

var car = {
  x: 190,
  y: 540,
  moveLeft:  function() { 
    this.x -= 25 
  },
  moveRight: function() { 
    this.x += 25 
  }
}

//function draw(car) {
  var img = new Image();
  img.onload = function() { 
    ctx.drawImage(img, car.x, car.y, 40, 81); 
  }
  img.src = "images/car.png";
//}

var y = 0;
var dy = +2;


function drawObstacle() {
  ctx.beginPath();
  ctx.moveTo(57, y);
  ctx.lineTo(120, y);
  ctx.stroke();
  ctx.closePath();
  y += dy;
}

animate();
function animate(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawObstacle();
  ctx.drawImage(img, car.x, car.y, 40, 81);
  window.requestAnimationFrame(animate);
}

//TO STOP THE GAME
//window.cancelAnimationFrame(intervalwhatever);


document.onkeydown = function(e) {
  if(car.x < 80){
    switch (e.keyCode) {
      case 39: car.moveRight(); console.log('right', car); break;
    }
  }
  else if(car.x > 300){
    switch (e.keyCode) {
      case 37: car.moveLeft(); console.log('left', car); break;
    }
  }
  else{
    switch (e.keyCode) {
      case 37: car.moveLeft();  console.log('left',  car); break;
      case 39: car.moveRight(); console.log('right', car); break;
    }
  }
}

let update = () => {
  setInterval(updateCanvas, 1000);
  update();
}

function updateCanvas() {
  ctx.clearRect(0,0,1500,1700);
  draw(car);
}