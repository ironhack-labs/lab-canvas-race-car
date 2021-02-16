class Car{
  constructor(ctx, canvasSize, posX, posY, width, height){
    this.ctx = ctx;
    this.pos = { x: posX, y: posY };
    this.size = { w: width, h: height };
    this.canvas = canvasSize;
    this.imageInstance = new Image();
    this.imageInstance.src = `../images/car.png`;
  }

  move(distance) {
    if(this.pos.x > this.canvas.w - 120) {
      this.pos.x -= 5;
    } else if(this.pos.x < 80){
      this.pos.x += 5;
    } else {
      this.pos.x += distance;
    }
  }

  draw(){
    this.ctx.drawImage(this.imageInstance, this.pos.x, this.pos.y, this.size.w, this.size.h);
  }
}

const raceCar = {
  ctx: document.querySelector(`canvas`).getContext('2d'),
  frames: 0,
  canvas: { w: 500, h: 700 },
  addEventListeners() {
    document.onkeydown = e => {
      switch (e.keyCode){
        case 37:
            this.car.move(-20);
            break;
        case 39:
            this.car.move(20);
            break;
        }
      }
  },
  drawCar(){
    this.car = new Car(this.ctx, this.canvas, this.canvas.w/2 - 30, this.canvas.h - 150, 60, 130);
  },
  drawRoad(){
    this.imageInstance = new Image(); 
    this.imageInstance.src = `../images/road.png`;
    this.imageInstance.onload = ('load', e => () => {
      this.ctx.drawImage(this.imageInstance, 500, 400, 500, 500);
    });
  },
  drawGame(){
    setInterval(() =>{
      this.clearCanvas();
      this.car.draw();
      this.frames++;
    }, 70)
  },
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.w, this.canvas.h);
  }
}

function start(){
  raceCar.drawRoad();
  raceCar.addEventListeners();
  raceCar.drawCar();
  raceCar.drawGame();
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    start();
  }
};
