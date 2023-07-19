window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  function startGame() {
    function clearCanvas() {
      ctx.clearRect(0, 0, 500, 700); 
      //draw again here :
    }
    const car = new uglyCar(ctx);
    car.img.onload = () => {
      car.draw();
    }
  }
};

class uglyCar {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 250;
    this.y = 250;

    // Load the image
    const img = new Image();
    img.addEventListener('load', () => {
      // Once image loaded => draw
      this.img = img;
      this.draw();
    });
    img.src = 'images/car.png';
  }
  
  moveLeft() {
    this.x -= 25;
  }
  moveRight() {
    this.x += 25;
  }
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, 50, 50);
  }
}

