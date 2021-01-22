

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    
  };

  let myGameArea = {  
  canvas: document.getElementById('canvas'),
  start:function() {
      this.canvas.width = 500;
      this.canvas.height = 700;
      this.ctx = this.canvas.getContext("2d");
      this.frameNo = 0;
    },
    clear : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); 
      this.interval = setInterval(updateGameArea, 20);
}}


  function startGame() {
          myGameArea.start()
       




    
class Carro {
  constructor() {
    this.x = 220;
    this.y = 600;
    ctx = myGameArea.ctx;
    // Load the image
    const img = new Image();
    img.addEventListener('load', () => {
      // Once image loaded => draw
      this.img = img;
      this.draw();
    });
    img.src = 'images/car.png';
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 50, 80);
}
  moveUp() {
    this.y -= 25;
  }
  moveDown() {
    this.y += 25;
  }
  moveLeft() {
    this.x -= 25;
  }
  moveRight() {
    this.x += 25;
}

}


class Road {
  constructor() {
    this.x = 0;
    this.y = 0;
  
    ctx = myGameArea.ctx;
 
    // Load the image
    const img = new Image();
    img.addEventListener('load', () => {
      // Once image loaded => draw
      this.img = img;
      this.draw();
    });
    img.src = 'images/road.png';
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 500, 700);
}}
 const calle = new Road();
          const carro = new Carro(); 
const myObstacles = [];




document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 38:
      carro.moveUp();
      console.log('up', carro);
      break;
    case 40:
      carro.moveDown();
      console.log('down', carro);
      break;
    case 37:
      carro.moveLeft();
      console.log('left', carro);
      break;
    case 39:
      carro.moveRight();
      console.log('right', carro);
      break;
  }
  updateCanvas();
});

/*function updateCanvas() {
  ctx.clearRect(0, 0, 500, 700);
  ctx.fillText('Carro_x: ' + carro.x, 10, 10);
  ctx.fillText('Carro_y: ' + carro.y,  10, 10);
 
  calle.draw();
  carro.draw();
  

}*/
  
}}
