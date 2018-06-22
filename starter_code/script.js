window.onload = function() {
var greyColor = 'rgb(128, 128, 128)';
var greenColor = 'rgb(0, 129, 0)';
var whiteColor = '#fff';
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var car = new Car(187.5, 500);
var obstacles = [];


  document.getElementById("start-button").onclick = function() {
    startGame();
    window.requestAnimationFrame(updateCanvas);
  };

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: car.moveLeft(); break;
      case 39: car.moveRight(); break;
    }
  };

  function clearStage(){
    ctx.clearRect(0,0,450,700);
  }

  function animateRoad(){
    ctx.lineDashOffset = (ctx.lineDashOffset+3) % 70;
  }

  function drawStage(){
    clearStage();
    ctx.moveTo(0,0);
    ctx.fillStyle = greenColor;
    ctx.fillRect(0,0,25,700);
    ctx.fillRect(425,0,25,700);
    ctx.fillStyle = greyColor;
    ctx.fillRect(25,0,400,700);
    ctx.clearRect(35,0,10,700);
    ctx.clearRect(405,0,10,700);
    ctx.moveTo(225,700);
    ctx.lineTo(225,0);
    ctx.setLineDash([40,30]);
    ctx.lineWidth = 15;
    ctx.strokeStyle = whiteColor;
    ctx.stroke();
  }

  function startGame() {
    clearStage();
    drawStage();
    car.draw(ctx);
    if(obstacles.length){
      obstacles.forEach(function(e){
        e.draw(ctx);
      });
    }
  }

  function draw(context){
    clearStage();
    drawStage();
    animateRoad();
    car.draw(context);
    if(obstacles.length){
      obstacles.forEach(function(e){
        if(e.y > 700){
          obstacles.shift();
          console.log(e);
        } else{
          e.draw(ctx);
        }
      });
    }
  }

  setInterval(function(){
    console.log(obstacles);
    obstacles.push(new Obstacle(Math.floor(Math.random()*250+40), Math.floor(Math.random()*300)));
  }, 3000);

  function updateCanvas() {  
    clearStage();
    draw(ctx);
    if(obstacles.length){
      obstacles.forEach(function(e){
        e.move();
      });
    }
    window.requestAnimationFrame(updateCanvas);
  }
};

