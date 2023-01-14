window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};

canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

background = new Image();
background.src = './images/road.png';

background.onload = function() {
  ctx.drawImage(background, 0, 0);
}

class Car {
  constructor() {
    this.x = 115;
    this.y = 300;
    this.width = 50;
    this.height = 100;
    this.image = new Image();
    this.image.src = './images/car.png';
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  load() {
    this.image.onload = () => {
        this.draw();
    };
  }
}

class Obstacle {
  constructor() {
    this.x = 100;
    this.y = -50;
    this.width = 100;
    this.height = 10;
    this.fill = 'red';
  }

    draw() {
      ctx.fillStyle = this.fill;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }

  load() {
    this.image.onload = () => {
        this.draw();
    };
  }
}

const car = new Car();
car.load();
let obstacles = []; // array to store all obstacles


function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0);
  car.draw();
    // move and redraw all obstacles
    for (let i = 0; i < obstacles.length; i++) {
      obstacles[i].y += 5; // move obstacle down by 5 pixels
      obstacles[i].draw();
    }
  // remove obstacles that have gone off the bottom of the canvas
  obstacles = obstacles.filter(obstacle => obstacle.y < canvas.height);
}


setInterval(() => {
  obstacles.push(new Obstacle());
}, 2000);


document.onkeydown = e => {
  switch (e.keyCode) {
    case 37: // left arrow
      if(car.x > 30)
      car.x -= 10;
      break;
    case 39: // right arrow
      if(car.x < 200)
      car.x += 10;
      break;
  }
  update();
}

setInterval(update, 1000/60); // call the update function every 1000/60 milliseconds



