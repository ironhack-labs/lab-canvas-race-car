console.log("JS IS LOADED");

window.onload = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  const background = new Image();
  background.src = "./images/road.png";

  class Car {
    constructor() {
      this.x = 220; 
      this.y = 550;
      this.width = 70; 
      this.height = 140;

      const carImage = new Image();
      carImage.addEventListener("load", () => {
        this.carImage = carImage;
      });

      carImage.src = "./images/car.png";
    }


    moveLeft() {
      this.x -= 25;
    }

    moveRight() {
      this.x += 25;
    }

    draw() {
      ctx.drawImage(this.carImage, this.x, this.y, this.width, this.height);
    }
    newPos () {
      if(this.x<0){
          this.x=0;
      }
      if(this.x>=canvas.width-70){
          this.x =canvas.width-70;
      }
  
    }
    crashWith(enemy){
      return (this.bottom()> enemy.top() && 
      this.top() < enemy.bottom () &&
      this.right() > enemy.left() &&
      this.left() < enemy.right())
    }
  }

  const carImage = new Car();

  document.addEventListener('keydown', (e)=>{
    switch(e.keyCode){
      case 37:
          carImage.moveLeft();
          break;
      case 39:
          carImage.moveRight();
          break;
    }
    updateCanvas()
  })
  


  function updateCanvas(){
    ctx.clearRect(0,0,500,700);
    carImage.newPos();
    ctx.drawImage(background, 0, 0, 500, 700);
    carImage.draw();

  }

  function startGame() {
      updateCanvas();
  }


  
};
