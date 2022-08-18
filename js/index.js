const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  class Road {
    constructor() {
      this.x = 0;
      this.y = 0;

      // Load the image
      const img = new Image();
      img.addEventListener('load', () => {
        // Once image loaded => draw
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
      this.x = 190;
      this.y = 500;

      // Load the image
      const img1 = new Image();
      img1.addEventListener('load', () => {
        // Once image loaded => draw
        this.img1 = img1;
        this.draw();
      });
      img1.src = "images/car.png";
    }

    moveLeft() {
      this.x -= 25;
    }
    moveRight() {
      this.x += 25;
    }
    draw() {
      ctx.drawImage(this.img1, this.x, this.y, 80, 120);
    }
  }




  function startGame() {






    const back = new Road();
    const car = new Car();

    document.addEventListener('keydown', e => {
      switch (e.keyCode) {

        case 37: car.moveLeft(); console.log('left', car); break;
        case 39: car.moveRight(); console.log('right', car); break;
      }
      updateCanvas();
    })

    function updateCanvas() {
      ctx.clearRect(0, 0, 1500, 1700);


      back.draw()
      car.draw()


    }

    updateCanvas()

  }

}

