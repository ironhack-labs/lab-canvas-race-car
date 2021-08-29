const raceCarApp = {
  //2.Declarando atributos como indefinido para visualizar la informacion de raceCarApp
  ctx: undefined,
  dimensionCanvas: { w: undefined, h: undefined },
  roadImage: undefined,
  newCar: undefined,
  framesCounter: 0,
  obstaclesArray: [],
  speed: 4,
  score: 0,

  //2. Se esta llamando esta constante. setContext podria llamarse inicializame el canvas
  init(elementCanvas) {
    this.setContext(elementCanvas);
    //4.
    this.setDimensions(elementCanvas);
    //5. Carga imagen y ponemos la variable vacia
    this.roadImage = new Image();
    //6. Le indicamos que imagen es en la propiedad src
    this.roadImage.src = "/images/road.png";
    //7. Creamos el coche y llamamos el constructor
    this.createNewCar();
    //10. Ordenes del teclado para mover el coche
    this.setListeners();

    this.refreshScreen();

    //El orden en el que estan puestas cuenta, asi que el orden en el que esten las funciones
    // mas abajo no es importante. EL FLUJO (orden) SE MARCA AQUI
  },

  //3. Este contexto es el elemento que te he pasado y inyectale el 2d y asignalo a ctx. ctx= canvas funcionando en el parametro, potencia del canvas donde el elemento html que le hemos pasado. sitio donde va a funcionar
  setContext(elementCanvas) {
    this.ctx = elementCanvas.getContext("2d");
  },
  //4. Nos guardamos variables de la dimension altura y anchura que vamos a utilizar. Simplemente para tenerlo accesible
  // y vamos a coger el elemento canvas y dimensionar (entrando por DOM setAttribute)
  setDimensions(elementCanvas) {
    this.dimensionCanvas.w = 500;
    this.dimensionCanvas.h = 700;
    elementCanvas.setAttribute("width", this.dimensionCanvas.w);
    elementCanvas.setAttribute("height", this.dimensionCanvas.h);
  },

  //11. Dibuja todo, imagen de fondo .DRAW ALL()
  refreshScreen() {
    this.gameOverScreen();
    this.checkCollision();
    this.clearCanvas();
    this.drawAll();
    this.newCar.move();
    this.framesCounter++;
    if (this.framesCounter % 50 === 0) {
      this.score++;
    }
    if (this.framesCounter % 100 === 0) {
      this.createObstacle();
    }
    requestAnimationFrame(() => this.refreshScreen());
  },
  // 7. en el objeto RaceCarAPp creamos una nueva variable create new car. le asignamos el ctx del canvas, altura anchura, y las dimensiones del canvas
  createNewCar() {
    this.newCar = new Car(this.ctx, 70, 100, this.dimensionCanvas);
  },

  //11. Dibuja imagen y coche con las posiciones actualizadas, si la X ha cambiado podemos
  // renderizar la nueva posicion
  drawAll() {
    this.ctx.drawImage(
      this.roadImage,
      0,
      0,
      this.dimensionCanvas.w,
      this.dimensionCanvas.h
    );
    this.newCar.draw();
    this.obstaclesArray.forEach((obstacle) => obstacle.draw());
    this.showScores();
  },

  createObstacle() {
    const randomWidth = Math.random() * (300 - 200) + 200;
    const randomPositionX =
      Math.random() * (this.dimensionCanvas.w - 70 - randomWidth) + 35;

    const newObstacle = new Obstacle(
      this.ctx,
      randomWidth,
      -50,
      this.dimensionCanvas,
      randomPositionX,
      this.speed
    );
    this.obstaclesArray.push(newObstacle);
  },

  //10. Si todo lo que hemos hecho en el momento de carga es correcto,
  // al haber un keydown habra un responsive
  setListeners() {
    window.addEventListener("keydown", (e) => {
      //if ecode = arrowleft then this.., else null
      e.code === "ArrowLeft" ? (this.newCar.moveLeft = true) : null;
      e.code === "ArrowRight" ? (this.newCar.moveRight = true) : null;
    });
    window.addEventListener("keyup", (e) => {
      //if ecode = arrowleft then this.., else null
      e.code === "ArrowLeft" ? (this.newCar.moveLeft = false) : null;
      e.code === "ArrowRight" ? (this.newCar.moveRight = false) : null;
    });
  },

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.dimensionCanvas.w, this.dimensionCanvas.h);
  },

  checkCollision() {
    if (this.obstaclesArray.length) {
      this.obstaclesArray.forEach((elem) => {
        elem.draw();

        const carToLeft =
          this.newCar.carPosition.x <
          elem.obstaclePosition.x + elem.obstacleSize.w - 20;
        const carToRight =
          this.newCar.carPosition.x + this.newCar.carWidth - 10 >
          elem.obstaclePosition.x;
        const carAtBottom =
          this.newCar.carPosition.y <
          elem.obstaclePosition.y + elem.obstacleSize.h - 20;
        const carAtTop =
          this.newCar.carHeight - 10 + this.newCar.carPosition.y >
          elem.obstaclePosition.y;

        if (carToRight && carToLeft && carAtBottom && carAtTop) {
          this.gameOverScreen();
          cancelAnimationFrame();
        }
      });
    }
  },

  showScores() {
    this.ctx.font = "30px comic-sans";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("Score:   " + this.score, 300, 70);
  },

  gameOverScreen() {
    this.clearCanvas(), (this.ctx.fillStyle = "black");
    this.ctx.fillRect(0, 0, this.dimensionCanvas.w, this.dimensionCanvas.h);
    this.ctx.font = "50px comic-sans";
    this.ctx.fillStyle = "red";
    this.ctx.fillText(
      "GAME OVER",
      this.dimensionCanvas.w / 2 - 150,
      this.dimensionCanvas.h / 2 - 100
    );
    this.ctx.fillStyle = "white";
    this.ctx.font = "30px comic-sans";
    this.ctx.fillText(
      "Final score:   " + this.score,
      this.dimensionCanvas.w / 2 - 90,
      this.dimensionCanvas.h / 2 - 40
    );
    this.ctx.fillStyle = "white";
    this.ctx.font = "20px comic-sans";
    this.ctx.fillText(
      "Try again...",
      this.dimensionCanvas.w / 2 - 50,
      this.dimensionCanvas.h / 2 + 100
    );
  },
};


