const canvas = document.getElementById("canvas");
const w = 500;
const h = 800;

let carGame = new CarGame(canvas, w, h);

const startGameButtonDOMEl = document.getElementById("start-button");

startGameButtonDOMEl.addEventListener("click", e => {
  e.preventDefault();
  carGame.start();
});
