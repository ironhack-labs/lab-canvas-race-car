window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    
  };

  let myObstaculos =[]
  const canvas = document.getElementById('canvas');

  const ctx = canvas.getContext('2d');

  const img = new Image();
  img.src = './images/road.png';
  
 let velocidade = 0;

  
  function startGame() {

    const backgroundImage = {

      img: img,
      x: 0,
      y: 0,
      speed: 1,

      move: function () {
        this.y += this.speed;
        this.y %= canvas.height;
      },
      
      draw: function () {
        ctx.drawImage(this.img, this.x, this.y,500,700);
        if (this.speed < 0) {
          ctx.drawImage(this.img, 0, this.y + this.img.height)
        } else {
          ctx.drawImage(this.img, 0, this.y - canvas.height)
        }
      },
    };
    

    
    // function drawObstaculos(x,y,width,height){
    //   ctx.fillStyle = "red"
    //   ctx.fillRect(x,y,width,height)
    //    }

    // function updateObstaculos(){

    //  velocidade += 0.01;

    // ctx.clearRect(0, 0, 700, 450);

    // drawObstaculos(50,velocidade,400,25), 10
        
   
    
    // requestAnimationFrame(updateObstaculos)

    // }

  
    
    function updateCanvas() {
      
      backgroundImage.move();
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      backgroundImage.draw();
      
      ctx.fillText("Ghost_x: " + ghost.x, 500, 60);
      ctx.fillText("Ghost_y: " + ghost.y, 500, 60);
      // updateObstaculos();
      ghost.draw();
      
      requestAnimationFrame(updateCanvas)
    }
    updateCanvas();
  }

  class Ghost {
    constructor() {
      this.x = 250;
      this.y = 600;

      const img = new Image();
      img.addEventListener('load', () => {
        // Once image loaded => draw
        this.imge = img;
        this.draw();
      });
      img.src = "./images/car.png";
    }
    moveUp() {
      this.y -= 25;
    }
    moveDown() {
      this.y += 25;
    }
    moveLeft() {
      this.x -= 25;
    }
    moveRigth() {
      this.x += 25;
    }
    draw() {
      ctx.drawImage(this.imge, this.x, this.y, 50, 70);
    }
  }

  const ghost = new Ghost();

  document.addEventListener('keydown', e => {
    switch (e.keyCode) {
      case 38: ghost.moveUp(); console.log('up', ghost); break;
      case 40: ghost.moveDown(); console.log('down', ghost); break;
      case 37: ghost.moveLeft(); console.log('left', ghost); break;
      case 39: ghost.moveRigth(); console.log('right', ghost); break;
    }
    updateCanvas();
  });


}

