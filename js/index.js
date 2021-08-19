const startCanva = document.getElementById("canvas");
const ctx = startCanva.getContext("2d");

//clase coche

class car {
  constructor() {
    this.carPositionX = canvas.width / 2 - carWidth / 2;
    this.carPositionY = canvas.height - 130;
  }
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 700 and 450 are canvas width and height
  }

  function drawCanvas() {
    ctx.drawImage(road, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(car, carPositionX, carPositionY, carWidth, carHeigth);
  }

  function startGame() {
    // pintar carretera --> cargar imagen --> dibujar imagen

    const road = new Image();
    road.src = "/images/road.png";

    setTimeout(() => {
      ctx.drawImage(road, 0, 0, canvas.width, canvas.height);
    }, 500);

    // pintar coche --> cargar imagen --> dibujar imagen

    const car = new Image();
    car.src = "/images/car.png";

    let carWidth = canvas.width / 10;
    let carHeigth = canvas.height / 8;
    //let carPositionX = canvas.width / 2 - carWidth / 2;
    //let carPositionY = canvas.height - 130;

    setTimeout(() => {
      ctx.drawImage(car, carPositionX, carPositionY, carWidth, carHeigth);
    }, 500);

    //  Que el coche se mueva a los lados --> 1 borrar canvas, 2 redibujar con la nueva posicion

    function moveCar(direction) {
      //actualizamos valor del dibujo
      carPositionX = carPositionX + direction;

      // borrar canvas actual
      clearCanvas();
      // redibujar todo
      drawCanvas();
      // Que se mueva constantemente
      ctx.requestAnimationFrame(moveCar());
    }
  }
};
