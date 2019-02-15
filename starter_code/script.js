window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

};

function startGame() {
  this.version = "1.0";
  this.name = "Starting Game";
  this.canvasDom = undefined;
  this.ctx = undefined;
  this.w = undefined;
  this.h = undefined;
  this.carX = 220;
  this.carY = 600;
}

// metodo que inicia el juego
startGame.prototype.init = function(id) {
  this.canvasDom = document.getElementById(id);
  this.ctx = this.canvasDom.getContext("2d");
  this.w = 500
  this.h = 700
  this.canvasDom.width = this.w 
  this.canvasDom.height = this.h  
  this._setListeners();
}

// pintar el fondo
startGame.prototype.drawBackgroundColor = function() {
  
  console.log(this.canvasDom.width)
  this.ctx.fillStyle = "#C310B7"
  this.ctx.fillRect(0,0, this.w, this.h)
  
  this.ctx.fillStyle = "#4D1849"
  this.ctx.fillRect(40,0,400,700)

  this.ctx.fillStyle = "white"
  this.ctx.fillRect(50,0,20,700)
  this.ctx.fillRect(410,0,20,700)
}

// pintar la linea punteada
startGame.prototype.drawDashedLine = function () {
  this.ctx.lineWidth = 10
  this.ctx.beginPath()
  this.ctx.strokeStyle = 'white'
  this.ctx.setLineDash([50,15])
  this.ctx.moveTo(this.w/2 , 0)
  this.ctx.lineTo(this.w/2, this.h)
  this.ctx.stroke()
  this.ctx.lineWidth = 100
}

// pintamos el coche con los valores que correspondan (VER THIS.CARX)
startGame.prototype.drawCar = function() {
  this.ctx.drawImage(this.img, this.carX, this.carY,60,90)
}

// cargar la imagen del coche y mostrarla
startGame.prototype.showImage = function() {

  this.img = new Image()
  this.img.src = 'images/car.png'
  
   this.img.onload = function () {
   
  
  this.ctx.drawImage(this.img, this.carX, this.carY,60,90)
  }.bind(this)
  
  }

  // establecer listeners para que podamos controlar cuando 
  // el usuario pulsa sobre algun boton
  startGame.prototype._setListeners = function(){
   
    document.onkeydown = function(e) {
      switch (e.keyCode) { // comparamos el keycode del boton pulsado
        case 37: // si la pulsado left
        // actualizamos la posicion del coche
          this._moveLeft();
          // actualizamos (pintamos) todo el canvas para que
          // podamos ver los cambios
          this.updateCanvas();
          break;
        case 39: // si la pulsado right
          this._moveRight();
          this.updateCanvas();
          break;
      }
    }.bind(this)
   
// actualizamos la posicion del coche
    startGame.prototype._moveLeft = function(){
      if(this.carX > 10) //no deja ultrapassar 
      this.carX -= 10;
      console.log('posicion del coche', this.carX)
      
  }
  
  startGame.prototype._moveRight = function(){
    if(this.carX < 400)
      this.carX += 10;
      console.log('posicion del coche', this.carX)
      
  }


  // actualizamos el canvas para poder ver el movimiento:
  // (es decir, el coche con los nuevos valores)
  // para ello primero borramos todo el canvas (clearRect)
  // y luego lo volvemos a pintar todo en el orden correspondiente:
  // fondo, linea punteada y coche
  startGame.prototype.updateCanvas = function() {
    this.ctx.clearRect(0,0,this.w, this.y);
    this.drawBackgroundColor();
    this.drawDashedLine();
    this.drawCar()
  }
}
function Obstacle (){
  this.posX = Math.random()*
  this.posY = -
  this.width = Math.random()*
  this.height =  +

DrawApp.prototype.drawObstacles = function(){
  var indexes = []
  this.obstacles.forEach(function(){
      this.ctx.fillStyle = "black"
      this.ctx.fillRect(elm.posX, elm.posY,elm.width,elm.height)
  }.bind(this))

}


// TODO SUPERSOFIA - (Sonia es la mejor TA)
// 0. Leer la ultima learning de hoy, el ejemplo y tratar de enterlo todo lo maximo posible
// 1. Crear un bloque
// 2. Hacer que "caiga" (que se mueva hacia abajo) (setInterval ;))
// 3. Comprobar colision con el coche con el algoritmo de superGabi (EN LA LEARNING TAMBIEN ESTA!)
// 4. mover la linea
// 5. generar mas obstaculos
//