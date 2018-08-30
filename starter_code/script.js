window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  var canvas = document.getElementById('car-board');
  var ctx = canvas.getContext("2d");
  var car = new Image();
  car.src="images/car.png";
  function startGame() {
    scenario();
    blueCar();
   
  }

function scenario(){
  ctx.fillStyle = '#3e8317';
  ctx.fillRect(0,0,40,795);
  ctx.fillRect(460,0,40,795);
  ctx.fillStyle = '#808080';
  ctx.fillRect(40,0,10,795);
  ctx.fillRect(460,0,10,795);
  ctx.fillRect(60,0,390,795);
  ctx.strokeStyle = '#ffffff';
  ctx.setLineDash([25, 35]);
  ctx.beginPath();
  ctx.moveTo(250, 50);
  ctx.lineWidth = 7;
  ctx.lineTo(250, 800);
  ctx.stroke();
}

function blueCar(){
  ctx.drawImage(car,210,600,75,150);
}


};
