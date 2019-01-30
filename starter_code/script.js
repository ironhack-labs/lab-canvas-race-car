// window.onload = function() {
//   document.getElementById("start-button").onclick = function() {
//     startGame();
//   };

//   function startGame() {

//   }
// };

var canvas = document.getElementById('raceBoard');
var ctx = canvas.getContext('2d');


function draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 300, 500);    
    ctx.fillStyle = "gray";
    ctx.fillRect(30, 0, 240, 500);  
    ctx.fillStyle = "white";
    ctx.fillRect(40, 0, 220, 500);  
    ctx.fillStyle = "gray";
    ctx.fillRect(50, 0, 200, 500); 
    ctx.fillStyle = "white";
    ctx.fillRect(145, 0, 4, 500); 
    ctx.fillStyle = "gray";
    ctx.fillRect(145, 2, 4, 8);
    ctx.fillRect(145, 40, 4, 8);
    ctx.fillRect(145, 80, 4, 8);
    ctx.fillRect(145, 120, 4, 8);
    ctx.fillRect(145, 160, 4, 8);
    ctx.fillRect(145, 200, 4, 8);
    ctx.fillRect(145, 240, 4, 8);
    ctx.fillRect(145, 280, 4, 8);
    ctx.fillRect(145, 320, 4, 8);
    ctx.fillRect(145, 360, 4, 8);
    ctx.fillRect(145, 320, 4, 8);
    ctx.fillRect(145, 360, 4, 8);
    ctx.fillRect(145, 400, 4, 8);
    ctx.fillRect(145, 440, 4, 8);
    ctx.fillRect(145, 480, 4, 8);
}
draw();

var ctx = document.getElementById('raceBoard').getContext('2d');
 var img = new Image(); //<img src="images/car.png" onload="function(){ ctx.drawImage(...)}"</>
 img.src = 'images/car.png';
 imgScale = 250/200;
 img.onload = function() {
  updateCanvas()
 };

function drawCar(car){
  ctx.drawImage(img, car.x, car.y,30*imgScale,80);
}

function drawObs(){
  ctx.fillStyle = "green";
  for (i = 0; i < myObstacles.length; i++) {
    ctx.fillRect(myObstacles[i].x, myObstacles[i].y, myObstacles[i].width, myObstacles[i].height);
    console.log()
    myObstacles[i].y += 1;
  } 
}

var myObstacles = [];
var obstacle = {
  x: 3,
  y: 20,
}


function newObstacles(){
  let lengthMax = 100;
  let lengtthMin = 10;
  let width = Math.floor(Math.random()*(lengthMax-lengtthMin+1)+lengtthMin);
  let height = Math.floor(Math.random()*20);
  myObstacles.push({x:width, y:height, width:width, height:height});
  myObstacles.push({x:height, y:width, width:100-width, height:10});

  }
  setInterval(newObstacles,2000)

 

  var car = {
    x: 125,
    y: 400,
    moveLeft:  function() { this.x -= 25 },
    moveRight: function() { this.x += 25 },
    // moveUp:    function() { this.y -= 25 },
    // moveDown:  function() { this.y += 25 },
  }

  
  
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      // case 38: car.moveUp();    console.log('up',    car); break;
      // case 40: car.moveDown();  console.log('down',  car); break;
      case 37: car.moveLeft();  console.log('left',  car); break;
      case 39: car.moveRight(); console.log('right', car); break;
    }
    updateCanvas();
  }
  
  function updateCanvas() {
    ctx.clearRect(0,0,300,500);
    draw(car)
    drawCar(car)
    drawObs()
    window.requestAnimationFrame(updateCanvas)
  }
  updateCanvas()



