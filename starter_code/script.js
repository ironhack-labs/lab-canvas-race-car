window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    updateCanvas()
    // backgroundImage();
  };
}
  function startGame() {
    let canvas = document.getElementById('canvas1');
    var ctx = canvas.getContext('2d');
    // let w = 450; 
    // let h = 450; 
    ctx.fillStyle="green";
    ctx.fillRect(0, 0, 400, 500);
    ctx.fillStyle="gray";
    ctx.fillRect(25, 0, 350, 500);
    ctx.fillStyle=("white");
    ctx.fillRect(35,0,10,500);
    ctx.fillStyle=("white");
    ctx.fillRect(355,0,10,500);
    ctx.beginPath(200,0);
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 7;
    ctx.setLineDash([20, 15]);
    ctx.moveTo(200, 500);
    ctx.lineTo(200, 0);
    ctx.stroke();
    
    
  }

   
//======================================
// =========On key events=============
//======================================

  document.onkeydown = function(e) {
    if  (car.x > 45 && car.x < 330 && car.y > 5 && car.y < 415) {
      switch (e.keyCode) {
        case 38: // up arrow
          car.y -= 15;
          break;
        case 40: // down arrow
          car.y += 15;
          break;
        case 37: // left arrow
          car.x -= 15;
          break;
        case 39: // right arrow
          car.x += 15;
          break;
      }
    } 
    else if (car.x < 45) {car.x += 15}
    else if (car.x > 330) {car.x -= 15}
    else if (car.y < 5) {car.y += 15}
    else if (car.y == 415) {car.y -= 15};
  };
  
  document.onkeyup = function(e) {
    drawCar.speedX = 0;
    drawCar.speedY = 0;
  };

  startGame();


//=====================================
//==========Looping Background====
//=====================================
var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');

var img = new Image();
img.id = "background";
img.src = canvas.toDataURL();




var backgroundImage = {
  img: img,
  y: 0,
  speed: 1,

  move: function() {
    this.y += this.speed;
    this.y %= canvas.width;
  },
  draw: function() {
    ctx.drawImage(this.img, 0, this.y);
    if (this.speed < 0) {
      // ctx.drawImage(this.img, this.y - this.img.width, 0);
      ctx.drawImage(this.img, 0, this.y + canvas.width);
    } else {
      // ctx.drawImage(this.img, this.y + canvas.width, 0);
      ctx.drawImage(this.img, 0, this.y - this.img.width);
    }
    // var car = new Image();
    // car.src ="./images/car.png"
    // car.onload = function(){
    //   ctx.drawImage(car, 182,400,35,75);
    // }
  },
  
};
var img = new Image();
img.src ="./images/car.png"
function drawCar() {

    ctx.drawImage(img, car.x,car.y,35,75);
}

let car = {
  x:185,
  y:400
}

function updateCanvas() {
  backgroundImage.move();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();
  drawCar();

  requestAnimationFrame(updateCanvas);
}


// start calling updateCanvas once the image is loaded
// img.onload = updateCanvas();