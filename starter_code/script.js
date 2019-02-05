let canvas = document.getElementById('game-board');
  let ctx = canvas.getContext('2d');
  let carCtx = canvas.getContext('2d');
  canvas.width=screen.width/3;
  canvas.height=screen.height*.65;
  let height = canvas.height;
  let width = canvas.width;

window.onload = function() {
  
  

  document.getElementById("start-button").onclick = function() {
    drawBackground(ctx, width, height);
    animate();
  };

  function animate() {
    console.log("animating");
    draw(car);
    drawRoad(ctx, width, height);
    draw(ctx, width, height);
    window.requestAnimationFrame(animate);
  }
};

function drawBackground(ctx, width, height) {
  let col = width/5;
  let row = 160;
  ctx.fillStyle = "#f7f7e3";
  ctx.fillRect(0, 0, width, height)  
  ctx.fillStyle = "#000000";
  
  //VERTICAL BARS
  ctx.fillRect(0, 0, 2, height) 
  ctx.fillRect(col, 0, 3, row*3.5) 
  ctx.fillRect(col*2, 0, 3, row*3.5) 
  ctx.fillRect(col*3, 0, 3, row*3.5) 
  ctx.fillRect(col*4, 0, 3, row*3.5) 
  ctx.fillRect(width-2, 0, 2, height) 
  //HORIZONTAL BARS
  ctx.fillRect(0, 0, width, 3)
  ctx.fillRect(0, row, width, 2)
  ctx.fillRect(0, row*2, width, 2)
  ctx.fillRect(0, row*3, width, 2)
  ctx.fillRect(0, row*3.5, width, 2)
  ctx.fillRect(0, height-2, width, 2)
}

function drawRoad(ctx, width, height) {
  ctx.strokeStyle = "#FFF";
  ctx.lineWidth = 4;
  ctx.setLineDash([10,6])
  ctx.moveTo(width/2, 0)
  ctx.lineTo(width/2, height) 
  ctx.stroke()

}



var car = {
  x: width/2,
  moveLeft:  function() { this.x -= 25 },
  moveRight: function() { this.x += 25 },
}

function draw(car) {
  var img = new Image();
  img.onload = function() { 
     ctx.drawImage(img, car.x, height/1.25, 50, 100); 
  }
  img.src = "/Users/miketroianello/Desktop/code/lab/lab-canvas-race-car/starter_code/images/car.png"
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37: car.moveLeft();  console.log('left',  car); break;
    case 39: car.moveRight(); console.log('right', car); break;
  }
  updateCanvas();
}

function updateCanvas(){
  ctx.clearRect(0,0, width ,height);
  drawBackground(ctx, width, height);
  animate();
}