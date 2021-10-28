const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

let background = new Image();
background.src = "../images/road.png";

let imageCar = new Image();
imageCar.src = "../images/car.png";

class Car{
  constructor(){
    this.x = 225;
    this.y = 610;
    this.speedX = 0;
    this.width = 50;
    this.height = 70;
  }

}

const car = new Car();

document.addEventListener('keydown', (event)=>{
  if(event.key === "ArrowRight"){
    car.speedX = 3;  
    console.log("+1D")
    console.log(car.speedX);
  } else if(event.key === "ArrowLeft"){
    car.speedX = -3;  
    console.log("+1I")
  }
})



document.addEventListener('keyup', (event)=>{
  if(event.key === "ArrowRight" || event.key === "ArrowLeft"){
    car.speedX = 0
  }
  if(event.key === "ArrowUp" || event.key === "ArrowDown"){
    car.speedX = 0
  }
})

const updateCar = ()=>{
  car.x = car.x + car.speedX;
  //checkIfInBounds()
}

const drawCar = ()=>{
  ctx.drawImage(imageCar, car.x,car.y,car.width,car.height);
}
const drawBackGround =()=>{
  ctx.drawImage(background,0,0,500,700)
}

const clearCanvas = ()=>{
  ctx.clearRect(100, 610, 100,70)
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    //ctx.drawImage(background,0,0,500,700);
    //drawCar();
    //ctx.drawImage(imageCar, car.x,car.y,car.width,car.height);
  }
};

const updateCanvas = ()=>{ 
  clearCanvas()
  updateCar();
  drawBackGround();
  drawCar();
  requestAnimationFrame(updateCanvas); 
}

updateCanvas();