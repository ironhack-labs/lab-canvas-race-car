window.onload = () => {

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  const background = new Image();
  background.src = './images/road.png';
  background.onload = () => {
  ctx.drawImage(background, 500, 700);
  };

  class Car {
    constructor() {
      this.x = 230;
      this.y = 600;
      // Load the image
      const img = new Image();
      img.addEventListener("load", () => {
      this.img = img;
      });
      img.src = "./images/car.png";
    }
  
    moveLeft() {
      this.x -= 20;
    }
  
    moveRight() {
      this.x += 20;
    }
  
    draw() {
      ctx.drawImage(this.img, this.x, this.y, 40, 80);
    }

    newPos() {
      if(this.x<0){
        this.x=0;
      }
      if(this.x>=canvas.width-40){
          this.x=canvas.width-40;
      }
  }
  }
  
  const car = new Car();

  document.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
      case 37:
        car.moveLeft();
        break;
      case 39:
        car.moveRight();
        break;
    }
    updateCanvas();
  });

  function startGame() {
    updateCanvas()
  }

  function updateCanvas() {
    
    ctx.clearRect(0, 0, 500, 700);
    car.newPos()
    ctx.drawImage(background, 0, 0, 500, 700);
    car.draw();

    //ctx.fillStyle = "#E2D80D"
    //ctx.fillText("Ghost_x: " + ghost.x, 580, 40);
    //ctx.fillText("Ghost_y: " + ghost.y, 580, 60);   
  };

}
