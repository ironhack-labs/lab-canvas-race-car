const canvas = document.getElementById("canvas");
const w = 500;
const h = 800;

const startGameButtonDOMEl = document.getElementById("start-button");

document.forms[0].addEventListener('submit', e => e.preventDefault())

startGameButtonDOMEl.addEventListener("click", e => {

  let carGame = new CarGame(
    canvas,
    w,
    h,
    document.getElementById("game-speed").value ? +document.getElementById("game-speed").value : 15,
    document.getElementById("game-obstacles-interval").value ? +document.getElementById("game-obstacles-interval").value : 50
  );
  carGame.start();
});
