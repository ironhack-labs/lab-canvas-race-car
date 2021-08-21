window.onload = () => {
  document.getElementById('start-button').onclick = () => {
 /*    raceCap.init */
    startGame();
  }; 


    
  function startGame() {
    var myObstacles = [];
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
  
    // ***** CARRETERA ***** //
    // Creala imagen de carretera
    const roadImg = new Image(); 
    roadImg.src = '../images/road.png';
    // Pinta la imagen
    roadImg.onload = function() {
      ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
    };

    // ***** COCHE ***** //
    class Car {
      constructor() {
        this.x = (canvas.width/2)-40;
        this.y = (canvas.height)-200;
        
        // Creala imagen de coche
        const carImg = new Image();
        carImg.addEventListener('load', () => {
          // Pinta la imagen del coche
          this.carImg = carImg;
          this.draw();
        });
        carImg.src = '../images/car.png';
      }
    
      moveLeft() {
        this.x --;
      }
      moveRight() {
        this.x ++;
      }

      draw() {
        ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(this.carImg, this.x, this.y,  this.carImg.width/2, this.carImg.height/2);// imagen, posición X, posición Y, ancho y alto
        
      }
    }
    
    const car = new Car();
    
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 37: car.moveLeft();  console.log('left',  car); break;
        case 39: car.moveRight(); console.log('right', car); break;
      }
      updateCanvas();
    })


    // ***** OBSTACULOS ***** //
    let speed1 = 0;

    function drawObstacles(x, y, w, h, color) {
      speed1 += 1;
      ctx.fillStyle = color;
      ctx.fillRect(x, y, w, h);
      var minWidth = 20;
      var maxWidth = 400;
      var width = Math.floor(Math.random() * (maxWidth - minWidth+ 1) + minWidth)
      myObstacles = [];
      for (i = 0; i < myObstacles.length; i++) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
      }
      myObstacles.push(new Component(0, 0, width, 20, 'red'));

    }   



    // Retorna un entero aleatorio entre min (incluido) y max (excluido)
  // ¡Usando Math.round() te dará una distribución no-uniforme!

    // ***** UPDATE CANVAS ***** //
    function updateCanvas() {
    
      ctx.clearRect(0, 0, 500, 700);
      car.draw();
      // redraw the canvas
      
      drawObstacles(0, speed1, (Math.floor(Math.random() * (450 - 50)) + 50), 50, 'red');
      requestAnimationFrame(updateCanvas);
    }
    
    

   


    
    


  
    updateCanvas()
  
  }
};
