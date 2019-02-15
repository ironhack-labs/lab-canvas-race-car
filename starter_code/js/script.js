window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();    
  };

  function startGame() {
    var game = new Game();
    game._init("race");

  }
};


function Game() {
  this.canvas = undefined
  this.ctx = undefined
  this.w = undefined
  this.h = undefined
  this.carPosition = 250  

}

Game.prototype._init = function (id) {
  this.canvas = document.getElementById('race')
  this.ctx = this.canvas.getContext("2d")
  this.canvas.width = 500;
  this.canvas.height = 800;
  this.w = this.canvas.width
  this.h = this.canvas.height
  this._update ()
  this._moveLeft()
  this._moveRight()
  this.draw()

}


Game.prototype.draw = function (id) {
  this.ctx.fillStyle = 'green'
  this.ctx.fillRect(0, 0, this.w, this.h)

  this.ctx.fillStyle = 'grey'
  this.ctx.fillRect(10, 0, 480, this.h)

  this.ctx.fillStyle = 'white'
  this.ctx.fillRect(20, 0, 10, this.h)

  this.ctx.fillStyle = 'white'
  this.ctx.fillRect(470, 0, 10, this.h)
  this.drawDashLine()
  this.drawImage()
  this._moveCar()
}

Game.prototype.drawDashLine = function () {
      console.log("entra")
  this.ctx.strokeStyle = "white";
  this.ctx.setLineDash([9, 5]);  
  this.ctx.beginPath();
  this.ctx.moveTo(250, 0);
  this.ctx.lineTo(250, this.h);
  this.ctx.stroke();
}



Game.prototype.drawImage = function () {
  var img = new Image()
  img.src = "/home/dan/Desktop/WEEK2/Day4/lab-canvas-race-car/starter_code/images/car.png";
  console.log(img)
  img.onload = function(){
    this.ctx.drawImage(img, this.carPosition, 100, 100, 150)
}.bind(this)
} 

Game.prototype._moveCar = function(){
  document.onkeyup = function(e){
    switch(e.keyCode) {
        case 39:
            this._moveRight()
            break;
        case 37:
            this._moveLeft()
            break;
    }
}.bind(this)
}


Game.prototype._moveLeft = function(){
  
  this.carPosition -= 20
  this._update()
}

Game.prototype._moveRight = function(){
  this.carPosition+= 20
  this._update()
}

Game.prototype._update = function(){
  this.ctx.clearRect(0, 0, this.w, this.h)  
  this.ctx.fillRect(this.carPosition, this.h /2 -50 , 100, 100)
this.draw()

}


























































// function Game(){
//   this.canvas = undefined;
//   this.ctx = undefined;
//   this.w = undefined;
//   this.h = undefined;
// }
// Game.prototype._init = function(id){
  
//   this.canvas = document.getElementById(id)
//   this.ctx = this.canvas.getContext("2d")
//   this.draw()

// }
// Game.prototype.draw = function(){
//   this.ctx.fillRect(25,25,100,100); 
// }