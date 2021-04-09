window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  const ctx = document.getElementById("canvas").getContext('2d');

  //class for the road 
  class Field{
    constructor(x,y, width, height){
      this.img = new Image();
      this.img.src="/images/road.png";
      this.width = width;
      this.height = height;
      this.x = x,
      this.y = y;
    }

    drawRoad(){
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
  }

//class for the player 
  class Player {
    constructor(x, y, width, height){
      this.img = new Image();
      this.img.src="/images/car.png";
      this.width = width;
      this.height = height;
      this.x = x,
      this.y = y;
      this.velocity = 4;
    }

    drawCar(){
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    moveRight(){
      this.x += this.velocity;
    }

    moveRight(){
      this.y  -= this.velocity;
    }

    offRoad(){
      if(this.x<50){
        this.x=50
      } else if(this.x + this.width > 400){
        this.x = 400 - this.width;
      }
    }
  }

  //class for the walla
  class Obstacle{
    constructor(x, width){
      this.x = x;
      this.y = 0;
      this.width = width;
    }

    drawWall(){
      ctx.fillStyle = rgb(250, 100, 100);
      ctx.fillRect(this.x, this.y, this.width, 50);
    }
  }

  //and now lets create and move things around
  let road = new Field(0,0, 500, 700);
  let car1 = new Player(230, 600, 50, 70);

  function startGame() {
    ctx.clearRect(0,0, ctx.width, ctx.height)
    road.drawRoad();
    car1.drawCar();
   
  }

  document.addEventListener('keydown', function (event){
    switch (event.code){
      case "ArrowLeft":
        car1.moveLeft()
      break;
      case "ArrowRight":
        car1.moveRight()
      break;
      default:
        return
    } 
    car1.offRoad()
  })
};

