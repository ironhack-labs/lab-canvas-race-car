var car = {
  x: 600/2-35,
  y: 850
}

var xObstacle = Math.floor(Math.random() * 200) + 1;
var yObstacle = 0;
var widthO = Math.floor(Math.random() * 200) + 100;
var heightObstacle = 10;

window.onload = function()
{
  document.getElementById("start-button").onclick = function() 
  {
    startGame();
    setTimeout(nextObstacle(),3000);
  };
};

function startGame() {
  
  setInterval(drawEverything,20);
  obstacle();
  //setTimeout(obstacle2(),3000);
  window.requestAnimationFrame(obstacle);
  //window.requestAnimationFrame(obstacle2);
}

function nextObstacle() {
  
  obstacle2()
  window.requestAnimationFrame(obstacle2);
}

function drawEverything() 
{
  var canvas = document.getElementById('raceCar');
  var ctx = canvas.getContext('2d');
  var x = 10;
  var l = 600;
  
  clear ();
  ctx.fillStyle = "#008B00";
  ctx.fillRect(0, 0, 3*x, 1000);
  ctx.fillStyle = "grey";
  ctx.fillRect(3*x, 0, x, 1000);
  ctx.fillStyle = "white";
  ctx.fillRect(4*x, 0, x, 1000);
  
  ctx.fillStyle = "grey";
  ctx.fillRect(5*x, 0, l/2, 1000);
  
  ctx.strokeStyle="white";
  ctx.lineWidth=10;
  ctx.setLineDash([15,20]);
  ctx.moveTo(l/2, 0);
  ctx.lineTo(l/2, 1200);
  ctx.stroke();
  
  
  ctx.fillStyle = "grey";
  ctx.fillRect(l/2, 0, l/2, 1000);
  
  ctx.fillStyle = "white";
  ctx.fillRect(+l, 0, x, 1000);
  ctx.fillStyle = "grey";
  ctx.fillRect(x+l, 0, x, 1000);
  ctx.fillStyle = "#008B00";
  ctx.fillRect(2*x+l, 0, 3*x, 1000);
  
  var canvas = document.getElementById("raceCar");
  var ctx = canvas.getContext("2d");
  var image = document.getElementById("source");
  
  ctx.drawImage(image,car.x,car.y,70,159);
 
}

function clear ()
{
  //console.log('clear')
  var canvas = document.getElementById("raceCar");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0,0, 900, 1200)

}

function obstacle()
{
  var canvas = document.getElementById("raceCar");
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillRect(xObstacle,yObstacle += 1,widthO,40),0;
  window.requestAnimationFrame(obstacle);
}

function obstacle2()
{
  var canvas = document.getElementById("raceCar");
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillRect(3*xObstacle,yObstacle += 1,widthO+Math.floor(Math.random() * 50),40),0;
  window.requestAnimationFrame(obstacle2);
}



  
document.onkeydown = function(e)
{
  e.preventDefault();
  switch(e.keyCode)
  {
    case 37: moveLeft()
    console.log('left')
    break;
    case 39 : moveRight()
    console.log('right')
    break;
  }
  function moveRight ()
  {
    car.x += 20;
  }
  function moveLeft ()
  {
    car.x -= 20;
  }
  
}



