

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  
  
  function startGame() {
    var canvas = document.getElementById('canvasId');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.rect(0, 0, 600, 600);
    ctx.fill();
    draw(ctx);
    drawCar(ctx, car);
    returnCtx(ctx);
    globalCtx = ctx;
  }
};


function draw(ctx) {
  //grey
  ctx.fillStyle = 'grey';
  ctx.beginPath();
  ctx.rect(15, 0, 270, 300);
  ctx.fill();

  //whiteLines
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.rect(20, 0, 8, 300);
  ctx.fill();

  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.rect(270, 0, 8, 300);
  ctx.fill();

  //whiteLine Patter
  ctx.setLineDash([5,5]);
  ctx.strokeStyle = 'white';
  ctx.beginPath();
        ctx.moveTo(150, 0);
        ctx.lineTo(150, 500);
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.closePath();
  }


  //car OBJ
  var car = {
    x: 25,
    y: 25,
    moveUp:    function() { this.y -= 25 },
    moveDown:  function() { this.y += 25 },
    moveLeft:  function() { this.x -= 25 },
    moveRight: function() { this.x += 25 },
  }
  
  //draw car
  
  function drawCar(car) {
    var img = new Image();
    var imgScale = 50/50;
    img.onload = function () {
      img.src = "images/car.png";
      ctx.drawImage(img, car.x, car.y, 15*imgScale, 10);
    }
  }

 

  //listener
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 38: car.moveUp();    console.log('up',    car); break;
      case 40: car.moveDown();  console.log('down',  car); break;
      case 37: car.moveLeft();  console.log('left',  car); break;
      case 39: car.moveRight(); console.log('right', car); break;
    }
    updateCanvas();
  }
  
  function updateCanvas() {
    drawCar(car);
  }
  