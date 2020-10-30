window.onload = () => {
  //Agarramos canvas del dom:
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");
  const arrayObstacles = [];

  const image = new Image();
  image.src = "images/road.png";

  const imageTwo = new Image();
  image.src = "images/road.png";

  const imageCar = new Image();
  imageCar.src = "images/car.png";

  // evento click en start button
  document.getElementById("start-button").onclick = () => {
    startGame();
    printCar();
    setInterval(() => {
        gennerateObstacles();
    }, 2000);
    setInterval(() => {
        updateObjects();
    }, 50);
    gennerateObstacles();
  };
  let x = 220; // derecha+ y izquierda-
  let y = 580; // arriba y abajo
  //dibujamos la carretera:
  function startGame() {
    context.drawImage(image, 0, 0, 500, 700);
  }
  
  //dibujamos el coche:
  function printCar() {
    context.drawImage(imageCar, x, y, 60, 90);
  }
  
  function clearCanvas() {
    startGame();
    printCar();
  }

  function gennerateObstacles(){
    arrayObstacles.push(new Obstacle(canvas))
  }

  function updateObjects(){
    clearCanvas()

    arrayObstacles.forEach(elemennt => {
      elemennt.update()
      elemennt.draw()
      
    });
  }

  // funciones para mover el coche por el canvas:
  function moveLeft() {
    x = x - 15;
  }

  function moveRight() {
    x = x + 15;
  }

  function moveUp() {
    y = y - 15;
  }

  function moveDown() {
    y = y + 15;
  }
  // checkeamos los limites del canvas en cada nuevo movimiento
  function checkLimitCanvas() {
    if (x < 65) {
      x = 65;
    } else if (x > 380) {
      x = 380;
    } else if (y < 0) {
      y = 0;
    } else if (y > 610) {
      y = 610;
    }
  }

  document.addEventListener("keydown", (direction) => {
    switch (direction.key) {
      case "ArrowLeft":
        moveLeft();
        checkLimitCanvas();
        break;

      case "ArrowRight":
        moveRight();
        checkLimitCanvas();
        break;

      case "ArrowUp":
        moveUp();
        checkLimitCanvas();
        break;

      case "ArrowDown":
        moveDown();
        checkLimitCanvas();
        break;

      default:
        break;
    }



    
  });
};
