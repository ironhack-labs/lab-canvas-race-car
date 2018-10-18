var canvas = document.getElementById("game-board");
var ctx = canvas.getContext('2d');

class Player{
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 150;
    this.y = 400;
    this.width = 30;
    this.height = 60;
    this.score = 0;
    this.img = new Image();
    this.img.src = 'images/car.png';
  }

  move(direction) {
    var xMin = -this.width;
    var xMax = this.ctx.canvas.width
    switch (direction) {
      case "right":
        this.x += 5;
        if (this.x >= xMax) 
          this.x = xMin
        break;
      case "left":
        this.x -= 5;
        if (this.x <= xMin) 
          this.x = xMax
        break;
    }
  }

  draw(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
var p1 = new Player(ctx);

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    p1.draw();
  };

  function startGame() {
    var img = new Image();
    img.src = 'https://i.pinimg.com/originals/dd/0b/12/dd0b125832d6f243016b2bceba1d50e3.jpg';
    ctx.drawImage(img, 0, 0, 300, 500);
  }

  function drawEverything() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  
};

document.onkeydown = function (event) {
  event.preventDefault()
  switch (event.code) {
    case "ArrowRight":
      p1.move("right")
      break
    case "ArrowLeft":
      p1.move("left")
      break
  }
  console.log(event.code);

  update()
}