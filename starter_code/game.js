class Game {
  constructor(posX, posY) {
    this.canvasDOMEl = document.getElementById("game-canvas");
    this.ctx = this.canvasDOMEl.getContext("2d");
    this.w = 500;
    this.h = 600;
    this.h2 = this.h / 2;
    this.w2 = this.w / 2;
    this.intervalId;
    this.counter = 0;
    this.carImg = new Image();
    this.carImg.src = "./images/car.png";
    //Car Settings
    this.posX = this.w2 - 35;
    this.posY = this.h - 120;
    this.speed = 20;
    //Obstacles Settings
    this.obstacles = [];
    this.oposX = 0;
    this.oposY = 0;
    this.endGam = false;
  }

  startGame() {
    this.canvasDOMEl.setAttribute("height", this.h);
    this.canvasDOMEl.setAttribute("width", this.w);
    let myInterval = setInterval(() => {
      this.clearCanvas();
      this.loadBackground(100);
      this.generateObstacles();
      this.updateObstacles();
      this.colision();
      this.gameControls();
      this.counter++;
      if(this.endGam === true){
        clearInterval(myInterval);
    }
    //   console.log(this.posX , this.obstacles[0].oposY)
    }, 1000 / 60);

    

    this.carImg.onload = function() {
      start();
    };
  }


  loadBackground() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "#cccccc";
    this.ctx.fillRect(0, 0, this.w, this.h);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#138100";
    this.ctx.fillRect(0, 0, 50, this.h);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillRect(65, 0, 20, this.h);
    this.ctx.stroke();

    this.ctx.fillStyle = "#138100";
    this.ctx.fillRect(450, 0, 50, this.h);
    this.ctx.stroke();

    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillRect(415, 0, 20, this.h);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.setLineDash([100, 70]);
    this.ctx.moveTo(this.w2, this.h + this.counter);
    this.ctx.lineTo(this.w2, -this.h);
    this.ctx.strokeStyle = "#ffffff";
    this.ctx.lineWidth = 12;
    this.ctx.stroke();

    this.ctx.drawImage(this.carImg, this.posX, this.posY, 70, 120);
  }

  generateObstacles() {
    if (this.counter % 300 === 0) {
      this.obstacles.push(new obstacle());
    }
  }

  updateObstacles() {
    this.obstacles.forEach(obs => {
      obs.oposY=obs.oposY+4;
      this.ctx.beginPath();
      this.ctx.fillStyle = "#00000";
      this.ctx.fillRect(obs.oposX, obs.oposY, obs.width, obs.height);
      this.ctx.stroke();
      if(obs.oposY > this.h){
          this.obstacles.shift();
      }
      
    }
    );
  }

  colision() {
     this.obstacles.forEach(obs => {
          if(this.posX + 70 > obs.oposX &&
            this.posX < obs.oposX + obs.width &&
            this.posY < obs.oposY + 40 &&
            this.posY + 120 > obs.oposY)
            {
            this.endGam = true
            }
           
        
      })
      
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.w, this.h);
  }

  gameControls() {
    window.onkeydown = e => {
      switch (e.key) {
        case "ArrowRight":
          if (this.posX >= 400) {
            break;
          }
          this.posX += this.speed;
          break;

        case "ArrowLeft":
          if (this.posX <= 5) {
            break;
          }
          this.posX -= +this.speed;
        
          break;
      }
    };
  }
}

class obstacle {
  constructor() {
    this.canvasDOMEl = document.getElementById("game-canvas");
    this.ctx = this.canvasDOMEl.getContext("2d");
    this.oposX = Math.floor(Math.random() * 500)
    this.oposY = -100;
    this.width = Math.floor(Math.random() * 220 + 160);
    this.height = 40;
  }
}
