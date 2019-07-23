function draw() {

  ctx.beginPath();
  ctx.fillRect(0, 0, 100, 600);
  ctx.fillStyle = 'green';

  ctx.beginPath();
  ctx.fillRect(300, 0, 100, 600);
  ctx.fillStyle = 'green';

  let img = new Image();
  img.src = './images/car.png';
  ctx.drawImage(img, 125, 300);

}

window.onload = function () {

  document.getElementById("start-button").onclick = function () {
    ctx = document.getElementById('race-car').getContext('2d');
    draw()
    startGame();
  };

  document.onkeydown


  function startGame() {
    draw()
  }
}