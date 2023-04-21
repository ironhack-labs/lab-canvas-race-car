const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const player = new Player(212.5, 500, 75, 75, ctx);

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    console.log("starting");

    const game = new Game(ctx, canvas.width, canvas.height, player);
    game.start();
  }
};

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      player.speedX -= 1;
      break;
    case "ArrowRight":
      player.speedX += 1;
      break;
  }
});

//Stop Speed

document.addEventListener("keyup", () => {
  player.speedX = 0;
  player.speedY = 0;
});

// class Player{
//   constructor(x,y,w,h,ctx){
//       this.x = x;
//       this.y = y;
//       this.w = w;
//       this.h = h;
//       this.color = color;
//       this.ctx = ctx;
//       this.speedX = 0;
//       this.speedY = 0;
//   }

//   draw() {
//     const playerImage = new Image();
//     playerImg.src = '../images/car.png';
//     this.img = playerImage;
//   }

// }