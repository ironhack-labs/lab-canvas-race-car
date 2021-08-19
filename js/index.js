//Linkar canvas

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Clase Juego

class Game {

  constructor() {
    this.time = 0;
    this.score = 0;
    this.level = 0;
    this.lives = 10;
  }

  update (){

  }


}

//Clase coche

class Car {

  constructor(){
    this.carWidth = canvas.width/10;
    this.carHeight = canvas.height/8;
    this.carPositionX = (canvas.width/2) - (this.carWidth/2);
    this.carPositionY = canvas.height-130;
    //Pintar coche --> 1.cargar la imagen; 2.pintar la imagen
    let img = new Image();
    img.addEventListener('load', () => {
    this.img = img;
    setTimeout ( () => this.draw()
    ,500);})
    img.src = "/images/car2.png";
  }

  moveLeft() {
    this.carPositionX -= 15;
  }
  moveRight() {
    this.carPositionX += 15;
  }
  draw() {
    ctx.drawImage(this.img, this.carPositionX, this.carPositionY, this.carWidth, this.carHeight);
  }

}

//Clase obstaculos

class Obstacle {

  constructor(){
    this.obstacleWidth = (Math.random() * (canvas.width * (1/3))); 
    this.obstacleHeight = ((Math.random() * (50)) +20);
    //si restas el ancho del objeto podremos hacer que el objeto nunca se salga de la pantalla hadouken!
    this.obstaclePositionX = 85 + (Math.random() * (330-this.obstacleWidth));
    this.obstaclePositionY = 0;
    //Pintar obstaculo --> 1.cargar la imagen; 2.pintar la imagen
    let img = new Image();
    img.addEventListener('load', () => {
    this.img = img;
    setTimeout ( () => this.draw()
    ,50);})
    img.src = "/images/pedrolo.png";
  }

  moveDown() {
    this.obstaclePositionY += 10;
  }

  draw() {
    ctx.drawImage(this.img, this.obstaclePositionX, this.obstaclePositionY, this.obstacleWidth, this.obstacleHeight);
  }

}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

    let newGame = new Game;

    //Inicializar carretera --> 1.cargar la imagen; 2.pintar la imagen
    const road = new Image();
    road.src = "/images/road2.png";
    setTimeout ( () => ctx.drawImage(road,0,0,canvas.width,canvas.height)
    ,50);

    //Inicializar
    let time = 0;
    let level = 1 + Math.round(10);
    
    //funcion para limpiar pantalla
    function clearCanvas() {
      ctx.clearRect (0,0,canvas.width,canvas.height);
    }    

    //Funcion que dibuja la pantalla
    function updateCanvas () {
      //Borrar el canvas actual
      clearCanvas ();
      //Volver a Dibujar con la nueva posicion
      ctx.drawImage(road,0,0,canvas.width,canvas.height);
      car.draw ();
      time += 1;
      updateObstacles();
      }

    //Inicializar el coche
    let car = new Car;

    //Controlamos el movimiento
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 37:
          car.moveLeft();
          break;
        case 39:
          car.moveRight();
          break;
      }
    });  

    //Inicializar obstaculos
    const myObstacles = [];

    function updateObstacles() {
      for (let i=0; i<myObstacles.length;i++){
        myObstacles[i].moveDown();
        myObstacles[i].draw();
      } 
      if (time % 24 === 0) {
        myObstacles.push(new Obstacle ());
        myObstacles.push(new Obstacle ());
      }
    }
    
    setInterval (() => {
      updateCanvas()}, 100);
  }
}