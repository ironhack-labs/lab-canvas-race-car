const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    draw()
    car()
  }
  
};

function draw() {


  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, 500, 700);
  ctx.fillStyle = 'grey';
  ctx.fillRect(50, 0, 400, 700);
  ctx.fillStyle = 'white';
  ctx.fillRect(60, 0, 10, 700)
  ctx.fillStyle = 'white';
  ctx.fillRect(430, 0, 10, 700)
  ctx.fillStyle = 'white';
  ctx.setLineDash([15, 15]);
  ctx.moveTo(250, 700);
  ctx.lineTo(250, 0);
  ctx.stroke();
  

}

function car(){
  const canvas = document.getElementById("canvas");
  const ctx    = canvas.getContext("2d");

  class Ghost {
    constructor() {
      this.x = 230;
      this.y = 600;

      const img = new Image();
      img.addEventListener('load', () => {
        this.img = img;
        this.draw();
      });
      img.src = "images/car.png";
    }
    moveLeft() {
      this.x -= 25;
    }
    moveRight() {
      this.x += 25;
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, 50, 80);
    }
  }

  const ghost = new Ghost();

  document.addEventListener('keydown', e => {
    switch (e.keyCode) {
      case 37: ghost.moveLeft();  console.log('left',  ghost); break;
      case 39: ghost.moveRight(); console.log('right', ghost); break;
    }
    updateCanvas();
  })

  function updateCanvas() {
    ctx.clearRect(0, 0, 0,0);
    //Se mueve y deja una estela de coches,
    // pero no consigo borrarla si pongo esto 
    //(0, 0, this.canvas.width, this.canvas.height), 
    //parece que si me borra la estela pero me borra tambien el fondo
    ctx.fillText(ghost.x, 580,40);
    ctx.fillText(ghost.y, 580,60);
    
    ghost.draw()
    
  }

  
}
updateCanvas()


// const myObstacles = [];

// const myGameArea = {
//   canvas: document.createElement("canvas"),
//   frames: 0,
//   start: function() {
//     this.canvas.width = 480;
//     this.canvas.height = 270;
//     this.context = this.canvas.getContext("2d");
//     document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//     this.interval = setInterval(updateGameArea, 20);
//   },
//   clear: function() {
//     this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//   },
//   stop: function() {
//     clearInterval(this.interval);
//   },
//   score: function() {
//     const points = Math.floor(this.frames / 5);
//     this.context.font = "18px serif";
//     this.context.fillStyle = "black";
//     this.context.fillText(`Score: ${points}`, 350, 50);
//   }
// };

// class Component {
//   constructor(width, height, color, x, y) {
//     this.width = width;
//     this.height = height;
//     this.color = color;
//     this.x = x;
//     this.y = y;
//     this.speedX = 0;
//     this.speedY = 0;
//   }

//   update() {
//     let ctx = myGameArea.context;
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   }

//   newPos() {
//     this.x += this.speedX;
//     this.y += this.speedY;
//   }

//   left() {
//     return this.x;
//   }
//   right() {
//     return this.x + this.width;
//   }
//   top() {
//     return this.y;
//   }
//   bottom() {
//     return this.y + this.height;
//   }

//   crashWith(obstacle) {
//     return !(
//       this.bottom() < obstacle.top() ||
//       this.top() > obstacle.bottom() ||
//       this.right() < obstacle.left() ||
//       this.left() > obstacle.right()
//     );
//   }
// }

// const player = new Component(30, 30, "red", 0, 110);

// function updateGameArea() {
//   myGameArea.clear();

//   player.newPos();
//   player.update();

//   updateObstacles();

//   checkGameOver();

//   myGameArea.score();
// }

// myGameArea.start();

// document.onkeydown = function(e) {
//   switch (e.keyCode) {
//     case 38: // up arrow
//       player.speedY -= 1;
//       break;
//     case 40: // down arrow
//       player.speedY += 1;
//       break;
//     case 37: // left arrow
//       player.speedX -= 1;
//       break;
//     case 39: // right arrow
//       player.speedX += 1;
//       break;
//   }
// };

// document.onkeyup = function(e) {
//   player.speedX = 0;
//   player.speedY = 0;
// };

// function updateObstacles() {
//   for (i = 0; i < myObstacles.length; i++) {
//     myObstacles[i].x += -1;
//     myObstacles[i].update();
//   }

//   myGameArea.frames += 1;
//   if (myGameArea.frames % 120 === 0) {
//     let x = myGameArea.canvas.width;
//     let minHeight = 20;
//     let maxHeight = 200;
//     let height = Math.floor(
//       Math.random() * (maxHeight - minHeight + 1) + minHeight
//     );
//     let minGap = 50;
//     let maxGap = 200;
//     let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
//     myObstacles.push(new Component(10, height, "green", x, 0));
//     myObstacles.push(
//       new Component(10, x - height - gap, "green", x, height + gap)
//     );
//   }
// }

// function checkGameOver() {
//   const crashed = myObstacles.some(function(obstacle) {
//     return player.crashWith(obstacle);
//   });

//   if (crashed) {
//     myGameArea.stop();
//   }
// }
