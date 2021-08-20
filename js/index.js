
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
    if (this.carPositionX > 85){
    this.carPositionX -= 15;}
  }
  moveRight() {
    if (this.carPositionX < canvas.width - 130){
    this.carPositionX += 15;}
  }
  moveUp() {
    if (this.carPositionY > 20){
    this.carPositionY -= 15;}
  }
  moveDown() {
    if (this.carPositionY < canvas.height - 135){
    this.carPositionY += 15;}
  }
  draw() {
    ctx.drawImage(this.img, this.carPositionX, this.carPositionY, this.carWidth, this.carHeight);
  }
  left() {
    return this.carPositionX;
  }
  right() {
    return this.carPositionX + this.carWidth;
  }
  top() {
    return this.carPositionY;
  }
  bottom() {
    return this.carPositionY + this.carHeight;
  }
  crashWith(obstacle) {
    return !(this.bottom() < obstacle.top() 
    || this.top() > obstacle.bottom() 
    || this.right() < obstacle.left() 
    || this.left() > obstacle.right());
  }
}

//Clase obstaculos

class Obstacle {

  constructor(){
    this.obstacleWidth = (Math.random() * (canvas.width * (1/5))); 
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
  left() {
    return this.obstaclePositionX;
  }
  right() {
    return this.obstaclePositionX + this.obstacleWidth;
  }
  top() {
    return this.obstaclePositionY;
  }
  bottom() {
    return this.obstaclePositionY + this.obstacleHeight;
  }
  crashWith(car) {
    return !(this.bottom() < car.top() 
    || this.top() > car.bottom() 
    || this.right() < car.left() 
    || this.left() > car.right());
  }
}

//INICIO DEL JUEGO

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

    //Linkar canvas
    ctx = canvas.getContext("2d");  

    //Inicializar carretera --> 1.cargar la imagen; 2.pintar la imagen
    const road = new Image();
    road.src = "/images/road2.png";
    
    setTimeout ( () => ctx.drawImage(road,0,0,canvas.width,canvas.height)
    ,50);

    //Inicializar
    const myGameArea = {
      canvas : document.getElementById("canvas"),
      time: 0,
      level: 1,
      obstacles: 0,
      //función para limpiar pantalla 
      clear: function () {
        ctx.clearRect (0,0,this.canvas.width,this.canvas.height);
      },
      start: function () {
        this.interval = setInterval(updateCanvas, 100);
      },
      stopGame: function () {
        clearInterval(this.interval);
      },
      score: function () {
        const points = this.obstacles;
        ctx.font = '18px serif';
        ctx.fillStyle = 'yellow';
        ctx.fillText(`Score: ${points}`, 350, 50);
      },
      atLevel: function () {
        const newLevel = this.level;
        ctx.font = '18px serif';
        ctx.fillStyle = 'orange';
        ctx.fillText(`Level: ${newLevel}`, 350, 75);
      }
    }
    
    //Función que dibuja la pantalla
    function updateCanvas () {
      //Borrar el canvas actual
      myGameArea.clear ();
      //Volver a Dibujar con la nueva posicion
      ctx.drawImage(road,0,0,canvas.width,canvas.height);
      car.draw ();
      updateObstacles();
      //Mirar si se ha acabado el juego
      checkGameOver();
      myGameArea.score();
      myGameArea.atLevel();
      }

    //Función que actualiza obstáculos
    function updateObstacles() {
      myGameArea.time ++;
      for (let i=0; i<myObstacles.length;i++){
        myObstacles[i].moveDown();
        myObstacles[i].draw();
      } 
      if (myGameArea.time % (36 / myGameArea.level) === 0) {
        myObstacles.push(new Obstacle ());
        myGameArea.obstacles++;
        myObstacles.push(new Obstacle ());
      } 
    }

    //Funcion acaba el juego
    function checkGameOver() {
      const crashed = myObstacles.some(function (obstacle) {
        return car.crashWith(obstacle);
      });
      if (crashed) {
          myGameArea.stopGame();
          ctx.fillStyle = 'black';
          fillRect(0, 0, canvas.width, canvas.height); 
          ctx.font = '96px serif';
          ctx.fillStyle = 'yellow';
          ctx.fillText(`GAME OVER!: Score: ${myGameArea.score}`, 200, 350);          
      }
    }
    

    //Inicializar el coche
    let car = new Car;

    //Controlamos el movimiento del coche
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 38: // up arrow
        case 87: // "W"
          car.moveUp();;
        break;
        case 40: // down arrow
        case 83: //"S"
          car.moveDown();
        break;
        case 37: 
        case 65://"A"
          car.moveLeft();
          break;
        case 39:
        case 68://"D"
          car.moveRight();
          break;
      }
    });  

    //Inicializar obstaculos
    const myObstacles = [];

    //Arranca el mundo!
    myGameArea.start();

  }
}