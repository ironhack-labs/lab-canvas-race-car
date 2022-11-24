const game = new Game('canvas');
const startBtn = document.getElementById('start-button');

startBtn.addEventListener('click', () => {
  console.log(game.start())
})
