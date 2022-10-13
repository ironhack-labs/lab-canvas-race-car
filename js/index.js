/* const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class Game {
  constructor(ctx, width, height){
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.img = img; 
    this.frames = 0;
    this.intervalId = null;
    this.obstacles = [];
  }

  start() {
    this.intervalId = setInterval(this.update, 1000 / 60);
    const img = new Image();
    img.src = '/images/road.png';
  }
  
}

class Component {
  constructor(x, y, w, h, ctx){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img; 
    this.ctx = ctx;
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.h);
  }
  update = () => {
    this.frames++;
    this.clear(); 
    this.draw(); 
    
  }

}

const road = new Component(0, 200, 100 , 700);

let game = new Game(ctx, 500, 700, road);

 */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let road = new Road(150, 0, 200, 700, img);
let car = new Car(230, 620, 40, 80, carImg);
let game = new Game(ctx, 500, 700, car);;

document.addEventListener('keydown', (e) => {
  switch(e.code) {
    case 'ArrowRight':
      car.speedX +=1;
      break;
    case 'ArrowLeft':
      car.speedX -=1;
      break;
  }
})


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    road.drawRoad();
    car.drawCar();
    game.start();
  }
};


