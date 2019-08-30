class carGame {
  constructor(ctx, w, h, roadSpeed) {
    this.ctx = ctx;
    this.w = w;
    this.h = h;
    this.roadSpeed= roadSpeed;
    
  }
  drawBkg() {
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.w, this.h);
    this.ctx.fillStyle = "green";
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.rect(50, 0, 400, this.h);
    this.ctx.fillStyle = "grey";
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.rect(30, 0, 8, this.h);
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.rect(this.w - 39, 0, 8, this.h);
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.setLineDash([50, 30]);
    this.ctx.moveTo(250, (this.h+count)*this.roadSpeed);
    this.ctx.lineTo(250, 0);
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 8;
    this.ctx.stroke();
  }
}
class car {
  constructor(ctx,w,h) {
    this.x = 80;
    this.y = 650;
    this.speed = 35;
    this.carImg = new Image();
    this.carImg.src = "./images/car.png";
    this.ctx = ctx;
  }
  drawImage() {
      this.ctx.drawImage(this.carImg, this.x, this.y, 100, 200);
  }

  moveLeft() {
    this.x -= this.speed;
    // ctx.drawImage(this.carImg, this.x, this.y);
  }
  moveRight() {
    this.x += this.speed;
    // ctx.drawImage(this.carImg, this.x, this.y);
  }
}
class obstacle {
  constructor (ctx, roadSpeed) {
    this.ctx= ctx;
    this.x
    this.y
    this.speed
    
    }
    moves (){
      this.y *= 4;
    }
    randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    drawObstacle() {
      this.ctx.beginPath();
      this.ctx.rect(30, this.roadSpeed, 150, this.randomInt(4,11));
      this.ctx.fillStyle = "red";
      this.ctx.fill();
      this.ctx.closePath();
    }

    
}

let count= 0;
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};
  
  startGame = () => {

    const myCanvasDOMEl = document.querySelector("#myCanvas");
    const ctx = myCanvasDOMEl.getContext("2d");
    const w = 500;
    const h = 900;
    const roadSpeed= 4;

    function setCanvasDimensions() {
      myCanvasDOMEl.setAttribute("width", `${w}px`);
      myCanvasDOMEl.setAttribute("height", `${h}px`);
    }
    setCanvasDimensions();
    // window.onresize = setCanvasDimensions;

    let mygame = new carGame(ctx, w, h, roadSpeed);
    let myCar = new car(ctx, w, h);
    let newObstacle= new obstacle(ctx, roadSpeed)

    window.onkeydown = function(e) {
      switch (e.key) {
        case "ArrowLeft":
            if(myCar.x>60) myCar.moveLeft();
          break;
        case "ArrowRight":
            if(myCar.x<340) myCar.moveRight();
          break;
      }
    };

    setInterval(function() {

      ctx.clearRect(0, 0, w, h);
      mygame.drawBkg();
      myCar.drawImage();
      // console.log(4);
      // if(count==100) mygame.obstacle();
      count++;


    }, 1000/60);
};

