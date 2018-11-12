var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var frames = 0;
road = [];
var car = "./images/car.png"

function Board(y= -30){
  this.y = y;
  this.draw = function(){  
  ctx.fillStyle="black";
  ctx.fillRect(0,0,canvas.width, canvas.height)
  ctx.fillStyle ="green";
  ctx.fillRect(0,0, 100, canvas.height);
  ctx.fillRect(canvas.width-100, 0, 100, canvas.height)
  }
  this.drawLines = function(){
    this.y++
    ctx.fillStyle = "white"
    ctx.fillRect(canvas.width/2, this.y, 20, 40)
  }
}  

var carDef = 350;

function drawWhip(){
  this.x = carDef;
  this.y = 350;
  var image = new Image();
  image.src = car;
  // image.onload = ()=>{
    ctx.drawImage(image, this.x, this.y, 120, 250)
  //}
}

var boardsito = new Board();

function update(){
  frames++
  ctx.clearRect(0,0,canvas.width, canvas.height)
  boardsito.draw()
  drawRoad()
  drawWhip()
}

function start() {
  interval = setInterval(update, 1000/200)  
}

function generateRoad() {
  if (frames % 100 === 0) {
    road.push(new Board())
  }
}

function drawRoad() {
  generateRoad()
  road.forEach(e => {
    e.drawLines()
  })
}

addEventListener('keydown', function(e){
  switch(e.keyCode){
    case 39:
       carDef +=50
       return
    case 37:
      carDef -=50 
      return
    default:
      return
  }
})

start()