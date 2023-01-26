const myGameArea = {
  canvas: document.createElement("canvas"),
  components: [],
  obstacleComponents: [],
  start: function () {
    this.canvas.width = 500;
    this.canvas.height = 700;
    this.context = this.canvas.getContext("2d");
    const gameBoard = document.getElementById("game-board");
    gameBoard.appendChild(this.canvas);
  },
  update: function () {
    myGameArea.components.forEach((component) => {
      component.render();
    });
    myGameArea.obstacleComponents.forEach((obstacle) => {
      if (obstacle.checkCollision(player)) {
        myGameArea.isGameOver = true;
        myGameArea.context.clearRect(
          0,
          0,
          myGameArea.canvas.width,
          myGameArea.canvas.height
        );
        const gameBoard2 = document.getElementById("game-board");
        gameBoard2.classList.add("gameover");
        gameBoard2.innerHTML = "Game-Over";
      }
      obstacle.y += 1;
      obstacle.render();
    });

    myGameArea.context.fillText(`Score: ${score}`, myGameArea.canvas.width - 150, 20)

  },
};

class Component {
  constructor(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    if (color) this.color = color;
  }

  render() {
    const ctx = myGameArea.context;
    if (this.img) {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    } else {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.w, this.h);
    }
  }

  checkCollision(otherComponent) {
    if (
      this.x < otherComponent.x + otherComponent.w &&
      this.x + this.w > otherComponent.x &&
      this.y < otherComponent.y + otherComponent.h &&
      this.y + this.h > otherComponent.y
    ) {
      return true;
    } else {
      return false;
    }
  }
}

class Player extends Component {
  constructor(x, y, w, h, img) {
    super(x, y, w, h);
    this.img = new Image();
    this.img.src = "../images/car.png";
  }
  moveLeft() {
    if (this.x <= 70) {
      this.x;
    } else {
      this.x -= 10;
    }
  }
  moveRight() {
    if (this.x >= 380) {
      this.x;
    } else {
      this.x += 10;
    }
  }
}

class Background extends Component {
  constructor(x, y, w, h, img) {
    super(x, y, w, h);
    this.w = w;
    this.h = h;
    this.img = new Image();
    this.img.src = "../images/road.png";
  }
}
class Obstacles extends Component {
  constructor(x, y, w, h, color) {
    super(x, y, w, h, color);
    this.w = w;
    this.h = h;
    this.color = "red";
  }
}





document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "Left": // IE/Edge specific value
    case "ArrowLeft":
      player.moveLeft();
      break;
    case "Right": // IE/Edge specific value
    case "ArrowRight":
      player.moveRight();
      break;
    case "Enter":
      // Do something for "enter" or "return" key press.
      break;
    case "Esc": // IE/Edge specific value
    case "Escape":
      // Do something for "esc" key press.
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }
});

let player, background

document.getElementById("start-button").addEventListener("click", (event) => {
  myGameArea.start();

  background = new Background(
    0,
    0,
    myGameArea.canvas.width,
    myGameArea.canvas.height
  );
  myGameArea.components.push(background);

  player = new Player(220, 600, 60, 100);
  myGameArea.components.push(player);

  function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // random function created to create a number between minimum and maximum

  setInterval(() => {
    let randomX = entierAleatoire(80, 180);
    let randomWidth = entierAleatoire(100, 230);

    let obstacle = new Obstacles(randomX, 0, randomWidth, 30, "red");
    myGameArea.obstacleComponents.push(obstacle);
  }, 4000);

  setInterval(myGameArea.update, 1000 / 60);

  scoreTrack()

})

let score = 0

function scoreTrack() {
  if (myGameArea.isGameOver) {
    return;
  } else {
    score++
    if (score) setTimeout(scoreTrack, 500);
  }
}