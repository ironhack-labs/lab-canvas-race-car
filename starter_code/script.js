// function Draw() {
//   this.ctx = document.getElementById('canvas').getContext('2d');
//   // draw background
//   this.ctx.fillStyle = '#A9A9A9';
//   this.ctx.fillRect(0, 0, 400, 800);
// }


// function startGame() {
//   Draw();
// }




function startGameWay() {
  var canvas = document.getElementById('road');
  var ctx = canvas.getContext('2d');
  ctx.fillRect(0, 0, 400, 800);
  ctx.fillStyle = '#A9A9A9';
}

function startGameGrass() {  
var canvas = document.getElementById('road');
var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, 20, 800);
  ctx.fillStyle = 'green';
  ctx.fillRect(380, 0, 20, 800);
}

function startGameLine(){
  var canvas = document.getElementById('road');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.fillRect(50, 0, 10, 800);
  ctx.fillStyle = 'white';
  ctx.fillRect(340, 0, 10, 800);
}

  // déplacer la voiture
  var car = {
    x : 150,
    y : 580,
    moveLeft:  function() { this.x -= 25 },
    moveRight: function() { this.x += 25 },
    }

     // image voiture
  function drawCar(){
  var canvas = document.getElementById('road');
  var ctx = canvas.getContext('2d');
  var img = new Image;  
  img.onload = function() {
    ctx.drawImage(img, car.x, car.y, 60, 100); 
  };
  img.src = 'images/car.png';
  };
  
  function obstacle1() {
    var canvas = document.getElementById('road');
    var ctx = canvas.getContext('2d');
    ctx.fillRect(20, 100, 200, 30);
    ctx.fillStyle = 'red';
  }

  function obstacle2() {
    var canvas = document.getElementById('road');
    var ctx = canvas.getContext('2d'); 
    ctx.fillRect(50, 300, 200, 30);
    ctx.fillStyle = 'red';
  }


  // Déplacer la voiture avec clavier
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: car.moveLeft(); console.log ('left'); break;
      case 39: car.moveRight(); console.log ('right'); break;
    };
    updateCanvas();
  }

  function updateCanvas() {
    var canvas = document.getElementById('road');
    var ctx = canvas.getContext('2d');
    drawCar();
    obstacle1();
    obstacle2();
    startGameWay()
    startGameGrass()
    startGameLine() 
  }

 
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGameWay()
    startGameGrass()
    startGameLine()
    drawCar()
    obstacle1();
    obstacle2();
  };
 }
