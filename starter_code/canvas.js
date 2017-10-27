var ctx = document.getElementById('race-game').getContext('2d');

function drawGameBoard () {
  ctx.fillStyle = 'rgb(0, 129, 0)';
  ctx.fillRect(0, 0, 120, 900);
  ctx.fillStyle = 'rgb(128, 128, 128)';
  ctx.fillRect(120, 0, 50, 900);
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(145, 0, 50, 900);
  ctx.fillStyle = 'rgb(128, 128, 128)';
  ctx.fillRect(170, 0, 460, 900);
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(630, 0, 50, 900);
  ctx.fillStyle = 'rgb(128, 128, 128)';
  ctx.fillRect(655, 0, 50, 900);
  ctx.fillStyle = 'rgb(0, 129, 0)';
  ctx.fillRect(680, 0, 120, 900);
  ctx.beginPath();
  ctx.setLineDash([30, 30]);
  ctx.moveTo(400, 1000);
  ctx.lineTo(400, 10);
  ctx.lineWidth = 10;
  ctx.strokeStyle = 'rgb(255, 255, 255)';
  ctx.stroke();
}

var car = {
  x: 350,
  y: 550,
  moveLeft: function() { this.x -= 20 },
  moveRight: function() { this.x += 20 },
}


function draw(car) {
  var img = new Image();
  img.onload = function () {
    ctx.drawImage (img, car.x, car.y, 100, 190);
  };
  img.src = './images/car.png';
}
