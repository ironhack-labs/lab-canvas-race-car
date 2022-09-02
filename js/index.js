window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

    
    const roadImg = new Image();
    roadImg.src = './images/road.png';

    const carImg = new Image();
    carImg.src = './images/car.png';

    let roadX = 0;
    let roadY = 0;

    let carX = 225;
    let carY = 450;
    
    const theCanvas = document.getElementById('canvas');
    const ctx = theCanvas.getContext('2d');

    ctx.drawImage(roadImg, roadX, roadY, 500, 700);
    ctx.drawImage(carImg, carX, carY, 50, 100);



    class Obstacles {
      constructor (width, height, color, y, ctx) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.x = Math.floor(Math.random() * theCanvas.width + 1);
      this.y = y;
      this.ctx = ctx;
    }

    draw() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  // const oneObstacles = new Obstacles(50, 10, 'black', 0, ctx);

  
  const myObstacles = [];




    
    let frame = 1;
    function update() {
      frame += 1;
      if (frame % 50 == 0) {
        myObstacles.push(new Obstacles(50, 10, 'black', 0, ctx));
        //console.log(myObstacles);
      }

      


      ctx.clearRect(0, 0, theCanvas.width, theCanvas.height);
      ctx.drawImage(roadImg, roadX, roadY, 500, 700);
      ctx.drawImage(carImg, carX, carY, 50, 100);
      
      let counter = 0;
      for (let i = 0; i < myObstacles.length; i++){
        myObstacles[i].draw();
        myObstacles[i].y++;

      
        if (myObstacles[i].y > 700) {
          
          counter = counter + 1;
          //console.log(counter);
          ctx.clearRect(0, 0, 50, 50);
          ctx.strokeText(`Points ${counter}`, 5, 20);
        }
      


        //if ((((carX + 50) < myObstacles[i].x) && (carX > (myObstacles[i].x +50)))) {

          if ((carY == myObstacles[i].y) && ((carX > myObstacles[i].x) || ((carX + 50) < (myObstacles + 50)))){

          console.log('crash')
}


//((carY + 100) < myObstacles[i].y) || (carY > (myObstacles[i] + 10))
        
      }

  
      
      requestAnimationFrame(update);
    }




    



    window.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          carX -= 10;
          if (carX < 0) {
            carX = 0;
          }
          console.log('move left');
          break;
        case 'ArrowRight':
          carX += 10;
          if (carX + 50 > theCanvas.width) {
            carX = 450;
          }
          //console.log('move right');
          //console.log(carX);
          break;
      }
    });
    update(); 
  

    
  };
  






};
