const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {	window.onload = () => {
  document.getElementById('start-button').onclick = () => {	  document.getElementById('start-button').onclick = () => {
    startGame();	    startGame();
  };	  };



};	};

function drawBackground() {
  const backgroundImage = new Image();
  backgroundImage.src = "./images/road.png";
  ctx.drawImage(backgroundImage, 0, 0, 500, 700);
}

game.startGame();

class Car {
  constructor() {
    //Starting position of the character
    this.x = 222;
    this.y = 600;

  }
  draw() {
    const img = new Image();

    img.src = '../images/car.png';
    ctx.drawImage(img, 222, 600, 50, 60);
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.h;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.w;
  }

  crashWith(obstacle) {
    return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() || this.left() > obstacle.right()
    );
  }
}


let player = new Car();
let game = new Game(ctx, 500, 700, player);





document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowUp':
      player.speedY -= 1;
      break;
    case 'ArrowDown':
      player.speedY += 1;
      break;
    case 'ArrowRight':
      player.speedX += 1;
      break;
    case 'ArrowLeft':
      player.speedX -= 1;
      break;

  }
});

document.addEventListener('keyup', (e) => {
  player.speedX = 0;
  player.speedY = 0;
});
 76  

class Game {
    constructor(ctx, width, height, player) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null;
        this.obstacles = [];
        this.frames = 0;
    }

    start() {
        this.intervalId = setInterval(this.update, 1000 / 60);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    }


    update = () => {
        this.frames++;
        drawBackground();
        this.player.draw();
      

    }

    stop() {
        clearInterval(this.intervalId);
    }

    checkGameOver() {
        const crashed = this.obstacles.some((obstacle) => {
            return this.player.crashWith(obstacle);
        });

        if (crashed) {
            this.stop();
        }
    }

    updateObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].x -= 1;
            this.obstacles[i].draw();
        }

        if (this.frames % 180 === 0) {

            let x = 500;

            
            let minHeight = 20;
            let maxHeight = 400;

         
            let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);


        
            let minGap = 75;
            let maxGap = 200;

          
            let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap)


            this.obstacles.push(new Component(x, 0, height, 50, 'red', this.ctx))


            this.obstacles.push(new Component(x, height + gap, 50, x - height - gap, 'red', this.ctx))
        }
    }
}