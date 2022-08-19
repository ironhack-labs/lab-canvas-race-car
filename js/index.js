const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  class Background {
    constructor() {
      this.x = 0;
      this.y = 0;


      const img = new Image();
      img.addEventListener('load', () => {
        this.img = img;
        this.draw();
      });
      img.src = "images/road.png";
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, 500, 700);
    }
  }

  class Car {
    constructor() {
      this.x = 210;
      this.y = 540;


      const img = new Image();
      img.addEventListener('load', () => {

        this.img = img;
        this.draw();
      });
      img.src = "images/car.png";
    }
    moveUp() {
      if (this.y < 10) {
        this.y = 0
        alert('Learn how to drive')
      } else {
        this.y -= 20
      }
    }
    moveDown() {
      if (this.y > 530) {
        this.y = 540
        alert('Learn how to drive')
      } else {
        this.y += 20;
      }

    }
    moveLeft() {
      if (this.x < 10) {
        this.x = 0
        alert('Learn how to drive')
      } else {
        this.x -= 20;
      }

    }
    moveRight() {
      if (this.x > 410) {
        this.x = 420
        alert('Learn how to drive')
      } else {
        this.x += 20
      }
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, 80, 160);
    }
  }


  function startGame() {

    const car = new Car();
    const background = new Background()

    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 38:
          car.moveUp();
          console.log('up', car);
          break;

        case 40:
          car.moveDown();
          console.log('down', car);
          break;

        case 37:
          car.moveLeft();
          console.log('left', car);
          break;

        case 39:
          car.moveRight();
          console.log('right', car);
          break;

      }
      updateCanvas();
    })

    function updateCanvas() {
      ctx.clearRect(0, 0, 500, 700);
      background.draw()
      car.draw()

    }
    updateCanvas()
  }

};
