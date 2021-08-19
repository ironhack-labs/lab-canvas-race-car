const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class Car {

  constructor () {
  this.carWidth = canvas.width/10;
  this.carHeight = canvas.height/8;
  this.carPositionX = (canvas.width/2) - (this.carWidth/2);
  this.carPositionY =  canvas.height - 130;

  const img = new Image();

  img.addEventListener('load', () => {
      this.img = img;
      setTimeout(() => {

      this.draw() },200 )
    });
    img.src = "/images/car.png";
  }
  moveLeft() {
    this.carPositionX -= 25;
  }
  moveRight() {
    this.carPositionX += 25;
  }
  draw() {
    ctx.drawImage(this.img, this.carPositionX, this.carPositionY, this.carWidth, this.carHeight);
  }
}


function clearCanvas(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
}




window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const road = new Image()
    road.src = "/images/road.png";

  
    setTimeout( () => {
     ctx.drawImage(road, 0,0, canvas.width, canvas.height);
    }, 100);

    const car = new Car()
    console.log(car)

    function updateCanvas(){
      clearCanvas();
      ctx.drawImage(road, 0,0, canvas.width, canvas.height)
      car.draw()
    }

    document.addEventListener('keydown', e => {
      switch (e.code) {
        case "ArrowLeft":
          car.moveLeft();
          console.log('left');
          break;
        case "ArrowRight":
          car.moveRight();
          console.log('right');
          break;
      }
      updateCanvas();
    });

  /*   function moveCar (direction) {
      
      carPositionX = carPosition + direction;

      clearCanvas();
 */
   /*    setTimeout( () => {
        drawCanvas()
      }, 500); */


 //     ctx.requestAnimationFrame(moveCar());
    }
  }

