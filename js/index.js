const game = new Game('canvas');
const startBtn = document.getElementById('start-button');

startBtn.addEventListener('click', () => {
  game.start()
})

document.addEventListener('keydown', (event) => {
  game.car.directions(event);
})

document.addEventListener('keyup',(event) => {
  game.car.directions(event);
})