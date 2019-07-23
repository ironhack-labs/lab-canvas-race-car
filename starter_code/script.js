function draw() {
  ctx.beginPath();
  ctx.fillRect(0,0, 100, 500)
  ctx.fillStyle = "green"

  ctx.beginPath();
  ctx.fillRect(400, 0, 100, 500)
  ctx.fillStyle = "green"

  let img = new Image();   
  img.src = "images/car.png";
  ctx.drawImage(img, 200, 250);
}


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    ctx = document.getElementById('race-car').getContext('2d');
    draw()
    startGame();
  };

  

  function startGame() {
    draw()
  }
};
