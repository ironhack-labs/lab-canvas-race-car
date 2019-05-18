//canvas

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//variables
var frames = 0;
var fondo = "img/wallpaper.jpg";
var mario = "https://bit.ly/2L7yH3f";
var goomba = "img/GoombaNSMB.png";
var enemies = [];

//constructores
function Background() {
  this.x = 0;
  this.y = 0;
  this.width = canvas.width;
  this.height = canvas.height;
  this.imagen = new Image();
  this.imagen.src = fondo;
  this.imagen.onload = function() {
    this.draw();
  }.bind(this);

  this.draw = function() {
    ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height);
  };
}

function Heroe() {
  this.x = canvas.width / 8;
  this.y = canvas.height - 64;
  this.width = 64;
  this.height = 64;
  this.imagen = new Image();
  this.imagen.src = mario;
  this.imagen.onload = function() {
    this.draw();
  }.bind(this);

  this.draw = function() {
    if (this.x < 0) this.x = 0;
    if (this.x > canvas.width) this.x = canvas.width - 8;
    ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height);
  };

  this.checkIfTouch = function(enemy) {
    return (
      this.x < enemy.x + enemy.width &&
      this.x + this.width > enemy.x &&
      this.y < enemy.y + enemy.height &&
      this.y + this.height > enemy.y
    );
  };
}

function Enemy(x) {
  this.x = x;
  this.y = 0;
  this.width = 54;
  this.height = 54;
  this.imagen = new Image();
  this.imagen.src = goomba;
  this.imagen.onload = function() {
    this.draw();
  }.bind(this);

  this.draw = function() {
    this.y++;
    ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height);
  };
}

//instancias
var board = new Background();
var mario = new Heroe();

var enemy1 = new Enemy(0);
var enemy2 = new Enemy(128);
var enemy3 = new Enemy(384);

//main functions
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  frames++;
  board.draw();
  mario.draw();
  generateEnemy();
  drawEnemies();
  checkCollition();
}

function start() {
  interval = setInterval(update, 1000 / 60);
}

function gameOver() {
  clearInterval(interval);
  ctx.font = "50px Avenir";
  ctx.fillStyle = "white";
  ctx.fillText("GAME OVER", 170, 100);
  ctx.fillText(enemies.length, 310, 150);
}

//aux functions
function generateEnemy() {
  if (frames % 64 === 0) {
    const x = Math.floor(Math.random() * 8);
    enemies.push(new Enemy(x * 64));
  }
}

function drawEnemies() {
  enemies.forEach(function(enemy) {
    enemy.draw();
  });
}

function checkCollition() {
  enemies.forEach(enemy => {
    if (mario.checkIfTouch(enemy)) {
      gameOver();
    }
  });
}

//listeners

addEventListener("keydown", function(e) {
  if (e.keyCode === 37) {
    if (mario.x <= 0) return;
    mario.x -= 64;
  }
  if (e.keyCode === 39) {
    if (mario.x >= canvas.width - 64) return;
    mario.x += 64;
  }
});

start();
