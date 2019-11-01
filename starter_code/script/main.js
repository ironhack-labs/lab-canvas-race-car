const $canvas = document.querySelector('canvas');
const game = new Game ($canvas);
// console.dir($canvas);

window.addEventListener('load', () => {
  const $triggerGameStart = document.querySelector('button');
  $triggerGameStart.addEventListener('click', () => {
    game.start();
  });
});