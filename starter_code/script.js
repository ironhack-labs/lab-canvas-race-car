let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let interval, frames;

const colors = {
  green: "rgb(0, 126, 10)",
  gray: "rgb(127, 127, 127",
  white: "rgb(255, 255, 255)"
};

class Background {
  draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // first green section
    ctx.fillStyle = colors.green;
    ctx.fillRect(0, 0, 40, canvas.height);
    // first gray line
    ctx.fillStyle = colors.gray;
    ctx.fillRect(40, 0, 10, canvas.height);
    // track
    ctx.fillRect(60, 0, 280, canvas.height);
    // second gray line
    ctx.fillRect(350, 0, 10, canvas.height);
    // second green section
    ctx.fillStyle = colors.green;
    ctx.fillRect(360, 0, 40, canvas.height);
    // middle line
    ctx.beginPath();
    ctx.strokeStyle = colors.white;
    ctx.lineWidth = 5;
    ctx.moveTo(200, 0);
    ctx.lineTo(200, canvas.height);
    ctx.setLineDash([20, 20]);
    ctx.stroke();
  }
}

class Car {
  constructor() {
    this.image = new Image();
    this.image.src = "./images/car.png";
    this.width = 30;
    this.height = 60;
  }

  draw() {
    ctx.drawImage(this.image, 185, canvas.height - this.height - 10, this.width,this.height);
  }
}

let fondo = new Background();
let auto = new Car();

window.onload = function() {
  fondo.draw();
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    inteval = setInterval(() => {
      frames++;
      auto.draw();
    }, 1000 / 60);
  }
};
