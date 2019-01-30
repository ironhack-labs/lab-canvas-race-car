window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    if (!gameOn){
    startGame();
    }
    else {
      alert('Game already started!');
    }
  };

  let gameOn = false;
  function startGame() {
    gameOn = true;
    var canvas = document.getElementById('main');
    var roadCanvas = document.getElementById('road');
    var ctx = roadCanvas.getContext('2d');
    var carCtx = canvas.getContext('2d');
   




//ROAD
      function drawRoad(){
        ctx.fillStyle = 'green';
        ctx.fillRect(0,0, 350, 600);

        ctx.fillStyle = 'gray';
        ctx.fillRect(25, 0, 300, 600);
        
        ctx.fillStyle = 'white';
        ctx.fillRect(35, 0, 10, 600 );
        ctx.fillRect(306, 0, 10, 600 );
      }

      let movedFoward = false
    let dashInterval = setInterval(function(){
      if (movedFoward === false) {
        for (var i = 0; i < 20; i++) {
          ctx.fillStyle = 'white'
          ctx.fillRect(175, 10 + i * 30, 4, 20);
          ctx.fillStyle = 'gray'
          ctx.fillRect(175, 0 + i * 30, 4, 10);
          movedFoward = true;  
        }
      }  
      else {
        for (var i = 0; i < 20; i++) {
          ctx.fillStyle = 'white'
          ctx.fillRect(175, -5 + i * 30, 4, 20);
          ctx.fillStyle = 'gray'
          ctx.fillRect(175, 15 + i * 30, 4, 10);
          movedFoward = false;  
        }
      }
    }, 100)


//CAR
    var car = {
      x: 150,
      y: 475,
      moveLeft:  function() { this.x -= 10 },
      moveRight: function() { this.x += 10 },
    }
    function draw(car) {
      var img = new Image();
      img.onload = function() { 
         carCtx.drawImage(img, car.x, car.y, 50, 100); 
      }
      img.src = "images/car.png";
    }

    
//OBSTACLE
let obstacles = [];
    
class Obstacle {
  constructor(x, width){
    this.x = x,
    this.y = 0
    this.width = width
  }
}

let frames = 0;


function drawObstacle () {
  for (let i = 0; i < obstacles.length; i++){
    carCtx.fillStyle = 'red';
    carCtx.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].width, 20);
  }
}

function createObstacle(){
  let randomWidth = Math.floor(Math.random() * (160 - 60) + 60);
  let randomX= Math.floor(Math.random() * (230 - 30) + 30);
  obstacles.push(new Obstacle(randomX, randomWidth))
}



var myInterval = setInterval(moveObstacles,50);
function moveObstacles() {
  updateObstacle() 
  for (let i = 0; i < obstacles.length; i++){
    obstacles[i].y += 2
    carCtx.fillStyle = 'red';
    carCtx.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].width, 20);
  }
  frames++
  if (frames % 100 === 0){
    createObstacle()
  }
  

  for (let j=0; j< obstacles.length; j++){
    if (obstacles[j].y + 20 == 476 && 
      ((car.x >= obstacles[j].x && car.x <= obstacles[j].x + obstacles[j].width) ||
      (car.x+50 >= obstacles[j].x && car.x+50 <= obstacles[j].x + obstacles[j].width) )) {
       alert("Watch where you're going!");
        clearInterval(myInterval);
        carCtx.clearRect(0,0,350,600);  
    }
  }
  
   drawScore();
  
} 

//SCORE
function drawScore() {
  //carCtx.clearRect(0,20,200,100);
  carCtx.clearRect(0,0,350,35);
  carCtx.font = "20px Arial";
  carCtx.fillStyle = "white";
  carCtx.fillText("Score: "+frames, 50, 30);
}
    
//KEYBOARD
    document.onkeydown = function(e) {
      updateCanvas();
      switch (e.keyCode) {
        case 37: 
          if(car.x >= 40){
          car.moveLeft();  
          console.log('left',  car); 
          break;
          }
          else {
            break;
          }
        case 39: 
          if(car.x <= 260){
          car.moveRight(); 
          console.log('right', car); 
          break;
          }
          else {
            break;
          }
      }
    }



    
    function updateCanvas() {
      carCtx.clearRect(car.x,car.y,50,100);
      //drawRoad();
      draw(car)
      //drawObstacles();
    }
    
    function updateObstacle() {
      for (let i = 0; i < obstacles.length; i++){
        carCtx.clearRect(obstacles[i].x,obstacles[i].y,obstacles[i].width,20);
      }
    }
    
    
    drawRoad();
    draw(car);
    drawObstacle();
    createObstacle();
    drawScore();
    
  }
  
 
};
