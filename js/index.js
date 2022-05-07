let frames = 0;
let count = 0;
obstaclesArray = [];

const parent = document.querySelector('div')

division = document.createElement('div')
division.innerHTML = `<div style="font-size:50px;color:red;margin-top: 90px;">
Your current score is: <span>${count}</span>
</div>`
division.className ="resultActive"

document.body.appendChild(division)


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Obstacles {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
  }
  draw() {
    this.y += 4;

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();
  }
}

class Vehicle {
  constructor() {
    this.x = 250;
    this.y = 550;
    //0,0 es el origen en canvas
    this.width = 100;
    this.height = 150;
    this.image = new Image();
    this.image.src = "images/car.png";
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  //función de colisión:

  collision(item) {
    return (
      this.x < item.x + item.width &&
      this.x + this.width > item.x &&
      this.y < item.y + item.height &&
      this.y + this.height > item.y
    );
  }
}

class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    //0,0 es el origen en canvas
    this.width = 500;
    this.height = 700;
    this.image = new Image();
    this.image.src = "images/road.png";
  }

  draw() {
    this.y++;

    if (this.y > canvas.height) {
      this.y = 0;
    }

    //se arma con (x,y,w,h)
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

    //ahora voy a colocar otro drawImage con otro valor

    ctx.drawImage(
      this.image,
      this.x,
      this.y - this.height,
      this.width,
      this.height
    );
  }

  gameOver() {
    ctx.font = "80px arial";
    ctx.fillText("Game over ", 52, 150);
  }
}

//draw Road
const road = new Background();

//draw car
const car = new Vehicle();

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
    //drawImage(image,x,y,w,h)
    /*     //music

    const music = new Audio('/audio/Top Gear - Track 1 (Super Nintendo).mp3');
music.play();
music.loop =true;
music.playbackRate = 2;
music.pause();qqazszdgfbgtyj

    // */
  };
};

function update() {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  road.draw();
  car.draw();
  generateObstacles();
  drawObstacles();
  points ()


  if (requestId) {
    requestAnimationFrame(update);
  }
}

  //una función para iniciar el juego
  function startGame() {
    requestId = requestAnimationFrame(update);
  }

function generateObstacles() {
  //voy a validar con los frames para que no se llene mi arrelgo desde el inicio.
  if (frames % 170 === 0 || frames % 60 === 0) {
    //aqui yo digo que en los frames 60 y 170 y sus multiplos en adelante, yo querré enemigos.
    let w = Math.floor(Math.random() * (500 - 10)) + 10;
    let x = Math.floor(Math.random() * (500 - 10)) + 10;
    if (w < 250 && x >= 65 && x < 300) {
      const obstacle = new Obstacles(x, 0, w, 50);
      obstaclesArray.push(obstacle);
    }
  }
}

function drawObstacles() {
  obstaclesArray.forEach((obstacle, index_obstacle) => {
    obstacle.draw();

    if (car.collision(obstacle)) {
      console.log("me está tocando");
      requestId = undefined;
      road.gameOver();
      
    }
  });
}

function points (){

  obstaclesArray.forEach((obstacle, index_obstacle)=>{
if(obstacle.y === canvas.height ){
count +=10}
  })

 division.innerHTML = `<p style="font-size:50px;color:red;margin-top: 90px;">
Your current score is: <span>${count}</span>
</p>`


}


addEventListener("keydown", (event) => {
  //izq a
  if (event.keyCode === 37 && car.x >= 70) {
    car.x -= 20;
    
  }
  //dere d
  if (event.keyCode === 39 && car.x < 350) {
    car.x += 20;
  }
});


