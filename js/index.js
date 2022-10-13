const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowRight':
      player.moveRight();
      break;
  case 'ArrowLeft':
        player.moveLeft();
        break;
  }
})



class Car {
  constructor(x, y, w, h, ctx) {
this.x = x;
this.y = y;
this.w = w;
this.h = h;
this.ctx = ctx;

  }

  moveLeft() {
    this.x -= 10
  }

  moveRight() {
    this.x += 10
  }

  draw() {
    let carImage = new Image(); 
    carImage.src = '/lab-canvas-race-car/images/car.png';
    ctx.drawImage(carImage, this.x, this.y, 50, 50)
  }
}


class Game {
constructor(ctx, width, height, player) {
  this.ctx = ctx;
  this.width = width;
  this.height = height;
  this.player = player;
this.intervalId = null;
this.frames = 0;
}
start () {
this.intervalId = setInterval(this.upDate, 1000 / 60);
}


drawRoad () {
  const picture = new Image();
   picture.src = '/lab-canvas-race-car/images/road.png';
    ctx.drawImage(picture, 0, 0, 500, 700,)
  
}

upDate = () => {
  this.drawRoad();
  this.player.draw();
  this.player.draw();
  this.frames++;
}


}


 window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.start();
  };

  
};

const player = new Car(250, 600, 50, 50, ctx)
let game = new Game(ctx, 500, 700, player)

//couldn't complete the obstacles part :(
