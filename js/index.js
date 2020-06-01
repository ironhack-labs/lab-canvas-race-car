const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
    const theGame = new Game(ctx)
    theGame.start()
  }
}
