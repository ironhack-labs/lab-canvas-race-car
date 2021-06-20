window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  document.addEventListener('keydown', (e) => {
    switch (e.key){
      case 'a':
      case 'ArrowLeft':
        player.moveLeft();
        break;
      case 'd':
      case 'ArrowRight':
        player.moveRight();
        break;
    }
  })

  function startGame() {
    background.draw();
  }

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  function updateCanvas() {
    clearCanvas();
    background.draw;
    player.draw;
    animationId = requestAnimationFrame(updateCanvas);
  }

  class Bg{
    constructor() {
      this.posX = 0;
      this.posY = 0;

      const img = new Image();
      img.src = './images/road.png';
      img.onload = () => {
        this.img = img;
      };
    }
    draw() {
      ctx.drawImage(
        this.img,
        this.posX,
        this.posY,
        canvas.width,
        canvas.height,
        this.speed = 10,
      )
      moveLeft(){
        this.posX -= this.speed;
      }
      moveRight() {
        this.posX += this.speed;
      }
    }
  }
  const background = new Bg();

  class Car {
    constructor(source, x, y, w, h){
      this.posX = x;
      this.posY = y;
      this.width = w;
      this.height = h;

      const img = new Image();
      img.src = source;
      img.src = () => {
        this.img = img;
      }
    }
    draw() {
      ctx.drawImage(this.img, this.posX, this.posY, this.width, this,this.height);
    }
  }
const player = new Car('./images/car.png');
};