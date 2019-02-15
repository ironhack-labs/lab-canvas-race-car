window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

  }
};

function CarRaceApp () {
  this.version = "1.0"
	this.name = "Car Race app"
	this.canvasDom = undefined
	this.ctx = undefined
	this.w = undefined
	this.h = undefined
	
}


// INIT
CarRaceApp.prototype.init = function (id) {
  this.canvasDom = document.getElementById(id) 
  this.ctx = this.canvasDom.getContext("2d")
  this.car = new Car(this)
  this._setDimensions()
  // this.drawAll()
}


CarRaceApp.prototype._setDimensions = function () {
  var windowWidth = window.innerWidth / 2 
  var windowHeight = window.innerHeight -50
  this.canvasDom.setAttribute("width", windowWidth)
	this.canvasDom.setAttribute("height", windowHeight)

  this.w = windowWidth
	this.h = windowHeight
}

CarRaceApp.prototype.drawRoad = function (){
  this.ctx.fillStyle = "green"
  this.ctx.fillRect(0, 0, 500, this.h)

  this.ctx.fillStyle = "grey"
  this.ctx.fillRect(30, 0, 440, this.h)

  this.ctx.fillStyle = "white"
  this.ctx.fillRect(40, 0, 10, this.h)

  this.ctx.fillStyle = "white"
  this.ctx.fillRect(450, 0, 10, this.h)
  
  this.ctx.beginPath()
  this.ctx.strokeStyle = "white"
  this.ctx.setLineDash([30, 30])
  this.ctx.lineWidth = 5
  this.ctx.moveTo(this.w / 3.3, 0);
  this.ctx.lineTo(this.w / 3.3, this.h);
  this.ctx.stroke();
}

CarRaceApp.prototype.drawAll = function(){  
  this.drawRoad ()
  this.car.showImage()
}

// // COCHE AQUI

function Car(game) {
  this.game = game
  this.x = 210
  this.y = 450 
  this.w = 70
  this.h = 120
  this.img = new Image()
  this.img.src = "images/car.png"
  
  this._move()

}

Car.prototype.showImage = function(){
  console.log(this.game)
  this.img.onload = function (){                 //la imagen se tiene que cargar asi
    this.game.ctx.drawImage(this.img, this.x, 450, 70, 120) // cómo la incluimos en la pantalla. Le paso la img, posición y ancho y alto. AL SER UNA FUNCION DENTRO DE LA PROTO, TENGO QUE HACER BIND
  }.bind(this)

}



Car.prototype._move = function(){

  document.onkeyup = function(e){
      switch(e.keyCode) {
          case 39:
          if(this.x + this.w + 10 <= 450)
          {this.x +=10}
              break;
          case 37:
          if (this.x - this.w - 10 >= -10)
          {this.x -= 10}
              break;
      }
      this.car.drawAll()
  }.bind(this)
}

// Car.prototype._moveLeft = function(){
//   this.game.posX -= 10
//   // this.game._update()
// }

// Car.prototype._moveRight = function(){
//   this.game.posX += 10
//   // this.game._update()
// }


















