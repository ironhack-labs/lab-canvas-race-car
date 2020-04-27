const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const car = {
  img: null,
  x: 208,
  y: 500,
  width: 0,
  height: 0,
  speed: 10,
  loadImg: function() {
    this.img = new Image();
    this.img.src = "images/car.png";
    this.width = 80;
    this.height = 170;
    this.img.onload = () => {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }
}

const obstacle = {
  x: 0,
  y: 0,
  creation: function() {
    randomX = Math.floor(Math.random() * canvas.width) + 0;
    let length = Math.floor(Math.random() * canvas.width/3) + 1;  

    ctx.lineWidth = 50;
    ctx.strokeStyle = "darkred";
    ctx.beginPath();
    ctx.moveTo(randomX, 0);
    ctx.lineTo(length, 0);
    ctx.stroke();

    obstacle.x += 100
  }
}

function startGame() {
  document.getElementById("game-board").style.visibility = "visible";
  car.loadImg();
  let newObstacle = setInterval(obstacle.creation, 5000); 

}

function updateGame() {  
  ctx.save();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(car.img, car.x, car.y, car.width, car.height);
  ctx.restore();
}

function keyboard(event) {
       
    if(event.code == "ArrowRight") {
      car.x += car.speed;
    }
    if(event.code == "ArrowLeft") {
      car.x -= car.speed;
    }

    if(car.x >= canvas.width - 80) {
      car.x = canvas.width - 80;
    } else if (car.x <= 0) {
      car.x = 0
    }
  
  updateGame();
}


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

document.onkeydown = keyboard;
  
};
