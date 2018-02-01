var canvas = document.getElementById("canvas");
var ctx    = canvas.getContext("2d");
ctx.fillStyle = 'white';
ctx.font = '18px serif';

var ghost = {
  x: 25,
  y: 25,
  
  moveLeft:  function() { this.x -= 25 },
  moveRight: function() { this.x += 25 },
}

function draw(ghost) {
  var img = new Image();
  img.onload = function() { 
     ctx.drawImage(img, ghost.x, ghost.y, 50, 50); 
  }
  img.src = "https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif";
}


document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37: ghost.moveLeft();  console.log('left',  ghost); break;
    case 39: ghost.moveRight(); console.log('right', ghost); break;
  }
  updateCanvas();
}

function updateCanvas() {
  ctx.clearRect(0,0,700,500);
  draw(ghost)
}

updateCanvas()