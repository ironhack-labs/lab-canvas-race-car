const startButton = document.getElementById('start-button');
if (startButton) {
  startButton.addEventListener('click', e => {
    //use this instead of calling animate because it makes the browser wait for a good time to start rendering, if you called animate() it would render/attempt to render ASAP and maybe fuck shit up
    // GameBoard.init();
    gameboard.initGame();
  });
}

class Car  {
  constructor(gameboard, x, y, width, height) {
    this.ctx = gameboard.ctx;
    this.canvas = gameboard.canvas;
    this.canvasSize = {width: this.canvas.width, height: this.canvas.height};
    this.width = width;
    this.height = height;
    this.position = {x: x, y: y};
    this.velocity = {vX: 0, vY: 0};
    this.car = new Image();
    this.car.src = "./images/car.png";
  }

  drawCar() {
    this.ctx.drawImage(this.car, this.position.x, this.position.y, this.width, this.height);
  }
  moveLeft() {
    this.velocity.vX -= 0.7;
  }

  moveRight() {
    this.velocity.vX += 0.7; 
  }

  top() {
    return this.position.y;
  }

  bottom() {
    return this.position.y + this.height;
  }

  left() {
    return this.position.x;
  }

  right() {
    return this.position.x + this.width;
  }

  checkForCollisions(obstacle) {
    return !(this.bottom() < obstacle.top() || 
    this.top() > obstacle.bottom() || 
    this.right() < obstacle.left() || 
    this.left() > obstacle.right());
  }
}
  


class Obstacle {
  constructor(gameboard, width, height, x, y) {
    this.ctx = gameboard.ctx;
    this.canvas = gameboard.canvas;
    this.canvasSize = {width: this.canvas.width, height: this.canvas.height};
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }

  drawObstacle(){
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }
}

class GameBoard {
  constructor(){
    this.obstacles = [];
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext ? canvas.getContext('2d') : alert('upgrade now bish.');
    this.width = canvas.width;
    this.height = canvas.height;
    this.rafId = null;
    this.frames = 0;
    this.car = new Car(this, this.width/2 -25, this.height - 200, 50, 100);
  }
  initGame() {
    requestAnimationFrame(() => this.animate());
  }
  
  drawBackground(){
      //grey
      this.ctx.fillStyle = '#AFAFAF';
      this.ctx.fillRect(20, 0, this.width, this.height);
      //green
      this.ctx.strokeStyle = 'green';
      this.ctx.lineWidth = 50;
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(0, this.height);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo(this.width, 0);
      this.ctx.lineTo(this.width, this.height);
      this.ctx.stroke();
      //white
      this.ctx.beginPath();
      this.ctx.strokeStyle = 'white';
      this.ctx.lineWidth = 10;
      this.ctx.moveTo(30, 0);
      this.ctx.lineTo(30, this.height);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo(this.width - 30, 0);
      this.ctx.lineTo(this.width - 30, this.height);
      this.ctx.stroke();
      //dashed
      
      this.ctx.beginPath();
      this.ctx.lineWidth = 10;
      this.ctx.setLineDash([40, 30]);
      this.ctx.moveTo(this.width/2 - 5, 70);
      this.ctx.lineTo(this.width/2 - 5, this.height);
      this.ctx.stroke();
      this.ctx.setLineDash([]);
  }

  drawGameOver(){
    this.clearGameboard();
    const backgroundImg = new Image();
    backgroundImg.src = './images/car.png';
    
    let pattern = this.ctx.createPattern(backgroundImg, 'repeat');
    this.ctx.fillStyle = pattern;
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.ctx.beginPath();
    const points = Math.floor(this.frames / 100);
    this.ctx.fillStyle = 'black';
    this.ctx.font = 'bold 64px monospace';
    this.ctx.fillText(`YOU LOSE!`, 80, 200);
    this.ctx.fillText(`Oof, only:`, 50, 300); 
    this.ctx.fillText(`${points} points`,60 , 400); 
  }

  updateObstacles() {
    for (let obstacle of this.obstacles) {
      if (obstacle.y > this.height) {
        this.obstacles.splice(this.obstacles.indexOf(obstacle), 1);
        console.log(this.obstacles.indexOf(obstacle));
      }
    }
    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].y += 1;
      this.obstacles[i].drawObstacle();
    }
  
    this.frames += 1;

    if (this.frames % 160 === 0) {
      const y = this.height;
      const minWidth = 40;
      const maxWidth = 200;
      const width = Math.floor(
        Math.random() * (maxWidth - minWidth + 1) + minWidth
      );
      let minGap = 75;
      let maxGap = 200;
      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
      this.obstacles.push(new Obstacle(this, width, 10, 0, 60));
      this.obstacles.push(new Obstacle(this, y - width - gap, 10, width + gap, 60));
    }
  }

  animate() {
    this.drawBackground();
    this.scoreGame();
    this.updateObstacles();
    this.car.position.x += this.car.velocity.vX;
    if (this.car.position.x > 440 - 25) {
      this.car.position.x = 440 - 25;
      this.car.velocity.vX = 0;
    }
    if (this.car.position.x < 10 + 25) {
      this.car.position.x = 10 + 25;
      this.car.velocity.vX = 0;
    }
    this.car.drawCar(); 
    this.rafId = requestAnimationFrame(() => this.animate());
    this.checkGameOver();
  }

  clearGameboard() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  
  scoreGame() {
    const points = Math.floor(this.frames / 100);
    this.ctx.fillStyle = 'black';
    this.ctx.font = 'bold 36px monospace';
    this.ctx.fillText(`Your score is ${points}`, 80, 40);

  }
  checkGameOver() {
    const collision = this.obstacles.some(obstacle => this.car.checkForCollisions(obstacle));
    if (collision) {this.stopGame();} 
  }

  stopGame() {
    cancelAnimationFrame(this.rafId);
    this.drawGameOver();
  }
}

const gameboard = new GameBoard();

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft': // left arrow
    gameboard.car.moveLeft();
    break;
    case 'ArrowRight': // right arrow
    gameboard.car.moveRight();
    break;
  }
});


// function updateObstacles(gameboard) {
//   for (let obstacle of gameboard.obstacles) {
//     if (obstacle.y > this.canvasSize.height) {
//       gameboard.obstacles.splice(gameboard.obstacles.indexOf(obstacle), 1);
//       console.log(gameboard.obstacles.indexOf(obstacle));
//     }
//   }
//   for (i = 0; i < gameboard.obstacles.length; i++) {
//     console.log(gameboard.obstacles);
//     gameboard.obstacles[i].y += 1;
//     gameboard.obstacles[i].drawObstacle();
//   }

//   gameboard.frames += 1;

//   if (frames % 240 === 0) {
//     const y = gameboard.height;
//     const minWidth = 40;
//     const maxWidth = 200;
//     const width = Math.floor(
//       Math.random() * (maxWidth - minWidth + 1) + minWidth
//     );
//     let minGap = 75;
//     let maxGap = 200;
//     let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
//     gameboard.obstacles.push(new Obstacle(gameboard, width, 10, 0, 0));
//     gameboard.obstacles.push(new Obstacle(gameboard, y - width - gap, 10, width + gap, 0));
//   }
// }



// function animate() {
//   gameboard.drawBackground();
//   updateObstacles();
//   newCar.position.x += newCar.vX;
//   if (newCar.position.x > newCar.canvas.width / 2 + 140) {
//     newCar.position.x = newCar.canvas.width / 2 + 140;
//     newCar.vX = 0;
//   }
//   if (newCar.position.x < newCar.canvas.width / 2 - 180) {
//     newCar.position.x = newCar.canvas.width / 2 - 180;
//     newCar.vX = 0;
//   }
//   newCar.drawCar(); 
//   requestAnimationFrame(animate);
//   gameboard.checkGameOver();
// }





////////////////////////////////
// const canvas = document.getElementById('canvas');
// let canvasWidth = canvas.width;
// let canvasHeight = canvas.height;
// let ctx = null;
// let frames = 0;
// let obstacles = [];



// if (canvas.getContext) {
//   ctx = canvas.getContext('2d');
// } else {
//   // canvas-unsupported code here
//   alert('upgrade!!! nooowwww');
// }


// class Car {
//   constructor(x, y, canvasW, canvasH) {
//     this.width = 50;
//     this.height = 100;
//     this.canvas = {width: canvasW, height: canvasH};
//     this.position = {x: x, y: y};
//     //velocity
//     this.vX = 0;
//     this.vY = 0;
//     this.car = new Image();
//     this.car.src = "./images/car.png";
//   }
//   drawCar() {
//     ctx.drawImage(this.car, this.position.x, this.position.y, 50, 100);
//   }
//   moveLeft() {
//     this.vX -= 0.7;
//   }

//   moveRight() {
//     this.vX += 0.7; 
//   }
//   top() {
//     return this.position.y;
//   }
//   left() {
//     return this.position.x;
//   }
//   right() {
//     return this.position.x + this.width;
//   }
// }
  
// const newCar = new Car(canvasWidth/2 - 25, canvasHeight - 110, canvasWidth, canvasHeight);



// function clearGame(){
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
// }

// function animate() {
//   drawRoad();
//   updateObstacles();
//   newCar.position.x += newCar.vX;
//   if (newCar.position.x > newCar.canvas.width / 2 + 140) {
//     newCar.position.x = newCar.canvas.width / 2 + 140;
//     newCar.vX = 0;
//   }
//   if (newCar.position.x < newCar.canvas.width / 2 - 180) {
//     newCar.position.x = newCar.canvas.width / 2 - 180;
//     newCar.vX = 0;
//   }
//   newCar.drawCar(); 
//   requestAnimationFrame(animate);
//   gameOver();
// }


// function drawRoad () {
//   const road = new Image();
//       road.addEventListener('load', function() {
//         ctx.drawImage(road, 0, 0, 500, 700);
//       }, false);
//       road.src = "./images/road.png";
// }

// document.addEventListener('keydown', (e) => {
//   switch (e.key) {
//     case 'ArrowLeft': // left arrow
//     newCar.moveLeft();
//     break;
//     case 'ArrowRight': // right arrow
//     newCar.moveRight();
//     break;
//   }
// });

// class Obstacle {
//   constructor(width, height, x, y) {
//   this.width = width;
//   this.height = height;
//   this.x = x;
//   this.y = y;
//   }
//   drawObstacle(){
//     ctx.fillStyle = 'red';
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   }
// }

// function obstacleGarbageCollection() {
//   for (let obstacle of obstacles) {
//     if (obstacle.y > canvasHeight) {
//       obstacles.splice(obstacles.indexOf(obstacle), 1);
//       console.log(obstacles.indexOf(obstacle));
//     }
//   }
// }

// function checkCollision(obstacle) {
//   console.log('car right', newCar.right, 'obstacle', obstacle.height, obstacle.y)
//   return !(
//     newCar.right() >= obstacle.x &&  newCar.top() >= obstacle.y - obstacle.height|| 
//     newCar.left() <= obstacle.x - obstacle.width && newCar.top() >= obstacle.y - obstacle.height
//   );
// }

// function gameOver() {
//   const collision = obstacles.some(obstacle => checkCollision(obstacle));
//   if (collision) {alert('COLLISION');}
// }

// function updateObstacles() {
//   obstacleGarbageCollection();
//   for (i = 0; i < obstacles.length; i++) {
//     obstacles[i].y += 1;
//     obstacles[i].drawObstacle();
//   }
  

