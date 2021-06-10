const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let obstacles = [];
document.getElementById("start-button").onclick = () => {
  startGame();
  gameArea.start();
};
function startGame() {
  canvas.classList.add("back");
  gameArea.clear();
  ferrari.draw();
  updateObstacles();
  checkGameOver();
  gameArea.score();
}

const gameArea = {
  frames: 0,
  start: function () {
    this.interval = setInterval(startGame, 10);
  },
  clear: function () {
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  },
  stop: function () {
    
    clearInterval(this.interval);
  },
  score: function(){
    let points = 0;
    points = Math.floor(this.frames/12)
    context.font = "15px Arial"
    context.fillStyle = "black"
    context.fillText(`Score: ${points}`, 420, 30)
    
    context.beginPath();
    context.moveTo(418, 35);
    context.lineTo (418, 15);
    context.lineTo(495, 15)
    context.lineTo(495, 35);
    context.strokeStyle = "black";
    context.closePath()
    context.stroke()
  }
};
class Car {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    const image = new Image();
    image.src = "./images/car.png";
    image.onload = () => {
      //needs to be arrow function because of the scope. if it was function() it couldn't access the this.
      this.image = image;
      this.draw();
    };
  }
  draw() {
    context.drawImage(this.image, this.x, this.y, 50, 100);
  }
  moveLeft() {
    if (this.x > 75) {
      this.x -= 25;
    }
  }
  moveRight() {
    if (this.x < 375) {
      this.x += 25;
    }
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + 50;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + 100;
  }

  crashWith(component) {
    return !(this.bottom() < component.top() || //Procura por quando não bate e aí usa o ! para achar o contrário disso que é quando bate
      this.top() > component.bottom() ||
      this.right() < component.left() ||
      this.left() > component.right());
  }
}
class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }
  //We dont need the onload cause its just a square
  update() {
    context.fillStyle = this.color; //Those both were made just to fill and build the class
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width; //Vai ser o ponto do X + o tamanho dele, ou seja, a outra ponta
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
}

function updateObstacles() {
  obstacles.forEach((obstacle) => {
    obstacle.y += 3;
    obstacle.update();
  });
  gameArea.frames += 1;
  if (gameArea.frames % 120 === 0) {
    const minWidth = 120;
    const maxWidth = 225;
    const randomWidth = Math.floor(
    Math.random() * (maxWidth - minWidth + 1) + minWidth);
    const randomX = Math.floor(Math.random() * (195 - 75 +1) + 75)
    
    //First obstacle

    const firstObs = new Component(randomWidth, 30, "red", randomX, 0);
    obstacles.push(firstObs);
  }
}

function checkGameOver (){
  const crashed = obstacles.some((obstacle)=> {
    return ferrari.crashWith(obstacle) === true
  })
  if (crashed){
    gameArea.stop()
  }
}

document.addEventListener("keydown", (e) => {
  // console.log(e);
  switch (e.key) {
    case "ArrowLeft": //left cursor key;
      ferrari.moveLeft();
      break;
    case "ArrowRight": //right cursor key;
      ferrari.moveRight();
      break;
  }
  context.clearRect(0, 0, canvas.width, canvas.height);
  ferrari.draw();
  
});

const ferrari = new Car(225, 590);
