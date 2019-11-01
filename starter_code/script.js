const $canvas = document.querySelector('canvas');
const ctx = $canvas.getContext('2d');
let y = 0;
let lose = false;
let isItRunning = false;
let myReq;
// let contador = 0;
window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    startGame();
  };

  function startGame($canvas) {
    let game = new Game($canvas);

    game.start();
  }
};

// window.addEventListener('keydown', event => {
//   event.preventDefault();
//   switch (event.keyCode) {
//     case 37:
//       this.game.player.moveLeft();
//       break;

//     case 39:
//       this.game.player.moveRight();

//       break;
//     case 32:
//       this.game.start();
//       break;
//   }
// });
