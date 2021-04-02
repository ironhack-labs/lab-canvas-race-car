const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
    const img = new Image();
    const car = new Image();
    car.src = `./images/car.png`;
    img.src = `./images/road.png`;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.drawImage(car, 225, 620, 50, 80);
    };
  };
}