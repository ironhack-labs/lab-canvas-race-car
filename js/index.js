/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

};

function drawBackground() {
  const backgroundImage = new Image();
  backgroundImage.src = "../images/road.png";
  ctx.drawImage(backgroundImage, 0, 0, 500, 700);
}

game.startGame();

class Car {
  constructor() {
    //Starting position of the character
    this.x = 222;
    this.y = 600;

  }
  draw() {
    const img = new Image();

    img.src = '../images/car.png';
    ctx.drawImage(img, 222, 600, 50, 60);
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.h;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.w;
  }

  crashWith(obstacle) {
    return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() || this.left() > obstacle.right()
    );
  }
}


let player = new Car();
let game = new Game(ctx, 500, 700, player);

//start the game
game.start();

//keybindings adicionar os comandos pelo teclado.

document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowUp':
      player.speedY -= 1;
      break;
    case 'ArrowDown':
      player.speedY += 1;
      break;
    case 'ArrowRight':
      player.speedX += 1;
      break;
    case 'ArrowLeft':
      player.speedX -= 1;
      break;

  }
});

document.addEventListener('keyup', (e) => {
  player.speedX = 0;
  player.speedY = 0;
});
