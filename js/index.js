console.log("JS conectado");

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
carImage = new Image();
carImage.src = "./images/car.png";
// const carImg = (carImg.src = "./images/car.png");

// CLASSE DO CARRO

class CarObject {
  constructor(img, x, y, width, heigth) {
    this.image = img;
    this.x = x; //definir minimo e máximo
    this.y = y; //definir minimo e máximo
    this.width = width;
    this.heigth = heigth;
    this.speedX = 0;
    this.speedY = 0;
  }

  // FUNÇÃO QUE DESENHA O CARRO NO CANVAS
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.heigth);
  }

  // FUNÇÃO QUE MOVE O CARRO
  newPos() {
    this.x += this.speedX;
  }

  // função que limpa

  clear() {
    ctx.clearRect(car.x, car.y, car.width, car.heigth);
  }
}

// FIM DAS DECLARAÇÕES DE CLASSE

// Criação do carro
const car = new CarObject(carImage, 223, 500, 50, 100);
console.log(car);
// car.move();
// console.log(car.move);

// função start para iniciar o canvas quando clica no botão
function startGame() {
  const roadImg = new Image();
  roadImg.src = "./images/road.png";

  roadImg.addEventListener(
    "load",
    function () {
      // execute drawImage statements here
      ctx.drawImage(roadImg, 0, 0, 500, 700); // desenha a imagem
      car.draw(); // desenha o carro (aqui ele funciona, mas se eu chamar fora, não funciona)
      updateGameArea();
      document.addEventListener("keydown", (e) => {
        const key = e.code;
        if (key === "ArrowLeft") {
          car.speedX -= 1;
          car.newPos();
          ctx.clearRect(0, 0, 500, 700);
          ctx.drawImage(roadImg, 0, 0, 500, 700);
          car.draw();

          console.log("esquerda");
          console.log(car.x);
        }
        if (key === "ArrowRight") {
          car.speedX += 1;
          car.newPos();
          ctx.clearRect(0, 0, 500, 700);
          ctx.drawImage(roadImg, 0, 0, 500, 700);
          car.draw();
        }
      });

      document.addEventListener("keyup", () => {
        car.speedX = 0;
        car.speedY = 0;
      });
    },
    false
  );
}

function updateGameArea() {
  // myGameArea.clear();
  car.newPos();
  car.draw();
  // updateObstacles();
}
