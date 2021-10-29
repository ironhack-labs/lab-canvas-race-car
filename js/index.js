window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    basicGame.startGame();
  };
};

const basicGame = {
  ctx : undefined,
  canvasDOM: undefined,
  canvasSize : { width: undefined, height: undefined }, 
  duck : undefined,
  FPS : 60,
  obstacles : [],
  framesCounter: 0,
  points: 0,
  
  
  startGame() {
    this.setContext()
    this.setDimensions()
    this.drawFilledRectangle()
    this.drawRegularLinesRed()
    this.drawRegularLinesRedRight()
    this.drawRegularLinesWhite()
    this.drawRegularLinesWhiteRight()
    this.drawPoolVerticalLine()
    this.createObstacles()
    this.createDuck()
    this.start()
    this.setListeners()
    this.createCollision()
    this.scoreCounter()

    
  },


  setContext() {
    this.canvasDOM = document.querySelector("#myCanvas")
    this.ctx = this.canvasDOM.getContext("2d")
  },


  setDimensions() {
    this.canvasDOM.setAttribute("width", 500)
    this.canvasDOM.setAttribute("height", 800)
    this.canvasSize.width = window.innerWidth
    this.canvasSize.height = window.innerHeight
  },


  drawFilledRectangle() {
    this.ctx.fillStyle = "lightGreen";
    this.ctx.fillRect(0, 0, 500, 800);
    this.ctx.fillStyle = "LightSlateGray";
    this.ctx.fillRect(45, 0, 410, 800);
    this.ctx.fillStyle = "cornsilk";
    this.ctx.fillRect(50, 0, 400, 800);
    this.ctx.fillStyle = "PaleTurquoise";
    this.ctx.fillRect(60, 0, 380, 800);
  },


  drawRegularLinesRed() {
    
    this.ctx.strokeStyle = "red";
    this.ctx.lineWidth = 10;

    this.ctx.beginPath();
    this.ctx.moveTo(70, 0);
    this.ctx.lineTo(70, 10);
    this.ctx.moveTo(70, 40);
    this.ctx.lineTo(70, 50);
    this.ctx.moveTo(70, 80);
    this.ctx.lineTo(70, 90);
    this.ctx.moveTo(70, 120);
    this.ctx.lineTo(70, 130);
    this.ctx.moveTo(70, 160);
    this.ctx.lineTo(70, 170);
    this.ctx.moveTo(70, 200);
    this.ctx.lineTo(70, 210);
    this.ctx.moveTo(70, 240);
    this.ctx.lineTo(70, 250);
    this.ctx.moveTo(70, 280);
    this.ctx.lineTo(70, 290);
    this.ctx.moveTo(70, 320);
    this.ctx.lineTo(70, 330);
    this.ctx.moveTo(70, 360);
    this.ctx.lineTo(70, 370);
    this.ctx.moveTo(70, 400);
    this.ctx.lineTo(70, 410);
    this.ctx.moveTo(70, 440);
    this.ctx.lineTo(70, 450);
    this.ctx.moveTo(70, 480);
    this.ctx.lineTo(70, 490);
    this.ctx.moveTo(70, 520);
    this.ctx.lineTo(70, 530);
    this.ctx.moveTo(70, 560);
    this.ctx.lineTo(70, 570);
    this.ctx.moveTo(70, 600);
    this.ctx.lineTo(70, 610);
    this.ctx.moveTo(70, 640);
    this.ctx.lineTo(70, 650);
    this.ctx.moveTo(70, 680);
    this.ctx.lineTo(70, 690);
    this.ctx.moveTo(70, 720);
    this.ctx.lineTo(70, 730);
    this.ctx.moveTo(70, 760);
    this.ctx.lineTo(70, 770);
    this.ctx.moveTo(70, 800);
    this.ctx.lineTo(70, 810);

    this.ctx.stroke();
    this.ctx.closePath()
  },

  
  drawRegularLinesWhite() {
    
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 10;

    this.ctx.beginPath();
    this.ctx.moveTo(70, 20);
    this.ctx.lineTo(70, 30);
    this.ctx.moveTo(70, 60);
    this.ctx.lineTo(70, 70);
    this.ctx.moveTo(70, 100);
    this.ctx.lineTo(70, 110);
    this.ctx.moveTo(70, 140);
    this.ctx.lineTo(70, 150);
    this.ctx.moveTo(70, 180);
    this.ctx.lineTo(70, 190);
    this.ctx.moveTo(70, 220);
    this.ctx.lineTo(70, 230);
    this.ctx.moveTo(70, 260);
    this.ctx.lineTo(70, 270);
    this.ctx.moveTo(70, 300);
    this.ctx.lineTo(70, 310);
    this.ctx.moveTo(70, 340);
    this.ctx.lineTo(70, 350);
    this.ctx.moveTo(70, 380);
    this.ctx.lineTo(70, 390);
    this.ctx.moveTo(70, 420);
    this.ctx.lineTo(70, 430);
    this.ctx.moveTo(70, 460);
    this.ctx.lineTo(70, 470);
    this.ctx.moveTo(70, 500);
    this.ctx.lineTo(70, 510);
    this.ctx.moveTo(70, 540);
    this.ctx.lineTo(70, 550);
    this.ctx.moveTo(70, 580);
    this.ctx.lineTo(70, 590);
    this.ctx.moveTo(70, 620);
    this.ctx.lineTo(70, 630);
    this.ctx.moveTo(70, 660);
    this.ctx.lineTo(70, 670);
    this.ctx.moveTo(70, 700);
    this.ctx.lineTo(70, 710);
    this.ctx.moveTo(70, 740);
    this.ctx.lineTo(70, 750);
    this.ctx.moveTo(70, 780);
    this.ctx.lineTo(70, 790);
    this.ctx.moveTo(70, 820);
    this.ctx.lineTo(70, 830);

    this.ctx.stroke();
    this.ctx.closePath()
  },


  drawRegularLinesRedRight() {
    
    this.ctx.strokeStyle = "red";
    this.ctx.lineWidth = 10;

    this.ctx.beginPath();
    this.ctx.moveTo(430, 0);
    this.ctx.lineTo(430, 10);
    this.ctx.moveTo(430, 40);
    this.ctx.lineTo(430, 50);
    this.ctx.moveTo(430, 80);
    this.ctx.lineTo(430, 90);
    this.ctx.moveTo(430, 120);
    this.ctx.lineTo(430, 130);
    this.ctx.moveTo(430, 160);
    this.ctx.lineTo(430, 170);
    this.ctx.moveTo(430, 200);
    this.ctx.lineTo(430, 210);
    this.ctx.moveTo(430, 240);
    this.ctx.lineTo(430, 250);
    this.ctx.moveTo(430, 280);
    this.ctx.lineTo(430, 290);
    this.ctx.moveTo(430, 320);
    this.ctx.lineTo(430, 330);
    this.ctx.moveTo(430, 360);
    this.ctx.lineTo(430, 370);
    this.ctx.moveTo(430, 400);
    this.ctx.lineTo(430, 410);
    this.ctx.moveTo(430, 440);
    this.ctx.lineTo(430, 450);
    this.ctx.moveTo(430, 480);
    this.ctx.lineTo(430, 490);
    this.ctx.moveTo(430, 520);
    this.ctx.lineTo(430, 530);
    this.ctx.moveTo(430, 560);
    this.ctx.lineTo(430, 570);
    this.ctx.moveTo(430, 600);
    this.ctx.lineTo(430, 610);
    this.ctx.moveTo(430, 640);
    this.ctx.lineTo(430, 650);
    this.ctx.moveTo(430, 680);
    this.ctx.lineTo(430, 690);
    this.ctx.moveTo(430, 720);
    this.ctx.lineTo(430, 730);
    this.ctx.moveTo(430, 760);
    this.ctx.lineTo(430, 770);
    this.ctx.moveTo(430, 800);
    this.ctx.lineTo(430, 810);

    this.ctx.stroke();
    this.ctx.closePath()
  },

  
  drawRegularLinesWhiteRight() {
    
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 10;

    this.ctx.beginPath();
    this.ctx.moveTo(430, 20);
    this.ctx.lineTo(430, 30);
    this.ctx.moveTo(430, 60);
    this.ctx.lineTo(430, 70);
    this.ctx.moveTo(430, 100);
    this.ctx.lineTo(430, 110);
    this.ctx.moveTo(430, 140);
    this.ctx.lineTo(430, 150);
    this.ctx.moveTo(430, 180);
    this.ctx.lineTo(430, 190);
    this.ctx.moveTo(430, 220);
    this.ctx.lineTo(430, 230);
    this.ctx.moveTo(430, 260);
    this.ctx.lineTo(430, 270);
    this.ctx.moveTo(430, 300);
    this.ctx.lineTo(430, 310);
    this.ctx.moveTo(430, 340);
    this.ctx.lineTo(430, 350);
    this.ctx.moveTo(430, 380);
    this.ctx.lineTo(430, 390);
    this.ctx.moveTo(430, 420);
    this.ctx.lineTo(430, 430);
    this.ctx.moveTo(430, 460);
    this.ctx.lineTo(430, 470);
    this.ctx.moveTo(430, 500);
    this.ctx.lineTo(430, 510);
    this.ctx.moveTo(430, 540);
    this.ctx.lineTo(430, 550);
    this.ctx.moveTo(430, 580);
    this.ctx.lineTo(430, 590);
    this.ctx.moveTo(430, 620);
    this.ctx.lineTo(430, 630);
    this.ctx.moveTo(430, 660);
    this.ctx.lineTo(430, 670);
    this.ctx.moveTo(430, 700);
    this.ctx.lineTo(430, 710);
    this.ctx.moveTo(430, 740);
    this.ctx.lineTo(430, 750);
    this.ctx.moveTo(430, 780);
    this.ctx.lineTo(430, 790);
    this.ctx.moveTo(430, 820);
    this.ctx.lineTo(430, 830);

    this.ctx.stroke();
    this.ctx.closePath()
  },


  drawPoolVerticalLine() {
    this.ctx.fillStyle = "SkyBlue";
    this.ctx.fillRect(160, 600, 20, 200);
    this.ctx.fillRect(320, 600, 20, 200);
    this.ctx.fillRect(120, 600, 100, 20);
    this.ctx.fillRect(280, 600, 100, 20);
   
  },

  
  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
  },


  start() {
    this.intervalId = setInterval(() => {
      this.framesCounter++
      this.framesCounter % 100 === 0 ? this.createObstacles(): null
      this.framesCounter % 100 === 0 ? this.scoreCounter(): null
      this.clearScreen()
      this.drawFilledRectangle()
      this.drawRegularLinesRed()
      this.drawRegularLinesRedRight()
      this.drawRegularLinesWhite()
      this.drawRegularLinesWhiteRight()
      this.drawPoolVerticalLine() 
      this.drawAll()
      this.moveAll()
      this.duck.draw()
      this.createCollision()
      
      
       
    }, 1000 / this.FPS)
  },

  createDuck() {
    this.duck = new Duck(this.ctx, 190, 440, 110, 110)
  },

  setListeners() {
    
    document.onkeydown = e => {   
      e.key === 'ArrowLeft' ? this.duck.moveLeft() : null
      e.key === 'ArrowRight' ? this.duck.moveRight() : null
    }
  },

  drawAll() {
    this.obstacles.forEach(obstacle => obstacle.draw())
  },

  moveAll() {
    this.obstacles.forEach(obstacle => obstacle.move())
  },

  
  createObstacles() {

    this.randomX = Math.floor(Math.random() * 310 + 30)
    this.randomWidth = Math.floor(Math.random() * 80 + 60)
    this.randomSpeed = Math.floor(Math.random() * 3 + 2)

    /* this.obstacles.push(new Obstacle(this.ctx, 200, 0, 130, 130, 3))
    this.obstacles.push(new Obstacle(this.ctx, 300, 0, 80, 80, 1))
    this.obstacles.push(new Obstacle(this.ctx, 50, 0, 100, 100, 2)) */
    this.obstacles.push(new Obstacle(this.ctx, this.randomX, 0, this.randomWidth, this.randomWidth, this.randomSpeed))
  },



  createCollision() {
    
    this.obstacles.forEach((obstacle) => {
      if (
        
        this.duck.posX < obstacle.posX + obstacle.width-50 &&
        this.duck.posX + this.duck.width-50 > obstacle.posX &&
        this.duck.posY < obstacle.posY + obstacle.height-50 &&
        this.duck.height-50 + this.duck.posY > obstacle.posY
        
        ) {

        // collision detected!
        this.stop();
        this.finalScore();
        this.points = 0;
        document.querySelector('#gameOver div').removeAttribute('class', 'hide')

        } 
    
        else {
        // no collision
        //console.log("still alive");
        }

      })
  },


  stop() {
    clearInterval(this.intervalId)
  },

  scoreCounter() {
    this.points++
    document.querySelector('#points').textContent = this.points
    console.log(this.points) 
  },

  finalScore() {
    document.querySelector('#scoredFinal').textContent = this.points
  },

 
}

class Duck {
  constructor(ctx, posX, posY, width, height) {
    this.ctx = ctx

    this.posX = posX
    this.posY = posY

    this.width = width
    this.height = height

    this.image = undefined

    this.startGame()
  }

  startGame() {
    this.image = new Image()
    this.image.src = '../images/gum-duck-shadow.png'
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
  }

  moveLeft() {
    this.posX > 50 ? this.posX -= 35 : null
  }

  moveRight() {
    this.posX < 330 ? this.posX += 35 : null
  }
}



class Obstacle {
  constructor(ctx, posX, posY, width, height, speed) {
    this.ctx = ctx

    this.posX = posX
    this.posY = posY

    this.width = width
    this.height = height

    this.image = undefined
    
    this.speed = speed

    this.startGame()

  }

  startGame() {
    this.image = new Image()
    this.image.src = '../images/water-lily.png'
  }


  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
  }

  move() {
    this.posY += this.speed
  }
}





