const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const cWidth = canvas.width;
const cHeight = canvas.height;
const carPlayer = new Car();

console.log(carPlayer);


function drawBoard() {
  const img = new Image();
  img.src = "/images/road.png";

  ctx.drawImage(img, 0, 0, cWidth, cHeight);
};


  function startGame() {
    drawBoard();
    carPlayer.drawCar();
    
  }

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

};
