
/////////////////////////////////////////////////////////////////////////////////
////////////////// C A R     R A C E ----- D A I L Y ////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////// I R O N   H A C K  ------ P I L Y ------- N O V / 1 1 / 2 0 1 8 ////////
////////////////////////////////////////////////////////////////////////////////


//// -°°°°-----------------W I N D O W   O N   L O A D -------------------------°°°°-//

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  }



////-°°°°----------------------C A N V A S -------------------------------------°°°°-//

var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

////-°°°°----------------------V A R I A BL E S --------------------------------°°°°-//

var interval
var frames = 0
var obstacles = []
var images = {
  bg: "http://pixelart.studio/Gallery/Image/21499be7-d28b-400c-8588-956b09cca486?type=png",
  car: "./images/car.png",
  obstacle: "https://cdn160.picsart.com/upscale-243874298043212.png?r1024x1024",
  obstacle2: "http://pixelartmaker.com/art/a4ad9b81b31dae6.png",
}


////-°°°°----------------------C L A S S E S -----------------------------------°°°°-//

    //# Road Class
    function Road(){
      this.x = 60
      this.y = 10
      this.width = canvas.width
      this.height = canvas.height
      this.image = new Image()
      this.image.src = images.bg

      
        //Draw function: changes the image possition (makes it infinite)
      this.draw = function(){
        this.y++
        if(this.y > this.height) this.y = 0
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        ctx.drawImage(this.image,this.x,this.y - this.height,this.width,this.height)
      }
    }


    //# Car Class
    function Car(){
      Road.call(this)
      this.x = 400
      this.y = 500
      this.width = 40
      this.height = 80
      this.image.src = images.car

        //Draw function: prints car image in a static coordenate 
      this.draw = function(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
      }
      
        //Is Touching: checks if Car "touches" an item
      this.isTouching = function(item){
        return (this.x < item.x + item.width) &&
        (this.x + this.width > item.x) &&
        (this.y < item.y + item.height) &&
        (this.y + this.height > item.y);
      }

    }

    //# Obstacle Class
    function Obstacle(x, type){
      Road.call(this)
      this.x = x
      this.y = -100
      this.width = 60
      this.height = 60
      this.image = new Image()
      this.image.src = type === "can" ? images.obstacle : images.obstacle2

        //Draw function: prints moving obstacles
      this.draw = function(){
        this.y+=2
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height) 
    }
    }





////-°°°°----------------------I N S T A N C E S -------------------------------°°°°-//

var bg = new Road()
var car = new Car()
var obstacle = new Obstacle()

////-°°°°----------------------M A I N   F U N C T I O N S ---------------------°°°°-//

  //# Start Game: sets an interval
function startGame() {
  frames = 0
  if(!interval) interval = setInterval(update,1000/60)
  };

  //# Update: draws elements on canvas and calls main funcitons
function update(){
  frames++
  ctx.clearRect(0,0,canvas.width, canvas.height)
  bg.draw()
  car.draw()
  drawObstacles()
  checkCarCollition()
}

  //# Game Over: clears interval and prints score on screen
function gameOver(){
  clearInterval(interval)
  interval = null
  ctx.fillStyle = "red"
  ctx.font = "bold 80px Arial"
  ctx.fillText("GAME OVER", 150,200)
  ctx.fillStyle = "black"
  ctx.font = "bold 40px Arial"
  ctx.fillText("Tu score: " + Math.floor(frames/60), 280,300)
}




////-°°°°----------------------A U X   F U N C T I O N S -----------------------°°°°-//


  //# Generates Obstacles
function generateObstacle(){
  if(frames%150===0) {
      var xCoor = Math.floor(Math.random()*600)
      var xCoor2 = Math.floor(Math.random()*600)
      obstacles.push(new Obstacle(xCoor, "can"))
      obstacles.push(new Obstacle(xCoor2,"nel"))
  }
}

  //# Draw Obstacles
function drawObstacles(){
  generateObstacle()
  obstacles.forEach(function(obstacle){
      obstacle.draw()
  })
}


  //# Check Car Collition
function checkCarCollition(){
  for(var obstacle of obstacles){
      if(car.isTouching(obstacle)){
          gameOver()
      }
  }
}

////-°°°°----------------------L I S T E N E R S -------------------------------°°°°-//


// # Right Key Event
addEventListener('keyup',function(e){
  switch(e.keyCode){
      case 39:
      car.x += 10
          return start()
      default:
          return
  }
} )


// # Left Key Event
addEventListener('keydown',function(e){
  switch(e.keyCode){
      case 37:
          car.x -= 10
          return
      default:
          return
  }
} )


////-°°°°---------------------- E N D   O F   C O D E ----------------------------------°°°°-//
