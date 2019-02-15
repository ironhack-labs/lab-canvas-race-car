window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    
    
  };
  
  
  var raceCar = new RaceApp()
  raceCar.init('gameCar')
  console.log(raceCar.w)
  console.log(raceCar.posXcar)
      
      

  function startGame() {
    
    

  }
};

function RaceApp () {
  this.version = "1.0"
  this.name = "Race Car"
  this.canvasDOM = undefined
  this.ctx = undefined
  this.w = undefined
  this.h = undefined
  this.dir = 0
  this.posXcar = this.w / 2 - 38
 }

RaceApp.prototype.init = function(id) {

  this.canvasDOM = document.getElementById(id);
  this.ctx = this.canvasDOM.getContext("2d");
  this._setDimensions()
  // this._setHandlers()
  this.road()
  this.discontinuedLine()
  this.car()

}

RaceApp.prototype._setDimensions = function () {
  
  
  this.w = 500
  this.h = 600

  this.canvasDOM.setAttribute('width', this.w)
  this.canvasDOM.setAttribute('height', this.h)

}

//RaceApp.prototype._setHandlers = function () {

//   window.onresize = function(){
//     this._setDimensions()
//   }.bind(this)

// }

RaceApp.prototype.road = function () {

  this.ctx.fillStyle = 'green'
  this.ctx.fillRect(0, 0, this.w, this.h)
  this.ctx.fillStyle = 'grey'
  this.ctx.fillRect(50, 0, 400, this.h)
  this.ctx.fillStyle = 'white'
  this.ctx.fillRect(60, 0, 10, this.h)
  this.ctx.fillStyle = 'white'
  this.ctx.fillRect(430, 0, 10, this.h)
  
  
}

RaceApp.prototype.discontinuedLine = function () {
    
    this.ctx.beginPath()
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'
    this.ctx.setLineDash([57, 50])
    this.ctx.moveTo(this.w/2-5, this.h*-3)
    this.ctx.lineTo(this.w/2-5, this.h)
    this.ctx.stroke()
    

}  

RaceApp.prototype.car = function () {

  var car = new Image()
  car.src = 'images/car.png'

  car.onload = function() {

    this.ctx.drawImage(car, this.posXcar, this.h-160, 76, 160)

  }.bind(this)

}

RaceApp.prototype._moveRight = function() {

this.dir = 1

}

RaceApp.prototype._moveLeft = function() {
this.dir = -1
}

RaceApp.prototype.keyBinding = function() {

}