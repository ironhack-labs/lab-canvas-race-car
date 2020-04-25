window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    console.log('button pressed')
    event.preventDefault();
    background.clearCanvas();
    background.drawBackground();
    background.loop()
  }
};

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const basePixel = width/10;

const background = new Background(170, 100, canvas, context, width, height, basePixel);
const car = new Car(0, 0, canvas, context, basePixel);
