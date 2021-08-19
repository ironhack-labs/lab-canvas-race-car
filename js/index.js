const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const game = (window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
});

function startGame() {
  const cvHeight = 700;
  const cvWidth = 500;

  ctx.fillStyle = '#008100';
  ctx.fillRect(0, 0, cvWidth, cvHeight);
  ctx.fillStyle = '#808080';
  ctx.fillRect(40, 0, cvWidth - 80, cvHeight);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(50, 0, cvWidth - 100, cvHeight);
  ctx.fillStyle = '#808080';
  ctx.fillRect(60, 0, cvWidth - 120, cvHeight);

  for (let i = 30; i < cvHeight; i += 60) {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(240, i, 10, 30);
  }
  const img = new Image();
  img.src = 'images/car.png';
  img.onload = () => ctx.drawImage(img, 250, 350, 158 / 2, 319 / 2);
}
