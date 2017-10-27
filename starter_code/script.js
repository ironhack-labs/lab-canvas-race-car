window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };


  function startGame() {
    var canvasGame = document.createElement('canvas');
    canvasGame.setAttribute('id', 'canvas');
    canvasGame.setAttribute('width', '500');
    canvasGame.setAttribute('height', '700');
    var div = document.getElementById('game-board');
    div.appendChild(canvasGame);
    drawTile();
  }
};

function drawTile() {
  var lienzo = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = '#008000';
  ctx.fillRect(0, 0, 40, 700);
  ctx.fillStyle = '#808080';
  ctx.fillRect(40, 0, 420, 700);
  ctx.fillStyle = 'white';
  ctx.fillRect(50, 0, 15, 700);
  ctx.fillStyle = 'white';
  ctx.fillRect(435, 0, 15, 700);
  ctx.fillStyle = '#008000';
  ctx.fillRect(460, 0, 40, 700);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 5;
  ctx.setLineDash([25, 35]);
  ctx.beginPath();
  ctx.moveTo(250, 0);
  ctx.lineTo(250, 700);
  ctx.stroke();
  ctx.closePath();

  var car = new Image();
  car.src = './images/car.png';
  car.onload = function() {
    ctx.drawImage(car, 210, 300, 150 * 158 / 319, 150);
  };

  car.addEventListener('keyup', moveCar)


}


function moveCar(car, ) {
  switch (key.MOVEMENT) {
    case key.LEFT:
      ctx.drawImage(car)
      break;
    default:

  }

}

var keys = {
  LEFT: 37,
  RIGTH: 39
};
