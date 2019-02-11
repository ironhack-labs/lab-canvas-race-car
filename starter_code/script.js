let canvas = document.getElementById('game-board');
let actionCanvas = document.getElementById('action');
  let ctx = canvas.getContext('2d');
  let carCtx = actionCanvas.getContext('2d');
  let height = canvas.height;
  let width = canvas.width;
  let lines = -16;
  let obstacles= [];


window.onload = function() {
  
  
  

  document.getElementById("start-button").onclick = function() {
    drawBackground(ctx, width, height);
    drawDash();
    animate();
    };

};

function drawDash(){ 
  let movedFoward = false;
   setInterval(function(){
    console.log(movedFoward)
      if (movedFoward === false) {
        for (var i = 0; i < 20; i++) {
          ctx.fillStyle = 'white'
          ctx.fillRect(230, 10 + i * 30, 4, 20);
          ctx.fillStyle = 'gray'
          ctx.fillRect(230, 0 + i * 30, 4, 10);
          movedFoward = true;  
        }
      }  
      else {
        for (var i = 0; i < 20; i++) {
          ctx.fillStyle = 'white'
          ctx.fillRect(230, -5 + i * 30, 4, 20);
          ctx.fillStyle = 'gray'
          ctx.fillRect(230, 15 + i * 30, 4, 10);
          movedFoward = false;  
        }
      }
    }, 100)

 
  }

function animate() {

  carCtx.clearRect(0, 0, width, height);
  //drawBackground(ctx, width, height);
  draw(car);
  drawObstacles();
  window.requestAnimationFrame(animate);
}

function updateCanvas(){
  //window.cancelAnimationFrame(ANIM);
  ctx.clearRect(0, 0, width, height);
  drawBackground(ctx, width, height);
  draw(car);

  //animate();
}

//ROAD BACKGROUND
function drawBackground(ctx, width, height) {
  ctx.fillStyle = "gray";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, 50, height);
  ctx.fillRect(width-50, 0, 50, height);
  ctx.fillStyle = "white";
  ctx.fillRect(55, 0, 8, height);
  ctx.fillRect(width-63, 0, 8, height);
}


var car = {
  x: width/2,
  moveLeft:  function() { 
    if(this.x<=75){
      return;
    }
    this.x -= 25 },
  moveRight: function() { 
    if(this.x >= width-125){
      return;
    }
    this.x += 25 },
}

function draw(car) {
  var img = new Image();
  img.onload = function() { 
     ctx.drawImage(img, car.x, height/1.25, 50, 100); 
  }
  img.src = "/Users/miketroianello/Desktop/code/lab/lab-canvas-race-car/starter_code/images/car.png"
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37: car.moveLeft();  console.log('left',  car); break;
    case 39: car.moveRight(); console.log('right', car); break;
  }
  updateCanvas();
}



class Obstacle {
  constructor(length, x){
    this.length = length;
    this.x = x;
    this.y = 0;
  }
}


function createObstacles(){
    let length = Math.floor(Math.random() * 130 + 10)
    let xStart = Math.floor(Math.random() * 355)
    obstacles.push(new Obstacle(length, xStart))
  }

let frames = 0;
function drawObstacles(){
  
  for (let i = 0; i < obstacles.length; i++){
    obstacles[i].y += 2
    carCtx.fillStyle = 'red';
    carCtx.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].length, 10);
    
  }
  frames++;
  if (frames % 100 === 0){
    createObstacles()
  }
  
  for (let j=0; j< obstacles.length; j++){
    // if (obstacles[j].y + 10 >= 478 && 
    //   ((car.x >= obstacles[j].x && car.x <= obstacles[j].x + obstacles[j].width) ||
    //   (car.x+50 >= obstacles[j].x && car.x+50 <= obstacles[j].x + obstacles[j].width) )) {
       if(obstacles[j].y  == 478 && 
        ((car.x >= obstacles[j].x && car.x <= obstacles[j].x + obstacles[j].length) ||
        (car.x+50 >= obstacles[j].x && car.x+50 <= obstacles[j].x + obstacles[j].length) )){
    alert("Game Over!");
        clearInterval(myInterval);
       carCtx.clearRect(0,0,width,height);  
    }
  }
  

}