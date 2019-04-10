

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame(x, y){
  var theCanvas = document.getElementById('example');
  var ctx = theCanvas.getContext('2d');
  let w = 450;
  let h = 600;
  // let frames = 0; 
  let obstacleWidth = 150;
	let obstacleHeight = 50;


  function drawBoard() {
  // frames++;
  ctx.fillStyle="green";
  ctx.fillRect(0, 0, 1000, 1000);
  ctx.clearRect(30, 0, 390, 1000);
  ctx.fillStyle="gray";
  ctx.fillRect(30, 0, 390, 1000);
  ctx.clearRect(40, 0, 370, 1000);
  ctx.fillStyle="gray";
  ctx.fillRect(50, 0, 350, 1000);

  ctx.beginPath();
  ctx.setLineDash([15, 5]);
  ctx.moveTo(225, 0);
  ctx.lineTo(225, 1000);
  ctx.strokeStyle = "white"
  ctx.stroke();
  }
  //   // use id "example" to get <canvas></canvas> tag
  //   const theCanvas = document.getElementById("example");
  
  //   // capture 2d context where everything happens in canvas
  //   // context has all the methods for drawing things
  //   const ctx = theCanvas.getContext("2d");
  
  //   // colors rectangle with this color
  //   ctx.fillStyle = "green";
  
  //   // creates rectangle => ctx.fillRect(x, y, width, height);
  //   ctx.fillRect(x, 0, 50, 50);
  // }
//   }startGame()
// };

let carImage = new Image()
carImage.src = "images/car.png" 

function drawCar(){
  ctx.drawImage(carImage, car.x, car.y, car.width, car.height)
}
let car = {
  x:400,
  y:500,
  width:40,
  height:80,
}

document.onkeydown = function(e) {
  console.log(e.keyCode)
  switch (e.keyCode) {
    case 38: car.y-=5;  break;
    case 40: car.y+=5;  break;
    case 37: car.x-=5;  break;
    case 39: car.x+=5;  break;
    case 32: car.accident = 300; break;
  }
}


  
 var myObstacles = [];

//  var myObstacles = [
//    {width:'50px', height:'20px', x:45, y:2},
//    {width:'50px', height:'20px', x:45, y:22},
//    {width:'50px', height:'20px', x:45, y:33},

//  ];

function createObstacles(){
  for(x=0; x < 50; x++){
    // var obX = (200 * x) + Math.round(Math.random() * 150);
    // var obY = -1*50 + Math.round(Math.random() * 400);
    var obX =  Math.round(Math.random() * 400)
    var obY = -1*x*150
    myObstacles.push({"x":obX,"y":obY,"width":obstacleWidth, "height":obstacleHeight});
  }
}
createObstacles();

function drawObstacles(){
  ctx.beginPath();
  for(i=0;i < 50; i++){
    var obX = myObstacles[i].x
    myObstacles[i].y++
    //console.log(myObstacles[x])
    var obY = myObstacles[i].y;
    
    collisionDetection(myObstacles[i]);

    ctx.rect(obX,obY,obstacleWidth,obstacleHeight)

  }	
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}
drawObstacles

// function clearCanvas() {
//   ctx.clearRect(0,0,400,511);
// }

let globalId;
function updateCanvas(){ //BEATING HEART OF YOUR APP
  //console.log('updateCanvas')
  globalId = requestAnimationFrame(updateCanvas)

  /*In here I'll clear everything and redraw it*/ 
  
  ctx.clearRect(0,0,w,h) //ERASE EVERYTHING
  drawBoard();
  drawCar();
  drawObstacles();
  score();
  //gameAnimationFrame = window.requestAnimationFrame(updateCanvas) //so it calls itself recursively over and over
 }
 globalId = requestAnimationFrame(updateCanvas)
 
 
 
 function collisionDetection(rect1){
  //console.log(rect1, car)
  if (
    rect1.x < car.x + car.width && //
    rect1.x + rect1.width > car.x &&
    rect1.y < car.y + car.height &&
    rect1.y + rect1.height > car.y
    ) {
      console.log('collision')
      //throw new Error()
      //ctx.clearRect(0,0,w,h) //ERASE EVERYTHING
      //stop()
      window.cancelAnimationFrame(globalId)

    }
}
function score(){
    var points = Math.floor();
    ctx.font = "18px serif";
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + points, 350, 50);
  } 
}
}
  
