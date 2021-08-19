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

    //Que el coche se mueva a los lados -->
    function updateCanvas() {
      //Borrar el canvas actual
      clearCanvas();
      //Volver a Dibujar con la nueva posicion
      ctx.drawImage(road, 0, 0, canvas.width, canvas.height);
      //Hacer que se mueva
      car.draw();
    }

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
