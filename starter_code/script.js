//Declaración de variables globales
var car;
var game;
var obstacles = [];
var frames = 0;

//Definición de Canvas
var canvas = document.getElementById("canvas");
canvas.width = 500;
canvas.height = 800;
var ctx = canvas.getContext("2d");

//Clase Car
function Car() {
    this.imageCar = "images/car.png";
    this.x = 220;
    this.y = 650;
    
    //Función para moverse a la izq
    this.moveLeft = function(){
        if(this.x> 70){
        this.x -=50;
        }
      }
    
    //Función para moverse a la derecha
    this.moveRight = function(){
        if (this.x<340){
        this.x +=50;
        }
    }

    //Función para dibujar el carro
    this.drawCar = function () {
        var imgCar = new Image();
        var x = this.x;
        var y = this.y;
        imgCar.src = this.imageCar;
            ctx.drawImage(imgCar, x, y, 60, 100); 
    }
}

//Funciones de Car definidas con prototype, para obtener las coordenadas del carro
Car.prototype.left = function(){
    return this.x;
}
Car.prototype.right = function(){
    return this.x + 60;
}
Car.prototype.top = function(){
    return this.y;
}
Car.prototype.bottom = function(){
    return this.y + 100;
}

//Función de Car definida con prototype, para obtener el evento de choque.
//Compara las coordenadas del carro con los obstáculos
Car.prototype.crash = function(obstacle){
    return !((this.bottom() < obstacle.top()) ||
    (this.top() > obstacle.bottom()) ||
    (this.right() < obstacle.left()) ||
    (this.left() > obstacle.right()))
}

//Función que crea el fondo de la carretera
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

//Clase Obstacle 
function Obstacle(width, height, x, y){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    //Función que "pinta" los obstáculos en pantalla
    this.update = function(){
        ctx.fillStyle = "pink";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

//Funciones de Obstacle definidas en prototype que obtienen las coordenadas.
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

//Función que actualiza el tablero para dar sensación de movimiento
function updateGame (){
    //Limpia el context del Canvas
    ctx.clearRect(0, 0, 500, 800);
    //Imprime de nuevo el tablero
    road();
    //Dibuja de nuevo el carro
    car.drawCar();
    //Aumenta el contador frames, que indica el número de veces que se ha actualizado el board
    frames++;
    //Cuando el board se haya actualizado 175 veces, se definen los obstáculos
    if (frames % 185 === 0){
        //El tamaño (alturs del obstáculo)
        height= 30;
        //Max y Min de ancho del obstáculo
        minWidth =100;
        maxWidth = 330;
        //Se define la variable side para que salgan obstáculos de ambos lados de manera aleatoria
        var side = Math.floor(Math.random()*2);
        //El width del obstáculo se calcula de manera aleatoria con el max y mix width
        width = Math.floor(Math.random() * (maxWidth - minWidth+1)) + minWidth;
        //Cuando side sea igual a 0
        if (side === 0){
            //Se agregará al array de obstáculos el obstáculo y este, saldrá a la izquierda del board.
            obstacles.push(new Obstacle(width, height, 0 ,0));
        } else {
            //Se agregará al array de obstáculos el obstáculo y este, saldrá a la derecha del board.
            obstacles.push(new Obstacle(width, height, 500-width ,0));
        }
    }

    //Con este for, los obstáculos se moverán hacia abajo en el eje "y"
    for (var i = 0; i < obstacles.length; i++){
        obstacles[i].y ++;
        obstacles[i].update();
    }

    //Este for, comprueba si el carro chocó con algún obstáculo,
    //y de ser así, para el juego.
    for(var i = 0; i < obstacles.length; i+= 1)
    {
        console.log(car.crash(obstacles[i]));
        if(car.crash(obstacles[i])){
            game.stop();
            return;
        }
    }
}

//Clase Game
function Game() {
    //Función que inicializa todos los elementos necesarios para que empiece el juego
    this.playGame = function () {
        road();
        car = new Car();
        car.drawCar();
        this.interval = setInterval(updateGame, 20);
      };
    //Función que detiene el juego
    this.stop = function () {
        clearInterval(this.interval)
    } 
}
    
//Función que define un objeto Game para poder jugar
function startGame() {
    game = new Game();
    game.playGame();
}

//Esto carga cuando se abre la ventana
window.onload = function(){
    //Cuando se da click al boton de start, se inicia el juego
    document.getElementById("start-button").onclick = function() {
      startGame();
    }
};

//Evento que define cuándo se mueve el car
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
