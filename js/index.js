const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

//start game funcion - it's called on window.onload
//should load the background road image & player
function startGame() {
  background.drawBck();
  player1.drawPlayer();
}

//background class
class Background {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.bckImg = new Image();
    this.bckImg.src = "./../images/road.png";
  }

  drawBck() {
    this.bckImg.onload = () => {
      ctx.drawImage(this.bckImg, this.x, this.y, this.width, this.height);
    };
  }
}

let background = new Background(0, 0, width, height);

//car class
class Player {
  constructor(x, y, width, height) {
    this.img = new Image();
    this.img.src = "./../images/car.png";
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  drawPlayer() {
    this.img.onload = () => {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
  }

  clearCanvas() {
    ctx.clearRect(0, 0, this.width, this.height);
  }

  //car moves
  // moveUp() {
  //   this.clearCanvas();
  //   this.y--;
  //   this.drawPlayer();
  // }

  // moveRight() {
  //   this.clearCanvas();
  //   this.x++;
  //   this.drawPlayer();
  // }

  // moveDown() {
  //   this.clearCanvas();
  //   this.y++;
  //   this.drawPlayer();
  // }

  // moveLeft() {
  //   this.clearCanvas();
  //   this.x--;
  //   this.drawPlayer();
  // }
}

let player1 = new Player(0, 0, 75, 150);
