//DEFINIR CANVAS
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

window.onload = function() {
    document.getElementById("start-button").onclick = function() {
        startGame();
    };
}

//VARIABLES GLOBALES
var car;
var game;

function drawCar() {}

//CLASE CAR
function Car() {
    this.imageCar = "images/car.png";
    this.x = 220;
    this.y = 500;

    //FUNCIÓN PARA MOVERSE A LA IZQUIERDA
    this.goLeft = function() {
        this.x -= 1;
    }

    //FUNCIÓN PARA MOVERSE A LA DERECHA
    this.goRight = function() {
        this.x += 1;
    }

    //FUNCIÓN PARA DIBUJAR EL CARRO
    this.drawCar = function() {
        var imgCar = new Image();
        var x = this.x;
        var y = this.y;
        imgCar.src = this.imageCar;
        ctx.drawImage(imgCar, x, y, 60, 60);
    }

}

//FUNCIÓN PARA CREAR FONDO DEL CAMINO
function road() {

    this.drawGreen = function(x, y) {
        ctx.fillStyle = "green";
        ctx.fillRect(x, y, 30, 800);
    }

    drawGreen(0, 0);
    drawGreen(470, 0);

    this.drawGray = function(x, y, z) {
        ctx.fillStyle = "gray";
        ctx.fillRect(x, y, z, 800);
    }

    drawGray(30, 0, 10);
    drawGray(50, 0, 400);
    drawGray(460, 0, 10);
}

//FUNCIÓN PARA CREAR LÍNEAS QUE DAN SENSACIÓN DE MOVIMIENTO
function lineas() {
    function DrawLine(y) {
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.fillRect(240, y, 10, 80);
        ctx.closePath();
    }

    function drawLines(y) {
        var line = new DrawLine(40);
        var line1 = new DrawLine(170);
        var line2 = new DrawLine(300);
        var line3 = new DrawLine(430);
        var line4 = new DrawLine(560);
    }

    //INTENTO DE HACER LINES UN FOR
    /*function drawLines (lines){
    var positionX=0;
    for(lines = 0; lines <= 5; lines ++ ){
      new DrawLine(positionX);
      positionX += 130;
    }
    }*/

    drawLines(0);
}


//CLASE GAME
function Game() {
    this.playGame = function() {
        road();
        car = new Car();
        car.drawCar();
    }
}

//EMPIEZA JUEGO
function startGame() {
    game = new Game();
    game.playGame();
}


//FUNCIÓN DE ADD EVENT LISTENER PARA QUE EL COCHE SE MUEVA CON LAS FLECHAS
addEventListener('keydown', function(e) {
    console.log(e.keyCode);
    if (e.keyCode === 37) {
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        car.goLeft();
        car.draw();
    }
    if (e.keyCode === 39) {
        car.goRight();
        car.draw();
    }
});
s