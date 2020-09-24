

/*const backgroundImage = {
  img: img,
  x: 0,
  speed: 1,

  move: function() {
    this.x += this.speed;
    this.x %= canvas.width;
  },

  draw: function() {
    ctx.drawImage(this.img, this.x, 0);
    if (this.speed < 0) {
      ctx.drawImage(this.img, this.x + canvas.width, 0);
    } else {
      ctx.drawImage(this.img, this.x - this.img.width, 0);
    }
  },
};

function updateCanvas() {
  backgroundImage.move();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();

  requestAnimationFrame(updateCanvas);
}

// start calling updateCanvas once the image is loaded
img.onload = updateCanvas;

*/

const ctx  = document.getElementById('canvas').getContext('2d');
const img = new Image();
img.src = "./images/road.png";
const img2 = new Image();
img2.src = "./images/car.png";

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
     let x = 200;
    ctx.drawImage(img, 0, 0,500,700);
    ctx.drawImage(img2, x, 400,100,200);


   let isKeyPressedLeft = false
    
    document.addEventListener("keydown", event => {
      if (!keyflag || event.keyCode === 37) {
        keyflag = true;
        x-=5
      }
      if (!keyflag || event.keyCode === 39) {
        keyflag = true;
        x+=5
      }

      console.log(x);
    });

    let obstacle = {
      speedX: 5,
      posX: 10,
      posY: 10
    }

    let frameCounter = 0

    // 60 times per second
    let draw = () => {
      frameCounter++
      // one second has passed
      if (frameCounter >= 60) {
        obstacle.posY += obstacle.speedX
        obstacle.posx += 0.2
      }
      ctx.clearRect(0, 0, 500, 700)
      ctx.drawImage(img2, x, 400,100,200);
      ctx.drawImage(img, 0, 0,500,700);
      ctx.drawImage(img2, x, 400,100,200);
      ctx.fillRect(obstacle.posX, obstacle.posY, 100, 100)
      requestAnimationFrame(draw)
    }
    draw()
  }
  
};

