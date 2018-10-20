window.onload = function() {
  var interval = setInterval(drawObs, 20);
  var counter = 0;

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

var canvas = document.getElementById("canvas");
var ctx    = canvas.getContext("2d");
//draw car
var car = {
  x:180,
  y:600,
  moveLeft:  function() { this.x -= 25 },
  moveRight: function() { this.x += 25 },
};

function draw(car){
var img = new Image();
img.onload = function() {
  ctx.drawImage(img, car.x, car.y, 45, 90); 
}
img.src = './images/car.png';
}

//declaring the obstacle
var obstacle = {
  x:50,
  y:0,
  obsH : 30,
  obsL : 50,
};

//drawing the obstacle

function drawObs (obstacle){
  ctx.fillStyle = 'black';
  ctx.fillRect(obstacle.x, obstacle.y, obstacle.obsH, obstacle.obsL);
}


//Start game function
  function startGame() {
    var canvas = document.getElementById("canvas");
    var ctx    = canvas.getContext("2d");
    ctx.fillStyle = '#4D4E53';
    ctx.fillRect(0, 0, 400, 800);
    ctx.fillStyle = '#228B22'
    ctx.fillRect(0, 0, 30, 800);
    ctx.fillStyle = '#228B22'
    ctx.fillRect(370, 0, 30, 800);
    ctx.fillStyle = 'red'
    ctx.fillRect(40, 0, 10, 800);
    ctx.fillStyle = 'red'
    ctx.fillRect(350, 0, 10, 800);
   
    ctx.beginPath();
    ctx.setLineDash([40,30]);
    ctx.moveTo(195,0);
    ctx.lineTo(195,800);
    ctx.strokeStyle='yellow';
    ctx.lineWidth=10;
    ctx.stroke();

//dessiner la voiture
    draw(car);
    drawObs(obstacle);

    //faire bouger la caisse
    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37: car.moveLeft();  console.log('left',  car); break;
        case 39: car.moveRight(); console.log('right', car); break;  
      }
      updateCanvas();
    }
  }
  
  function updateCanvas() {
    ctx.clearRect(0,0,400,800);
    startGame();
  }

  function updateObs(){
conditon
    faire descendre les obstacles
  }
};
  

