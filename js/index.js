console.log("JS conectado");

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  // const carImg = (carImg.src = "./images/car.png");

  // CLASSE DO CARRO

  class Car {
    constructor(img, x, y, width, heigth) {
      this.image = new Image();
      this.image.src = "./images/car.png";
      this.x = x;
      this.y = y;
      this.width = width;
      this.heigth = heigth;
    }

    // FUNÇÃO QUE DESENHA O CARRO NO CANVAS
    draw() {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.heigth);
    }

    // FUNÇÃO QUE MOVE O CARRO
    move() {}
  }

  // FIM DAS DECLARAÇÕES DE CLASSE

  function startGame() {
    const roadImg = new Image();
    roadImg.src = "./images/road.png";

    roadImg.addEventListener(
      "load",
      function () {
        // execute drawImage statements here
        ctx.drawImage(roadImg, 0, 0, 500, 700);
        let car = new Car(this.img, 223, 500, 50, 100);
        console.log(car);
        car.draw();
        // car();
      },
      false
    );
  }
};

// function moveCar() {
//   document.getElementById("car-image);
// }
