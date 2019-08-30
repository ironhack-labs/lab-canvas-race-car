window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  
  function startGame() {
    let car = new Car(ctx, 270, 350);
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
      
    }, 15);
    
  };
  
  const myCanvasl = document.querySelector("#myCanvas");
  const ctx = myCanvasl.getContext("2d");
  const w = 700;
  const h = 700;
  let counter = 0;
  
  function clearContent() {
    ctx.clearRect(0, 0, w, h);
  }
  
  function setCanvasDimensions() {

    myCanvasl.setAttribute("width", w);

    myCanvasl.setAttribute("height", h);
  }
  
  function createBackground() {
    
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 0, 1000, 1000)
    
    ctx.fillStyle = 'grey'
    ctx.fillRect(150, 0, 410, 700)
    
    ctx.fillStyle = 'white'
    ctx.fillRect(150, 0, 20, 700)
    ctx.fillRect(550, 0, 20, 700)
    
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.setLineDash([40, 30]);
    ctx.lineDashOffset = -counter * 4;
    ctx.moveTo(350, 0)
    ctx.lineTo(350, 700)
    ctx.stroke();
   
    
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
      if (this.positions.x >= 150) {
        this.positions.x -= this.speed;
      }
    }
    moveRight() {
      if (this.positions.x <= 400 ) {
        this.positions.x += this.speed;
      }
    }
  }
  
  let car = new Car(ctx, 0, 0);
  
  window.onkeydown = function (e) {
    switch (e.key) {
      case "arrowLeft":
      car.moveLeft();
      break;
      case "arrowRight":
      car.moveRight();
      break;
    }    
  }
}