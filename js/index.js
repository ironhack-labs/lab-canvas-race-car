//PORQUE ESTE CODIGO DE INICIO NAO CARREGA A IMAGEM DA PISTA E DO CARRO?\

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// window.onload = () => {
//   document.getElementById("start-button").onclick = () => {
//     startGame();
//   };
// };

// function startGame() {
//   const roadImg = new Image();
//   roadImg.src = "./images/road.png";

//   const carImg = new Image();
//   carImg.src = "./images/car.png";

//   img.onload = () => {
//     ctx.drawImage(roadImg, 0, 0, ctx.canvas.width, ctx.canvas.height);
//     ctx.drawImage(carImg, 225, 620, 50, 80);
//   };
// }

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Start Game:

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

function startGame() {
  let img = new Image();
  let car = new Image();
  car.src = `./images/car.png`;
  img.src = `./images/road.png`;
  img.onload = () => {
    ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(car, 225, 620, 50, 80);
  };
}

class Player {
  constructor(car) {
    this.x = 225;
    this.y = 620;
    this.car = car;
  }

  moveLeft() {
    this.x -= 5;
  }
  moveRight() {
    this.x += 5;
  }
}

const player = new Player();

document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowLeft":
      return player.moveLeft();
    case "ArrowRight":
      return player.moveRight();
  }
});

// TENTATIVA OPÇAO 2: FAIL

// class Component {
//   constructor(x, y, width, height) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     this.speedX = 0;
//     this.speedY = 0;
//   }

//   newPosition() {
//     this.x += this.speedX;
//     this.y += this.speedY;
//   }

//   left() {
//     return this.x - this.width;
//   }
//   right() {
//     return this.x + this.width;
//   }
// }

// class Game {
//   constructor(player) {
//     this.player = player;
//     this.obstacles = [];
//     this.frames = 0;
//     this.score = 0;
//   }
// }

// document.addEventListener("keydown", (event) => {
//   switch (event.code) {
//     case "ArrowLeft":
//       return (game.player.speedX -= 2);
//     case "ArrowRight":
//       return (game.player.speedY += 2);
//   }
// });

// document.addEventListener("keyup", () => {
//   game.player.speedX = 0;
//   game.player.speedY = 0;
// });
