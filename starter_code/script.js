window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  
  function startGame() {
    let car = new Car(ctx, 70, 250);
    window.onkeydown = function (e) {
      switch (e.key) {
        case "ArrowLeft":
        car.moveLeft();
        break;
        case "ArrowRight":
        car.moveRight();
        break;
      }

    }
    
    
    setInterval(() => {
      clearContent()
      createBackground()
      car.drawCar()
      counter++
      
    }, 10);
    
  };
  
  const myCanvasDOMEl = document.querySelector("#myCanvas");
  const ctx = myCanvasDOMEl.getContext("2d");
  const w = 500;
  const h = 600;
  const w2 = w / 2;
  const h2 = h / 2;
  let counter = 0;
  
  function clearContent() {
    ctx.clearRect(0, 0, w, h);
  }
  
  function setCanvasDimensions() {

    myCanvasDOMEl.setAttribute("width", w);

    myCanvasDOMEl.setAttribute("height", h);
  }
  
  function createBackground() {
    
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 0, 500, 600)
    
    ctx.fillStyle = 'grey'
    ctx.fillRect(50, 0, 410, 600)
    
    ctx.fillStyle = 'white'
    ctx.fillRect(30, 0, 20, 600)
    ctx.fillRect(450, 0, 20, 600)
    
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.setLineDash([40, 30]);
    ctx.lineDashOffset = -counter * 4;
    ctx.moveTo(250, 0)
    ctx.lineTo(250, 600)
    ctx.stroke();
    ctx.closePath();
    
    window.onresize = setCanvasDimensions;
  }
  setCanvasDimensions();
  
  
  class Car {
    constructor(ctx, xParam, yParam) {
      this.positions = {
        x: xParam,
        y: yParam
      };
      this.speed = 25;
      this.gameCharacter = new Image();
      this.gameCharacter.src = "./images/car.png";
    }
    
    drawCar() {
      ctx.drawImage(this.gameCharacter, this.positions.x, this.positions.y)
    }
    
    moveLeft() {
      if (this.positions.x >= 0) {
        this.positions.x -= this.speed;
      }
    }
    moveRight() {
      if (this.positions.x <= 500 ) {
        this.positions.x += this.speed;
      }
    }
  }
  
  let car = new Car(ctx, 0, 0);
  
  window.onkeydown = function (e) {
    switch (e.key) {
      case "ArrowLeft":
      car.moveLeft();
      break;
      case "ArrowRight":
      car.moveRight();
      break;
    }    
  }
}