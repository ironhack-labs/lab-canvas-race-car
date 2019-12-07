let requestId;
// helper functions
const helper = {
  drawLine(context, beginX, beginY, closeX, closeY) {
    context.beginPath();
    context.moveTo(beginX, beginY);
    context.lineTo(closeX, closeY);
    context.stroke();
    context.closePath();
  }
};

const gameGlobalBehavior = {
  canvas: document.getElementById('canvas'),
  frames: 0,
  c: document.getElementById('canvas').getContext('2d'),

  setCanvasSize() {
    this.canvas.width = 400;
    this.canvas.height = 500;
  },

  startGame() {
    window.requestAnimationFrame(updateGame);
  },

  // stopGame() {},

  drawBackground() {
    // eslint-disable-next-line prefer-destructuring
    const c = this.c;
    const w = this.canvas.width;
    const h = this.canvas.height;

    const oneEighthOfWidth = w / 8;
    // c.lineWidth = 1;
    // asphalt bg
    c.fillStyle = 'gray';
    c.fillRect(0, 0, w, h);

    // greenlanes bg
    c.fillStyle = 'green';
    c.fillRect(0, 0, oneEighthOfWidth, h);
    c.fillRect(w - oneEighthOfWidth + 1, 0, oneEighthOfWidth, h);

    // white stripes
    c.fillStyle = 'white';
    c.fillRect(oneEighthOfWidth - 15 + 20, 0, 10, h);
    c.fillRect(w - oneEighthOfWidth - 35 + 20, 0, 10, h);

    // dashed middle line
    c.strokeStyle = 'white';
    c.lineWidth = 4;
    c.setLineDash([20, 15]);
    helper.drawLine(c, w / 2, 0, w / 2, h);

    // helper.drawLine(c, w-20, 0, w-20, h);
  },

  drawCar() {
    const c = this.c;
    const w = this.canvas.width;
    const h = this.canvas.height;
    // eslint-disable-next-line no-undef
    const car = new Car(w / 2, h / 2, './images/car.png');

    car.drawImg(c);
  },
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  build() {
    gameGlobalBehavior.setCanvasSize();
    gameGlobalBehavior.drawBackground();
    gameGlobalBehavior.drawCar();
    gameGlobalBehavior.startGame();
  }
};

// game loop
function updateGame() {
  console.log('updating...');
  window.requestAnimationFrame(updateGame);
}

// events
gameGlobalBehavior.build();
// document.getElementById('start-button').onclick = gameGlobalBehavior.build;

// setTimeout(() => {
//   console.log('timeout!');
//   window.cancelAnimationFrame(requestId);
// }, 3000);
