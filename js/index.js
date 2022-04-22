//CLASSES
class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 500;
    this.height = 700;
    this.image = new Image();
    this.image.src = "/images/road.png";
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

}

class RaceCar {
  constructor() {
    this.x = 215;
    this.y = 550;
    this.width = 70;
    this.height = 120;
    this.image = new Image();
    this.image.src = "/images/car.png";
  }
  
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  move(keyboard) {
    switch (keyboard) {
      case 37: //left
        if (this.x >= 35) {
          this.x -= 10;
        }
        break;
  
      case 39: //RIGHT
        if (this.x <= 395) {
          this.x += 10;
        }
    }
  }
}

//VARIABLES NECESSARIAS
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let frames = 0;
const background = new Background();
const raceCar = new RaceCar();

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    requestId = requestAnimationFrame(updateGame);
  }

  function updateGame() {
    frames++;
    ctx.clearRect(0, 0, 500, 700);
    background.draw();
    raceCar.draw();

    if (requestId){
      requestAnimationFrame(updateGame);
    }
  }

  addEventListener("keydown", (event)=>{
    raceCar.move(event.keyCode);
  })

};
