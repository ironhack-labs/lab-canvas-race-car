var cvs = document.getElementById("board")
var ctx = cvs.getContext("2d")
var xSpeed = 5
let newY = 0
var carMove = {
  x: 135,
  y: 125,
  moveLeft: function () {
    this.x -= xSpeed
  },
  moveRight: function () {
    this.x += xSpeed
  }
}
document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37: carMove.moveLeft(); break;
    case 39: carMove.moveRight(); break;
  }
  updateCanvas()
  playerBounds()
  window.requestAnimationFrame(obstaclesUpdate)
}
//////////////////////////////////////////////////
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    drawCanvas()
  };
};




function obstaclesUpdate(){
  let random = Math.floor(Math.random() * 20)
  let randomX= Math.floor(Math.random()* 290)
  newY+= 5
  ctx.fillStyle= "red"
  let obs= ctx.fillRect(randomX, newY, random, 5)
  ctx.clearRect(randomX, newY, random, 5)
  window.requestAnimationFrame(obstaclesUpdate)
}




function playerBounds(){
  if(carMove.x<= 25){
    carMove.x= 25
  }
  if (carMove.x>= 250){
    carMove.x= 250
  }
}
function updateCanvas(){
  clearCanvas()
  drawCanvas()
  draw()
}
function drawCanvas(){
ctx.beginPath();
ctx.fillStyle = "green";
ctx.fillRect(0, 0, 20, 600);
ctx.fillRect(280, 0, 20, 600);
ctx.fillStyle= "white"
ctx.fillRect(25, 0, 5, 600)
ctx.fillRect(270, 0, 5, 600)
ctx.fillRect(147, 0, 3, 7)
ctx.fillRect(147, 12, 3, 7 )
ctx.fillRect(147, 24, 3, 7)
ctx.fillRect(147, 36, 3, 7)
ctx.fillRect(147, 48, 3, 7)
ctx.fillRect(147, 60, 3, 7)
ctx.fillRect(147, 72, 3, 7)
ctx.fillRect(147, 84, 3, 7)
ctx.fillRect(147, 96, 3, 7)
ctx.fillRect(147, 108, 3, 7)
ctx.fillRect(147, 120, 3, 7)
ctx.fillRect(147, 132, 3, 7)
ctx.fillRect(147, 144, 3, 7)
  draw()
}
function clearCanvas(){
  ctx.clearRect(0,0,1000,1000)
}
function draw(){
  var car = new Image()
  car.src = "./images/car.png"
  car.onload = function () {
    ctx.drawImage(car, carMove.x, carMove.y, 25, 25)
  }
}

// for(let i=0; i<14; i++){
//   let a= 0
//   ctx.fillRect(147,a, 3, 7)
//   a+=10
// }






