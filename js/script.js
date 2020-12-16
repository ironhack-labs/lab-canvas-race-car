// Asociamos el id canvas del html con el del js, y declaramos en una constante el contexto 2d
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const game = new Game(ctx)
const car = new Image(ctx)

function startGame() {
    game.start()
  }

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
};