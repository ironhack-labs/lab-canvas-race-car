/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

//start the Game:
function startGame() {}

//last thing to start game:
window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

/* const bgImg = new Image();
  bgImg.src = "./images/road.png";

  const carImg = new Image();
  carImg.src = "./images/car.png";

  const backgroundImage = new BackgroundImage(
    0,
    0,
    canvas.width,
    canvas.height,
    bgImg
  );

  const player = new GameObject(250 - 25, canvas.height - 120, 50, 100, carImg);

  const game = new Game(backgroundImage, player);
 */
