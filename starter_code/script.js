function animate(ctx, width, height) {
  console.log("animating");
  drawBackground(ctx, width, height);
  drawRoad(ctx, width, height);
  drawCar(ctx, width, height);
  window.requestAnimationFrame(() => animate(ctx, width, height));
}

function drawBackground(ctx, width, height) {
  ctx.fillStyle = "#888888";
  ctx.fillRect(0, 0, width, height)  
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, 30, height) 
  ctx.fillRect(width-30, 0, width, height)
  ctx.fillStyle = "#FFF";
  ctx.fillRect(40, 0, 10, height) 
  ctx.fillRect(width-50, 0, 10, height)
}

function drawRoad(ctx, width, height) {
  ctx.strokeStyle = "#FFF";
  ctx.lineWidth = 4;
  ctx.setLineDash([10,6])
  ctx.moveTo(width/2, 0)
  ctx.lineTo(width/2, height) 
  ctx.stroke()

}

function drawCar(ctx, height, width) {
  let image = new Image();

  image.src = 'images/car.png';
  
  image.onload = function() {
    ctx.drawImage(image, width/2, height, 50, 100) 
  }
}


window.onload = function() {
  
  let canvas = document.getElementById('game-board');
  let width = canvas.width = screen.width/3;
  let height = canvas.height = screen.height*.65;
  let ctx = canvas.getContext('2d');
  let speed = 10;

  document.getElementById("start-button").onclick = function() {
    window.requestAnimationFrame(() => animate(ctx, width, height));
  };
};
