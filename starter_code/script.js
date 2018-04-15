window.onload = function() {
  var currentGame;
  var canStart = true;

  //------------//-car constructor function//-----------------

  var Car = function(){
    this.x = 232; 
    this.y = 602;      
    this.width = 50;  
    this.height = 85; 
    this.img = './images/car.png';
  }
  
/////------makes the vehicle appear-------------\\\\\

  Car.prototype.drawCar = function(){ 
    var theImage = new Image();
    theImage.src = this.img;
    ctx.drawImage(theImage, this.x, this.y, this.width, this.height)
  }


Car.prototype.move = function (magicalNumber) {
ctx.clearRect(this.x,this.y,this.width,this.height);

///--------updates value of the car--------car prototype method---\\\\ 
  switch(magicalNumber) {
    case 37:
    if(this.canMove(this.x-5, this.y)){
      this.x -= 15;
    }
        break;
    case 38:
    if(this.canMove(this.x,this.y-5)){
      this.y -=15;
    }
        break;
    case 39:
    if(this.canMove(this.x+5, this.y)){
      this.x +=15;
    }
        break;
    case 40:
    if(this.canMove(this.x,this.y+5)){
      this.y+=15;
    }
        break;
    default:
        console.log("oops");
}
    this.drawCar();
}


Car.prototype.canMove = function(futureX,futureY){
  var canIMove = true;
  currentGame.obstacles.forEach(function(theObstacle){
  if((futureX >= theObstacle.x && futureX <= theObstacle.x+theObstacle.width) && (futureY >= theObstacle.y && futureY <= theObstacle.y+theObstacle.height)){
  canIMove = false;
    console.log('ouch')
  }
  });
  return canIMove;
  
  }


//------- obstacle contructor function -----\\\\

var Obstacle = function (x,y,width,height){

this.x = x;
this.y = y;
this.width = width;
this.height = height;
}

//------- draws the obstacle -----still part of the obs//

Obstacle.prototype.draw = function(){ 
  ctx.fillRect(this.x, this.y, this.width, this.height)

}



//---------------------------//

    var myCanvas = document.getElementById('theCanvas');
    var ctx = myCanvas.getContext('2d');
    document.getElementById("start-button").onclick = function() {
      startGame();
    };

//--------starts a new game-------\\
    function startGame() {
      if(canStart) { 
        currentGame = new Game();
        var theCar = new Car();
        currentGame.car = theCar;
        currentGame.car.drawCar();
        var leftWall = new Obstacle(0,0,30, 700); //--makes obstacle----
        var rightWall = new Obstacle(470,0,30, 700); //--makes obstacle----
      
        currentGame.obstacles.push(leftWall, rightWall);

        currentGame.obstacles.forEach(function(oneObstacle){
          oneObstacle.draw();

        });
        canStart = false;
     }
    }


////moves vehicle onclick of directional buttons\\

   document.onkeydown = function (event){
     if (event.which === 37 || event.which === 38 || event.which === 39 || event.which === 40) {
       event.preventDefault(); ////<----stops action from happening---
       
     }
      var directionCode = event.which;
      currentGame.car.move(directionCode); 
    }


  };
