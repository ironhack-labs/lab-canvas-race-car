window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
 
  var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    canvas.width = 350;
canvas.height = 550;


    function draw() {
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, 350, 550);
    ctx.clearRect(12, 0, 327, 550);
    ctx.fillRect(20, 0, 310, 550);
    ctx.clearRect(165, 20, 4, 25);
    ctx.clearRect(165, 100, 4, 25);
    ctx.clearRect(165, 180, 4, 25);
    ctx.clearRect(165, 260, 4, 25);
    ctx.clearRect(165, 340, 4, 25);
    ctx.clearRect(165, 420, 4, 25);
    ctx.clearRect(165, 500, 4, 25);
}
draw()


var img = new Image();
  img.src = 'images/car.png';
  imgScale = 100/180;
  img.onload = function() {
    updateCanvas()
  };
  
function carPic(car){
  ctx.drawImage(img, car.x, car.y,100*imgScale,120);  
}

function drawObs(){
  ctx.fillStyle = "green";
  
  for(var i =0;i <arrObs.length;i++){
    ctx.fillRect(arrObs[i].X, arrObs[i].Y, 100, 10);
    arrObs[i].Y += 1; //change all in a loop 
  }
}

var car = {
  x: 50,
  y: 425,
  moveLeft:  function() { car.x -= 25 },
  moveRight: function() { car.x += 25 },

}
var arrObs=[]
var obstacle = {
  X: 20,
  Y: 50
}

function createObstacle(){

  //push into global array a new obstacle, 
  arrObs.push({...obstacle, Y:Math.random() })
  console.log(arrObs)
  //up in drawObs() loop through the array and change all the obstacles by 
}
setInterval(createObstacle,2000)

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: car.moveLeft();  console.log('left',  car); break;
      case 39: car.moveRight(); console.log('right', car); break;
    }
    
  }

  


  function updateCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    draw(car) //Draw's background
    carPic(car) //Draw's car 
    drawObs() //draw obs
    
    window.requestAnimationFrame(updateCanvas)
  };
  //setInterval(updateCanvas, 30)
updateCanvas()





  function startGame() {

  }
};



