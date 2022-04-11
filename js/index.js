class DeadlyRectangle {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = Math.floor(Math.random() * 251) + 100;
    this.height = 25;
    this.x = Math.floor(Math.random() * (500 - this.width + 1));
    this.y = -25;
  }
  // setStartingX(){
  //   this.x = Math.floor(Math.random() * (500 - this.width + 1))
  // }
  move() {
    this.y += 5;
  }
  draw() {
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  leftBorder() {
    return this.x;
  }
  rightBorder() {
    return this.x + this.width;
  }
  topBorder() {
    return this.y;
  }
  bottomBorder() {
    return this.y + this.height;
  }
  isOffBottomOfCanvas() {
    return this.y > 700;
  }
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const myCanvas = document.querySelector('#canvas');
    myCanvas.style.border = '1px solid red';
    const ctx = myCanvas.getContext('2d');

    let numFrame = 0;

    const roadImage = new Image();
    roadImage.src = './images/road.png';

    const carImage = new Image();
    carImage.src = './images/car.png';

    const roadImageObject = {
      img: roadImage,
      x: 0,
      y: 0,
      speed: 5,

      move: function () {
        this.y += this.speed;
        // if(this.y > myCanvas.height){
        //   this.y = 0;
        // }
        this.y %= myCanvas.height;
      },

      draw: function () {
        ctx.drawImage(this.img, 0, this.y, 500, 700);
        if (this.speed < 0) {
          ctx.drawImage(this.img, 0, this.y + this.img.height, 500, 700);
        } else {
          ctx.drawImage(this.img, 0, this.y - myCanvas.height, 500, 700);
        }
      },
    };

    const carImageObject = {
      img: carImage,
      x: 350,
      y: 550,
      width: 50,
      height: 100,
      // speedX: 0,
      moveLeft: function () {
        // this.x -= this.speedX;
        this.x -= 10;
      },
      moveRight: function () {
        // this.x += this.speedX;
        this.x += 10;
      },
      draw: function () {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      },
      left() {
        return this.x;
      },
      right() {
        return this.x + this.width;
      },
      top() {
        return this.y;
      },
      bottom() {
        return this.y + this.height;
      },
      crashWith(aDeadlyRectangle) {
        return !(
          this.bottom() < aDeadlyRectangle.topBorder() ||
          this.top() > aDeadlyRectangle.bottomBorder() ||
          this.right() < aDeadlyRectangle.leftBorder() ||
          this.left() > aDeadlyRectangle.rightBorder()
        );
      },
    };

    const myDeadlyRectangleArray = [];

    let myScore = 0;

    function updateBackgroundCanvas() {
      if (numFrame % 50 === 0) {
        myDeadlyRectangleArray.push(new DeadlyRectangle(ctx));
      }

      numFrame += 1;

      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

      roadImageObject.move();
      roadImageObject.draw();

      if (myDeadlyRectangleArray[0].isOffBottomOfCanvas()) {
        myDeadlyRectangleArray.shift();
        myScore++;
        document.querySelector('h1 span').textContent = myScore;
      }

      for (let i = 0; i < myDeadlyRectangleArray.length; i++) {
        myDeadlyRectangleArray[i].move();
        myDeadlyRectangleArray[i].draw();
      }

      carImageObject.draw();

      for (let i = 0; i < myDeadlyRectangleArray.length; i++) {
        if (carImageObject.crashWith(myDeadlyRectangleArray[i])) {
          alert('Game over, looooooser.');
          // document.getElementById('start-button').click();
        }
      }

      requestAnimationFrame(updateBackgroundCanvas);
    }

    window.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowRight':
          carImageObject.moveRight();
          break;
        case 'ArrowLeft':
          carImageObject.moveLeft();
          break;
      }
    });

    roadImage.onload = () => {
      // deadlyRectangleObject.setStartingX();
      updateBackgroundCanvas();
    };
  }
};
