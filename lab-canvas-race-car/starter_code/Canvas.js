
// comienza a cargar las imàgenes para que el recurso esté disponible en el onload:
var auto = new Image();
auto.src = "images/car.png";
var carretera = new Image();
carretera.src = "images/background.png"
var frames = 0;
var fps = 60
var vel = 6
var ubic = 0  //<=== Nos va a decir donde se dibuja el carrito -1 , 0, 1
var inicio = 0;
var interval = "";
// Armamos el Onload, con las clases y la informaciòn:

window.onload = function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = "#FF0000";
  var w = canvas.width;
  var h = canvas.height;
  ctx.strokeRect(0,0,w,h);

  
  class fondo {
    constructor (pista){
      this.pista = pista
      this.dibujo = new Image();
      this.dibujo.src ="images/background.png";
      this.width = w;
      this.height = h;
      this.x = 0;
      this.y = 0;
    }
    draw(){
      this.y = this.y + vel;
        if(this.y >= h) this.y = 0;
        else if (frames == 0) this.y =0;
        ctx.drawImage(this.dibujo,this.x,this.y,this.width,this.height);
            // Para que continùe dibujando encima del otro 
        ctx.drawImage(this.dibujo,this.x,this.y - this.height+ 5,this.width,this.height);
    }
    gameOver(){
      var canvas1 = document.getElementById('canvas');
      var ctx1 = canvas.getContext('2d');
      // Detenemos la ejecución del intervalo
      clearInterval(interval);
      // Definimos el tamaño y fuente de nuestro texto
      ctx1.font = "50px Avenir";
      ctx1.clearRect(0,110,canvas.width,100);
      ctx1.fillStyle = "black";
      // Dibujamos el texto en el canvas.
      ctx1.fillText("Game Over pts = " + frames , 75, 190),10000;
  }
  };

  camino = new fondo("Hola");
  camino.draw();

  class carro {
    constructor (auto){
          this.auto = auto
          this.posicion = 0 // Esta posiciòn es muy importante porque será la que cambiaremos entre -1, 0 y +1
          this.width = 158
          this.height = 319
        
          function equis (n)  {
            if (n == -1) {return w/4 - 158/2}
            if (n == 0) {return (w - 158)/2}
            if (n == 1) {return w*3/4 - 158/2}
              }

          this.x =  equis(this.posicion);
          this.y = h - this.height
          this.dibujo = new Image();
          this.dibujo.src ="images/car.png";
    }

    collision(item){
          
        return((ubic == 0 && item.forma != 2) ||
              (ubic == -1 && item.forma != 3) ||
              (ubic == 1 && item.forma != 1) ) &&
              (item.y + item.height >=881 && item.y <= 1200)
  }

    draw(){
      ctx.drawImage(this.dibujo,this.x,this.y,this.width,this.height)
    }
  }

  carrito = new carro("tsuru");
  carrito.draw();

  class obstaculo {
    constructor (forma){
      this.forma = forma
      this.width1 = function()  {
        if (this.forma == 1) {return 765/2} 
        if (this.forma == 2) {return 765/4}
        if (this.forma == 3) {return 765*3/4}
      }
      this.x1 = function(){
        if (this.forma == 1) {return 0} 
        if (this.forma == 2) {return 765 * 3/4}
        if (this.forma == 3) {return 765/2}
      }
      this.width2 = 765/4
      this.x2 = 0

      this.height = 320 /4
      this.y = 0
      
    }
    draw(){
      this.y = this.y + vel;
        if(this.y >= h) this.y = 0;
        else if (frames == 0) this.y =0;
      if (this.forma == 1 || this.forma == 3){ctx.fillRect(this.x1(),this.y,this.width1(),this.height)} 
      if (this.forma == 2){ctx.fillRect(this.x1(),this.y,this.width1(),this.height)}
      if (this.forma == 2){ctx.fillRect(this.x2,this.y,this.width2,this.height)}
    }
   }
obs = new obstaculo (2);
///////////////////////////

var enemies = []

function generateEnemies(){
if (frames % 128 == 0 ){

    let obs = new obstaculo (
      1 + Math.floor(Math.random() * 3)
      );
  
    enemies.push(obs);
}
}


function drawingEnemies(){
    enemies.forEach((obs, index) => {
     if (obs.y >= 1200)  enemies.splice(index,1)
        obs.draw()
        if(carrito.collision(obs)){
          camino.gameOver();
          
      }
        
    })
}
///////////////////////////

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    interval = setInterval(function(){
      //sumamos cada cuadro que dibujamos:
      frames++;
      inicio = 1; // Asì va a saber que el juego comenzò y podremos utilizar los listeners
      //borramos el canvas
      ctx.clearRect(0,0,w,h);
   // dibujamos carretera y carrito
   camino.draw();
   carrito.draw();
   generateEnemies();
  drawingEnemies();
  },1000/fps );
}
};
// 37 y 39 las techas
addEventListener('keydown', function(event){
  if(event.keyCode === 37 && inicio == 1 && ubic == 0){
      ubic = -1
      carrito.x = canvas.width/4 - 158/2 
  }
  if(event.keyCode === 37 && inicio == 1 && ubic == 1){
    ubic = 0
    carrito.x = (canvas.width - 158)/2
}
if(event.keyCode === 39 && inicio == 1 && ubic == 0){
  ubic = 1
  carrito.x = (canvas.width*3/2 - 158)/2
}
if(event.keyCode === 39 && inicio == 1 && ubic == -1){
  ubic = 0
  carrito.x = (canvas.width - 158)/2
}
})