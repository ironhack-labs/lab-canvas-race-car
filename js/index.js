window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case 'a':
      case "ArrowLeft":
        player.moveLeft();
        break;
      case 'd':
      case 'ArrowRight':
        player.moveRight();
        break
    }
  })

  function startGame() {
    updateCanvas();
  }

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext('2d');
  let animationId = null;
  const marginLeft = 60;
  const marginRight = canvas.width - marginLeft


  function updateCanvas() {
    clearCanvas();
    background.draw();
    player.draw();
    animationId = requestAnimationFrame(updateCanvas);
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  class Background {
    constructor(source) {
      this.posX = 0;
      this.posY = 0;

      const img = new Image();
      img.src = source;
      img.onload = () => {
        this.img = img;
      }
    }
    draw() {
      ctx.drawImage(this.img, this.posX, this.posY, canvas.width, canvas.height);
    }
  }
  const background = new Background('./images/road.png')

  class Car {
    constructor(source, x, y, w, h) {
      this.posX = x,
        this.posY = y,
        this.width = w;
      this.height = h;

      const img = new Image();
      img.src = source;
      img.onload = () => {
        this.img = img;
      }
    }
    draw() {
      ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height);
    }
    moveLeft() {
      if (this.posX > 60) {
        this.posX -= this.speed;
      }
    }
    moveRight() {
      if (this.posX < canvas.width - 60 - this.width) {
        this.x += this.speed;
      }
    }
  }
  const player = new Car('./images/car.png', 210, 500, 80, 160);

  class Obstacle {
    constructor(x, w) {
      this.posX = x;
      this.posY = 0;
      this.width = w;
      this.height = 60;
      this.speed = 10;
    }
    draw() {
      ctx.fillStyle = 'brown';
      ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }
    move() {
      this.posY += this.speed;
    }
  }
  const obstacles = [];

  function createObstacle() {
    const minWidth = player.width; //tamanho mínimo
    const maxWidth = marginRight - marginLeft - player.width - 20; // tamanho máximo
    const width = Math.floor(Math.random() * (maxWidth - minWidth)) * minWidth;

    const posX = Math.floor(Math.random() * maxWidth) + marginLeft;

    obstacles.push(new Obstacle())
  }

  function updateObstacle() {
    obstacles.forEach((obstacle) => {
      obstacle.movr();
      obstacle.draw();
    })
    if (frames % 90 === 0) {

    }
  }
}