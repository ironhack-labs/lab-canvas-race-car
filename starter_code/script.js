//canvas height="800px" width="1200px"
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

// //PRUEBAS Y DIMENSIONES DEL CANVAS
// ctx.fillRect(0,0,50,50)
// ctx.fillRect(canvas.width-50,0,50,50)
// ctx.fillRect(canvas.width-50,canvas.height-50,50,50)
// ctx.fillRect(0,canvas.height-50,50,50)

//constants
var interval;
var frames = 0;
var images = {
    bg:"./images/pista.jpg",
    car:"./images/car.png"
}
var obs = [];

//class
class Board{
  constructor(){
      this.x = 0;
      this.y = 0;
      this.width = canvas.width;
      this.height = canvas.height;
      this.image = new Image();
      this.image.src = images.bg;
      this.image.onload = function(){
          this.draw();
      }.bind(this)
  }
  draw(){
    ctx.drawImage(this.image, this.x,this.y,this.width,this.height);


    // VELOCIDAD KARY Y LEO
    this.y+=5
    if (this.y === this.height) this.y = 0;
    ctx.drawImage(this.image, this.x,this.y,this.width,this.height);
    ctx.drawImage(this.image, this.x, this.y-this.height,this.width,this.height)
    ctx.fillStyle = "peru";
ctx.font = '70px Courier New';
ctx.fillText(Math.floor(frames / 60), this.width -100, 50 )

}
gameOver(){
    ctx.font = "65px Courier New";
    ctx.fillText("Game Over", 50,200);
    ctx.font = "24px Courier New";
    ctx.fillText("PRESS 'SPACE' TO RESTART", 55,270);

}

}



class Car{
    constructor(){
        this.width = 50;
        this.height = 80;
        this.x = 50;
        this.y = canvas.height-this.height -20;
        this.image = new Image();
        this.image.src = images.car;
        this.image.onload = function(){
            this.draw();
        }.bind(this)
    }
    draw(){
        ctx.drawImage(this.image, this.x,this.y,this.width,this.height);
}

isTouching(item){
    return  (this.x < item.x + item.width) &&
            (this.x + this.width > item.x) &&
            (this.y < item.y + item.height) &&
            (this.y + this.height > item.y);
  }
}



class Obstacle{
    constructor(x, width){
        this.x = x
        this.y = 0;
        this.width = width;
        this.height = 30;
    }
    draw(){
        this.y+=10;
        ctx.fillStyle="#A01E8E";
        ctx.fillRect(this.x,this.y, this.width,this.height)
    }
}


//instances
var board = new Board();
var car = new Car();


//mainFunctions
function update(){
    frames++;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    board.draw();
    car.draw();
    generate()
    drawObs()

}

function start(){
    if(interval) return;
    interval = setInterval(update, 1000/60);
};

//aux functions

function generate(){
    // OBSTACULOS PRO
    if(!(frames%50===0) ) return;

    // OBSTACULOS KARY Y LEO
    //  if(!(frames%80===0) ) return;

    var width = Math.floor((Math.random() * 200)+60);
    var x = Math.floor(Math.random() * 400);
    var obstaculo = new Obstacle(x,width);
    obs.push(obstaculo);
}

function drawObs(){
    obs.forEach(function(obstaculo){
        obstaculo.draw();
        if(car.isTouching(obstaculo)){
            finish();
        }
    });  
}

    function finish(){
        clearInterval(interval);
        interval = undefined;
        board.gameOver();
    }
    function restart(){
        if(interval) return;
        obs = [];
        frames = 0;
        start();
    }
    

//listeners
addEventListener("keydown", function(e){
    console.log(e.keyCode)
    switch(e.keyCode){
      case 37:
      if(car.x === 50)return;
      car.x-=50;
      break;
      case 39:
      if(car.x === canvas.width - car.width*2)return;
      car.x+=50;
      break;
      case 32:
      restart()
    }
  })
  
var inicio = document.getElementById("start-button")
inicio.addEventListener('click', start())


//INTENTO ANTERIOR
// //canvas
// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');


// var img = new Image();
// img.src = "./images/pista.jpg";
// // var img = new Image();
// // img.src = 'images/pista.jpg';

// ctx.fillRect(0,0,50,50)

// //constantes
// var interval;

// //clases EL FONDO DE LAS COSAS, COMO SE CREAN MUEVEN Y DIBUJAN
// //   draw: function() {

// //     ctx.drawImage(this.img, this.x, 0);
// //     if (this.speed < 0)
// //      {
// //       ctx.drawImage(this.img, this.x + canvas.width, 0);
// //   } else 
// //   {
// //       ctx.drawImage(this.img, this.x - this.img.width, 0);
// //     }
// //   },
// // };

// class Fondo{
//   constructor(){
//     this.x = 0;
//     this.y = 0;
//     this.width = canvas.width;
//     this.height = canvas.height;
//     this.image = new Image();
//     this.image.src = '../images/pista.jpg';
//     this.image.onload = function(){
//       this.draw()
//     }.bind(this)
//   }
//     draw(){
//     ctx.drawImage()
//   }
//   }






// // start calling updateCanvas once the image is loaded
// //img.onload = updateCanvas;

// //instancias LAS PARTES QUE EXISTEN

// var fondo = new Fondo()

// //main functions EL DIBUJAR LAS COSAS... AQUI EXISTE LA MAGIA
// function updateCanvas() {
//   fondo.draw()}
//   // backgroundImage.move();

//   // ctx.clearRect(0, 0, canvas.width, canvas.height);
//   // backgroundImage.draw();

//   // requestAnimationFrame(updateCanvas)}

// //listeners ES LA INTERFACE DEL USUARIO 

// // window.onload = function() {
// //   document.getElementById("start-button").onclick = function() {
// //     startGame();
// //   }
// // }
// console.log(fondo)