let carObj;

//drawGame
function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var x = canvas.width
  var y = canvas.height
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, x, y)
  ctx.fillStyle = "grey"
  ctx.fillRect(50, 0, 500, y)
  //lines
  ctx.setLineDash([10, 15, 10, 5]);
  ctx.moveTo(x / 2, 0);
  ctx.lineTo(x / 2, y);
  ctx.stroke();
  ctx.drawImage(carObj, 265, 450, 75, 150)



}


//arrowLeft 37 arrowRight 38


window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {

  }
  carObj = new Image();
  carObj.onload = function () {
    draw();
  };
  carObj.src = "/Users/chanty/Desktop/labs/lab-canvas-race-car/starter_code/images/car.png";
};

