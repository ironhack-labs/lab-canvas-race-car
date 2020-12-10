const canvas = document.getElementById('canvas')

const ctx = canvas.getContext('2d')

const game = new Game(ctx)

const img = new Image()
img.src = './images/car.png'

const car = new Car(ctx, 210, 500, 80, 160, img)

function startGame() {
    game.start()
  }

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
};
