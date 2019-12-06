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

// global

// update callback
const updateGame = () => {
  console.log('updating...');
};

const gameGlobalBehavior = {
  canvas: document.getElementById('canvas'),
  frames: 0,
  startGame() {
    this.canvas.width = 400;
    this.canvas.height = 500;
    window.requestAnimationFrame(updateGame);
    // setInterval(updateGame, 15);
  },
  drawBackground() {
    const c = this.canvas.getContext('2d');
    const w = this.canvas.width;
    const h = this.canvas.height;

    const oneEighthOfWidth = w/8;
    // c.lineWidth = 1;
    // asphalt bg
    c.fillStyle = "gray";
    c.fillRect(0, 0, w, h);

    // greenlanes bg
    c.fillStyle = 'green';
    c.fillRect(0, 0, oneEighthOfWidth, h);
    console.log(w-oneEighthOfWidth)
    c.fillRect(w-oneEighthOfWidth+1, 0, oneEighthOfWidth, h);

    // white stripes
    c.fillStyle = 'white'
    c.fillRect(oneEighthOfWidth-15 + 20, 0, 10, h)
    c.fillRect(w-oneEighthOfWidth-35 + 20, 0, 10, h)

    // dashed middle line
    c.strokeStyle = 'white'
    c.lineWidth = 4;
    c.setLineDash([20, 15])
    helper.drawLine(c, w/2, 0, w/2, h)

    // helper.drawLine(c, w-20, 0, w-20, h);
  },
  build() {
    gameGlobalBehavior.startGame();
    gameGlobalBehavior.drawBackground();
  }
};

// events

gameGlobalBehavior.build()
// document.getElementById('start-button').onclick = gameGlobalBehavior.build;
