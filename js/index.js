



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

    let keyflagLeft = false
    let keyflagRight = false


    document.addEventListener("keydown", event => {
      if (event.keyCode === 37) {
        keyflagLeft = true;
        //x-=10
      }
      if (event.keyCode === 39) {
        keyflagRight = true;
        //x+=10
      }

      console.log(x);
    });

    document.addEventListener("keyup", event => {
      if (event.keyCode === 37) {
        keyflagLeft = false;
        //x-=10
      }
      if (event.keyCode === 39) {
        keyflagRight = false;
        //x+=10
      }

      console.log(x);
    });    

    let obs = {
      speedX: 6,
      posX: 100,
      posY: 0,
    }

    let bG ={
      speedX: 3,
      posX: 0,
      posY: 0,
    }

    function move () {
      bG.posY += bG.speedX;
      bG.posY %= 700;
    }

    function moveobs () {
      obs.posY += obs.speedX;
      obs.posY %= 1400;
      if(obs.posY >= 700 && frameCounter % 120 === 0){
      obs.posX = Math.floor(Math.random() * 400);
      }
    }

    function security () {
      if(x <=35){
        keyflagLeft = false
      } else if (x >= 365){
        keyflagRight = false
      }
    }

    let frameCounter = 0

    // 60 times per second
    let draw = () => {
      frameCounter++
      // one second has passed
      

      if (keyflagLeft) {
        x -= 5
      }
      if (keyflagRight) {
        x += 5
      }

      ctx.clearRect(0, 0, 500, 700)
      move ()
      moveobs ()
      security ()
      ctx.drawImage(img, bG.posX, bG.posY-700,500,700);
      ctx.drawImage(img, bG.posX, bG.posY,500,700);
      ctx.drawImage(img2, x, 500,80,160);
      
      ctx.fillRect(obs.posX, obs.posY, 180, 30)
      requestAnimationFrame(draw)
    }
    draw()
    ;
  }
  
};

