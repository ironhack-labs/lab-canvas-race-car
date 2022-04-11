class DeadlyRectangle {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = Math.floor((Math.random() * 251)) + 100;
    this.height = 25;
    this.x = Math.floor(Math.random() * (500 - this.width + 1));
    this.y = -25;
  }

  // setStartingX() {
  //   this.x = Math.floor(Math.random() * (500 - this.width + 1))
  // }

  move() {
    this.y ++;
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
 
}


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };


  function startGame() {
    const canvas = document.querySelector('#canvas');
    canvas.style.border = '1px solid red';
    const ctx = canvas.getContext('2d');
    
    let numFrame = 0;

    const roadImg = new Image();
    roadImg.src = './images/road.png';

    const carImg = new Image();
    carImg.src = './images/car.png';



    const roadImageObject = {
      img: roadImg,
      x: 0,
      y: 0,
      speed: 1,
    
      move: function() {
        this.y += this.speed;
        this.y %= canvas.height;
      },
    
      draw: function() {
        ctx.drawImage(this.img, 0, this.y, 500, 700);
        if (this.speed < 0) {
          ctx.drawImage(this.img, 0, this.y + this.img.height, 500, 700);
        } else {
          ctx.drawImage(this.img, 0, this.y - canvas.height, 500, 700);
        }
      },
    };

    const carImageObject = {
      img: carImg,
      x: 350,
      y: 500,
      width: 50,
      height: 100,
      // speedX: 0,
      // calculateNewPosition:
      moveLeft: function () {
        // this.x -= this.speedX;
          this.x -= 6;
      },
      moveRight: function () {
        // this.x += this.speedX;
          this.x += 6;
      },
      draw: function() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
      }, 

      leftBorder() {
        return this.x;
      },

      rightBorder() {
        return this.x + this.width;
      },

      topBorder() {
        return this.y;
      },

      bottomBorder() {
        return this.y + this.height;
      },

      crashWidth(aDeadlyRectangle) {
        return !(this.bottomBorder() < aDeadlyRectangle.topBorder() || this.topBorder() > aDeadlyRectangle.bottomBorder() || this.rightBorder() < aDeadlyRectangle.leftBorder() || this.leftBorder() > aDeadlyRectangle.rightBorder());
      }
    }

    const newDeadlyRectangleArray = [];

    function updateRoad() {

      if(numFrame % 250 === 0){
        newDeadlyRectangleArray.push(new DeadlyRectangle(ctx));
      }
       numFrame += 1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      roadImageObject.move();
      roadImageObject.draw();


      for(let i = 0; i < newDeadlyRectangleArray.length; i++) {
        newDeadlyRectangleArray[i].move();
        newDeadlyRectangleArray[i].draw();
      }


      carImageObject.draw();

      for(let i = 0; i < newDeadlyRectangleArray.length; i++) {
        if(carImageObject.crashWidth(newDeadlyRectangleArray[i])) {
          alert('Game over, punk!')
        }
        newDeadlyRectangleArray[i].draw();
      }
      

      requestAnimationFrame(updateRoad);
    }
    
  
    window.addEventListener('keydown', event => {
      switch (event.key) {
        case 'ArrowRight': 
          carImageObject.moveRight();
          break;
        case 'ArrowLeft':
          carImageObject.moveLeft();
          break;
      }
    });

    roadImg.onload = () => {
         
      // deadlyObject.setStartingX();
      // ctx.drawImage(roadImg, 0, 0, 500, 700);
      updateRoad()
    }
  }

};