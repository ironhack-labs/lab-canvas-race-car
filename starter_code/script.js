const myCanvas = document.getElementById('myCanvas');
const ctx = myCanvas.getContext('2d');

let x = 135;
let y = 460;
let speed = 10;
let obstacleSpeed = 1;
let firstPosition1 = 15;
let firstPosition2 = 255;
let crushY = 0;
let crushX1 = 0;
let crushX2 = 0;
// let repeatobstacle = 550;


function draw (){
    ctx.fillStyle = "grey";
    ctx.fillRect(15,0,320,550);

    ctx.beginPath();
    ctx.lineWidth ='5';
    ctx.strokeStyle = "white";
    ctx.moveTo(25, 0);
    ctx.lineTo(25, 550);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth ='5';
    ctx.strokeStyle = "white";
    ctx.moveTo(325, 0);
    ctx.lineTo(325, 550);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth ='5';
    ctx.strokeStyle = "white";
    ctx.setLineDash([17]);
    ctx.moveTo(175, 0);
    ctx.lineTo(175, 550);
    ctx.stroke();
    
    let img = new Image();
    img.src = './images/car.png'
    
    // img.onload = function (){      
      ctx.drawImage(img, x, y, 50, 90);    
    // }
}

  window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function moveRight (){
    if(x < 280){
    x += speed;
  }
    console.log(x);
  // startGame();    

  }

  function moveLeft (){
    if(x > 15 ){
      x -= speed;
    }
    console.log(x);
    // startGame(); 

  }

  function randomObstacle(){
  
    let random = Math.floor(Math.random()*100 +15);
    return random; 
  }

  function obstacles(){
      
    ctx.fillStyle="red";    
    ctx.fillRect(firstPosition1, obstacleSpeed, 80, 20);
    ctx.fillRect(firstPosition2, obstacleSpeed, 80, 20);
    obstacleSpeed += 3;     
    if(obstacleSpeed >= 550){
      obstacleSpeed = 1;
      firstPosition1 = randomObstacle();
      firstPosition2 = randomObstacle() + 100;
      crushX1 = firstPosition1;
      crushX2 = firstPosition2;
      console.log(crushX1, crushX2)
    } 
  }   

  function gameOver(){
    if( ){}

  }

  function clear(){
    ctx.clearRect(0,0,myCanvas.width, myCanvas.height);

  } 

  const game = document.getElementById("start-button");

  game.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 37) {
      moveLeft();  
    }else if (event.isComposing || event.keyCode === 39) {
      moveRight();
    }
  });

  function startGame() {
    clear();
    draw();   
    obstacles();
    window.requestAnimationFrame(startGame);
  }
};


