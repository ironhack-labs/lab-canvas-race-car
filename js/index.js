//Linkar canvas

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//Clase coche

class Car {
  constructor() {
    this.carWidth = canvas.width / 10;
    this.carHeight = canvas.height / 8;
    this.carPositionX = canvas.width / 2 - this.carWidth / 2;
    this.carPositionY = canvas.height - 130;
    this.lives = 99;
    //Pintar coche --> 1.cargar la imagen; 2.pintar la imagen
    let img = new Image();
    img.addEventListener("load", () => {
      this.img = img;
      setTimeout(() => this.draw(), 500);
    });
    img.src = "/images/car.png";
  }

  moveLeft() {
    this.carPositionX -= 10;
  }
  moveRight() {
    this.carPositionX += 10;
  }
  draw() {
    ctx.drawImage(
      this.img,
      this.carPositionX,
      this.carPositionY,
      this.carWidth,
      this.carHeight
    );
  }
}

class Obstacle {
  constructor() {
    this.obtacleWidth = Math.random() * canvas.width * 0.25 + 20;
    this.obtacleHeight = Math.random() * 50 + 15;
    // si al canvas
    this.obstaclePositionX = Math.random() * canvas.width - this.obtacleWidth;
    this.obstaclePositionY = 0;
    //Pintar coche --> 1.cargar la imagen; 2.pintar la imagen
    let img = new Image();
    img.addEventListener("load", () => {
      this.img = img;
      setTimeout(() => this.draw(), 400);
    });
    img.src = "/images/tetris.png";
  }

  moveDown() {
    this.obstaclePositionY += 10;
  }

  draw() {
    setInterval(() => {
      ctx.drawImage(
        this.img,
        this.obstaclePositionX,
        this.obstaclePositionY,
        this.obtacleWidth,
        this.obtacleHeight
      );
    }, 2);
  }
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    //Pintar carretera --> 1.cargar la imagen; 2.pintar la imagen
    const road = new Image();
    road.src = "/images/road.png";
    setTimeout(
      () => ctx.drawImage(road, 0, 0, canvas.width, canvas.height),
      100
    );

    //Crear coche
    const car = new Car();

    // crear obstaculo
    const obstacle = new Obstacle();

    //crear movimiento del coche

    document.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowLeft":
          car.moveLeft();
          break;
        case "ArrowRight":
          car.moveRight();
          break;
      }
      updateCanvas();
    });

    // crear obstaculos y movimiento obstaculos
    setInterval(() => {
      const obstacle = new Obstacle();

      setInterval(() => {
        obstacle.moveDown();
        updateCanvas();
      }, 200);
    }, 4000);

    /*
    const numeroObastaculos = [(obstacle = new Obstacle())];

    for (let i = 0; i < numeroObastaculos.length; i++) {
      const obstacle = new Obstacle();
      numeroObastaculos.push(numeroObastaculos[i]);
    }
*/
    /*
    let crearObstaculos = setInterval(() => {
      const obstacle = new Obstacle();
    }, 3000);

    setInterval(() => {
      obstacle.moveDown();
      updateCanvas();
    }, 200);

    */

    //Que el coche se mueva a los lados -->
    function updateCanvas() {
      //Borrar el canvas actual
      clearCanvas();
      //Volver a Dibujar con la nueva posicion
      ctx.drawImage(road, 0, 0, canvas.width, canvas.height);
      //Hacer que se mueva
      car.draw();

      obstacle.draw();
    }

    // crear obstaculos loop

    //setTimeout ( () => car.draw()
    //,500);

    //Que el coche se mueva a los lados -->
    /*     function moveCar (direction){
      //Actualizamos valor del dibujo
      carPositionX = carPositionX + direction;
      //Borrar el canvas actual
      clearCanvas ();
      //Volver a Dibujar con la nueva posicion
      drawCanvas ();
      //Hacer que se mueva
      ctx.requestAnimationFrame(moveCar());
    } */
  }
};
