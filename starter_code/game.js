class Game {
  constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      //Canvas dimensions
      this.counter=0;
      this.car = {
          width:50,
          height:100,
          image: new Image(),
          CarX:175,
          CarY:400
      }
     this.ObstaclesArray=[];
     this.counterObstacles=0;
  }
  start() {
      this.canvas.setAttribute("width", `400px`);
      this.canvas.setAttribute("height", `600px`);
      this.intervalID = setInterval(() => {
          // this.clearCanvas();
          this.ctx.clearRect(0,0,400, 600)
          this.drawBackground();
          this.drawCar();
          this.obstacleCal(); 
          this.moveCar();
          this.drawObstacles();
          if (this.counterObstacles%200===0) {
              this.generateObstacles();
          }
          this.counterObstacles+=3;
          //if (this.endgame === true) {
          //clearInterval(intervalID);}
          this.counter-=3;
      }, 1000 / 60);
  }
  drawBackground() {
      this.ctx.fillStyle = "green";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = "grey";
      this.ctx.fillRect(25, 0, 350, this.canvas.height)
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(40, 0, 10, this.canvas.height)
      this.ctx.fillRect(350, 0, 10, this.canvas.height)
      this.ctx.beginPath();
      this.ctx.setLineDash([40, 30]);
      this.ctx.strokeStyle = "white";
      this.ctx.lineWidth = 7;
      this.ctx.moveTo(200, 0);
      this.ctx.lineTo(200, 600);
      this.ctx.lineDashOffset=this.counter;
      this.ctx.stroke();    
  }
  generateObstacles() {
          this.ObstaclesArray.push(
              new Obstacle (100,20,Math.floor(Math.random()*200),0)
          )
          console.log(this.ObstaclesArray)
  }
  obstacleCal() {
      this.ObstaclesArray.forEach(obstacle => {
              if ((this.car.CarX < obstacle.posX + obstacle.width) &&
                  this.car.CarX+ this.car.width > obstacle.posX  &&
                  this.car.CarY < obstacle.posY + obstacle.height &&
                  this.car.CarY + this.car.height > obstacle.posY) {
                      alert(`game Over`)
                  }
      } )
  }
  drawObstacles() {
      this.ObstaclesArray.forEach(obstacle => {
          console.log("entra")
          obstacle.posY++
          this.ctx.fillStyle="brown";
          this.ctx.fillRect(obstacle.posX,obstacle.posY,obstacle.width,obstacle.height,)
      });
  }
  // this.ctx.fillRect(obstacle.width,obstacle.height,obstacle.posX,obstacle.posY)
  drawCar() {
      this.car.image.src = "./images/car.png";
      this.ctx.drawImage(this.car.image ,this.car.CarX,this.car.CarY,this.car.width,this.car.height) ;
  }
  moveCar() {
      window.onkeydown = e => {
          if (e.keyCode === 39) {
              if (this.car.CarX>300) {
                   this.car.CarX=300;
              } else {
                  this.car.CarX+=10;
              }
          }
          else if (e.keyCode === 37) {
              if (this.car.CarX<50) {
                  this.car.CarX=50;
             } else {
                 this.car.CarX-=10;
             }
          }
      }
  }
}
class Obstacle {
  constructor(w,h,posX,posY) {
      this.width =w,
      this.height =h,
      this.posX = posX,
      this.posY= posY
  }
}
