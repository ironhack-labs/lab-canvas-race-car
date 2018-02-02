var car;
var game;
var obstacles = [];
var frames = 0;
var canvas = document.getElementById("canvas");
canvas.width = 500;
canvas.height = 800;
var ctx = canvas.getContext("2d");

function Car() {
    this.imageCar = "images/car.png";
    this.x = 220;
    this.y = 650;
    
    this.moveLeft = function(){
        if(this.x> 70){
        this.x -=50;
        }
      }
      
    this.moveRight = function(){
        if (this.x<340){

        this.x +=50;
        }
    }

    this.drawCar = function () {
        var imgCar = new Image();
        var x = this.x;
        var y = this.y;
        imgCar.src = this.imageCar;
            ctx.drawImage(imgCar, x, y, 60, 100);
        
    }
}

Car.prototype.left = function(){
    return this.x;
}
Car.prototype.right = function(){
    return this.x+60;
}
Car.prototype.top = function(){
    return this.y;
}
Car.prototype.bottom = function(){
    return this.y+100;
}
Car.prototype.crash = function(obstacle){
    return !((this.bottom() < obstacle.top())    ||
    (this.top()    > obstacle.bottom()) ||
    (this.right()  < obstacle.left())   ||
    (this.left()   > obstacle.right()))
}


function road() {
        ctx.fillStyle = "green";
        ctx.fillRect(0, 10, 500, 800);
        ctx.fillStyle = "grey";
        ctx.fillRect(40, 10, 420, 800);
        ctx.fillStyle = "white";
        ctx.fillRect(60, 10, 20, 800);
        ctx.fillStyle = "white";
        ctx.fillRect(canvas.clientWidth-80, 10, 20, 800);
        ctx.setLineDash([18, 17]);
        ctx.beginPath();
        ctx.moveTo(250,10);
        ctx.lineTo(250, 800);
        ctx.lineWidth = 8;
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath(); 
}

function Obstacle(width, height, x, y){
    this.width = width;
    this.height = height;
    this.x=x;
    this.y=y;
    this.update = function(){
        ctx.fillStyle = "pink";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}

Obstacle.prototype.left = function(){
    return this.x;
}
Obstacle.prototype.right = function(){
    return this.x+this.width;
}
Obstacle.prototype.top = function(){
    return this.y;
}
Obstacle.prototype.bottom = function(){
    return this.y+this.height;
}

function updateGame (){
    console.log("se actualiza")
    ctx.clearRect(0,0,500, 800);
    road();
    car.drawCar();
    frames++;
    if (frames%175===0){
        height= 30;
        minWidth =100;
        maxWidth = 330;
        side = Math.floor(Math.random()*2);
        width= Math.floor(Math.random()*(maxWidth -minWidth+1))+minWidth;
        if (side===0){
        obstacles.push(new Obstacle(width, height, 0 ,0));
        } else {
        obstacles.push(new Obstacle(width, height, 500-width ,0));
        }
    }
    for (var i =0; i<obstacles.length; i++){
        obstacles[i].y ++;
        obstacles[i].update();
    }

    for(var i = 0; i < obstacles.length; i+= 1)
    {
        console.log(car.crash(obstacles[i]));
        if(car.crash(obstacles[i])){
            game.stop();
            return;
        }
    }
}

function Game() {
    this.playGame = function () {
        road();
        car = new Car();
        car.drawCar();
        this.interval = setInterval(updateGame, 20);
      };
    this.stop = function () {
        clearInterval(this.interval)
    }
    
}
    
window.onload = function(){
    document.getElementById("start-button").onclick = function() {
      startGame();
    }
    };
  
  function startGame() {
    game = new Game();
    game.playGame();
}

document.addEventListener("keydown", function(e){
        
    switch(e.keyCode){
      case 37:
        car.moveLeft();
        break;
      case 39:
        car.moveRight();
        break;
           }
  });

// //hacemos un array para guardar los obstaculos
// 
// //frames va a contar
// 

// //esto es la clase obstaculo 
// function Obstacle(){
//   this.y = 0;
//   this.width = Math.floor(Math.random()*300);
//   this.update = function(){
//     //este metodo es el mas importante, vuelve a dibujar el obstaculo
//     ctx.fillStyle = "pink";
//     ctx.fillRect(0, this.y, this.width, 30);
//   }
//   ctx.fillStyle = "pink";
//   ctx.fillRect(0,this.y,this.width,30);
// }

// //esto es lo que en realidad actualiza el juego
// setInterval(updateGame,20)

// //cada que se llama esta funcion pasa lo siguiente:
// // 1.- se borra todo
// // 2.- se suma un fram
// // 3.- checamos si han pasado 100 frames para crear otro obstaculo
// // 4.- actualizamos todos los obstaculos
// function updateGame(){
//   //borramos todo
//   ctx.clearRect(0, 0,400,800);
//   //sumamos uno a los frames
//   frames+=1;
//   // chceamos si han pasado 100 frames
//   if(frames%100===0){
//     // si han pasado, agregamos un nuevo obstaculo al array
//     obstacles.push(new Obstacle());
//   }
//   // recorremos el array de obstaculos y movemos uno por uno en y
//   obstacles.forEach(function(o){
//       o.y +=1;
//       o.update();
//   })
  

// }
