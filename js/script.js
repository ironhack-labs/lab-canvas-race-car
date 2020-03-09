const canvas = document.querySelector("canvas");
const game = new Game(canvas)

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
		game.start();
		console.log("START")
  };
};