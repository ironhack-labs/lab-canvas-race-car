const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const game = new Game(ctx)

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.startGame();
  };

  window.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
      case 37:
        game.move('left')
        break;
      case 39:
        game.move('right')
        break;
  }
  });

  function startGame() {}

};

