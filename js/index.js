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
let frames = 0;
const myObstacles = [];

function updateObstacles() {
  frames += 1;
  if (frames % 120 === 0) {
    let x = canvas.width;
    let minHeight = 20;
    let maxHeight = 200;
    let height = Math.floor(
      Math.random() * (maxHeight - minHeight + 1) + minHeight
    );
    let minGap = 50;
    let maxGap = 200;
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new Component(10, height, "green", x, 0));
    myObstacles.push(
      new Component(10, x - height - gap, "green", x, height + gap)
    );
  }
}

// CLASSE DO CARRO

class CarObject {
  constructor(img, x, y, width, heigth) {
    this.image = img;
    this.x = x;
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

class Component {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speedX = 0;
    this.speedY = 0;
  }
  draw() {
    const ctx = myGameArea.ctx;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}
// class Obstacle {
//   constuctor ()
// }

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

      document.addEventListener("keydown", (e) => {
        const key = e.code;

        if (key === "ArrowLeft") {
          car.speedX -= 1.7;
          if (car.x > 70) {
            car.newPos();
            ctx.clearRect(0, 0, 500, 700);
            ctx.drawImage(roadImg, 0, 0, 500, 700);
            car.draw();

            console.log("esquerda");
            console.log(car.x);
          }
        }
        if (key === "ArrowRight") {
          car.speedX += 1.7;
          if (car.x < 390) {
            car.newPos();
            ctx.clearRect(0, 0, 500, 700);
            ctx.drawImage(roadImg, 0, 0, 500, 700);
            car.draw();
          }
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
