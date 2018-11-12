// -----CANVAS-------//////////

var canvas = document.getElementById('road')
var ctx = canvas.getContext('2d')

// -----VARIABLES-------//////////

var interval
var frames = 0
var images = {
    bg: draw(),
    car: "./images/car.png",
    logo: "./images/logo.png",
    arrows: "./images/logo.png",
    obstacle: ""
}
var obstacles = []

//---->> Constructor Board--------------------------------------------------------------
function Board(){
  this.x = 0 
  this.y = 0 
  this.width = canvas.width 
  this.height = canvas.height
  //-------- Image constructor
  this.image = new Image()
  this.image.src = images.bg
  //this.image.onload = ()=>this.draw()
  this.draw = function(){
      this.y--
      if(this.y < -this.width) this.y = 0 // This makes the background to move
      //------??????????????----------------------

      //drawImage method draws the image into the canvas size
      ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
      ctx.drawImage(this.image,this.x,this.y + this.height,this.width,this.height)
  }

  this.drawScore = function(){
      ctx.font = "bold 24px Avenir"
      ctx.fillText("Score: " + Math.floor(frames/60), 50,50)
  }
}
//---->> Constructor Board--------------------------------------------------------------

//---->> Constructor Car------------------------------------------------------

function Car(){
  Board.call(this)
  this.x = 310
  this.y = 700
  this.width = 30
  this.height = 60
  this.image.src = images.car
  //this.image.onload = ()=>this.draw()
  this.draw = function(){
      this.boundaries()
      ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
  }
  this.boundaries = function(){
      if(this.x+this.width > canvas.width-10) {
          this.x = canvas.width-this.width
      }
      // Left boundary
      else if(this.x < 10 ) {
          this.x = 10
      }
      // Top boundary
  }

  this.isTouching = function(item){
      return (this.x < item.x + item.width) &&
      (this.x + this.width > item.x) &&
      (this.y < item.y + item.height) &&
      (this.y + this.height > item.y);
  }
} 
//---->> Constructor car------------------------------------------------------

//---->> Constructor obstacles------------------------------------------------------

function Obstacles(width,x, position){
  this.x = x || 0 
  this.y = canvas.height + 60
  this.width = width
  this.height = 2
  this.image = new Image()
  this.image.src = images.obstacle
  this.draw = function(){
      this.y-=2 //--> the speed in which obstacles appear
      ctx.drawImage(this.image,this.x,this.y,this.width,this.height) 
  }
}
//---->> Constructor obstacles------------------------------------------------------

// -----INSTANCES-------//////////
var bg = new Board()
var car = new Car()
var obstacle = new Obstacles()

// -----MAIN FUNCTIONS-------//////////
function start(){
    obstacles = []
    frames = 0 // ?
    car = new Car()
    if(!interval) interval = setInterval(update,1000/60) //the speed in which all moves.
}
function update(){
    frames++
    ctx.clearRect(0,0,canvas.width, canvas.height) //clears the rectangle
    bg.draw()
    car.draw()
    drawObstacles()
    bg.drawScore()
    checkCarCollition()
}
function gameOver(){
    clearInterval(interval)
    interval = null
    ctx.fillStyle = "red"
    ctx.font = "bold 80px Arial"
    ctx.fillText("GAME OVER", 200,50)
    ctx.fillStyle = "black"
    ctx.font = "bold 40px Arial"
    ctx.fillText("Tu score: " + Math.floor(frames/60), 200,150)
    ctx.font = "bold 20px Arial"
    ctx.fillText("Presiona 'Return' para reiniciar", 200,250)
}

// -----AUX FUNCTIONS-------//////////
/*function drawCover(){
  var img = new Image()
  img.src = images.logo
  img.onload = function(){
      bg.draw()
      ctx.drawImage(img, 50,100,300,100)
      ctx.font = "bold 24px Avenir"
      ctx.fillText("Presiona la tecla 'Return' para comenzar", 50,300)
  }
}
*/

function generateObstacles(){
  if(frames%150===0) {
      var width = Math.floor(Math.random()*400 + 50)
      obstacles.push(new Obstacle(width,0, "left"))
      var w = canvas.width-width-200
      var x = canvas.width - h
      obstacles.push(new Pipe(h,y))
  }
  //function Obstacles(width,x, position){

}

function drawObstacles(){
  generateObstacles()
  obstacles.forEach(function(obstacle){
      obstacle.draw()
  })
}

function checkCarCollition(){
  for(var obstacle of obstacles){
      if(car.isTouching(obstacle)){
          gameOver()
      }
  }
}

// -----LISTENERS-------//////////
document.getElementById("start-button").addEventListener("click", function(){
          return start()

  }
)

addEventListener('keydown',function(e){
  switch(e.keyCode){
      case 39:
          car.x +=10
          return
      break
      case 37:
          car.x -=10
          return
      default:
          return
  }
} )

//drawCover()


//------------------------------
/*window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    var ctx = canvas.getContext('2d');
  };

  function startGame() {

  }
};
*/
function draw() {
  var canvas = document.getElementById('road');
    var ctx = canvas.getContext('2d');
               //(x, y, width, height)
    ctx.fillStyle = "green"
    ctx.fillRect(25, 25, 60, 800); 
    ctx.fillStyle = "gray"
    ctx.fillRect(85, 25, 20, 800); 
    ctx.fillRect(125, 25, 400, 800); 
    ctx.fillRect(545, 25, 20, 800); 
    ctx.fillStyle = "green"
    ctx.fillRect(565, 25, 60, 800); 

    ctx.beginPath();
    ctx.strokeStyle = "white"
    ctx.lineWidth = 8;
    ctx.setLineDash([40, 45]);
    ctx.moveTo(310, 25);
    ctx.lineTo(310, 800);
    ctx.stroke();
    ctx.closePath()
}

draw()