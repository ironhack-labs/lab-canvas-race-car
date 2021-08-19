window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  }; 
    
  function startGame() {

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
        this.x = 210;
        this.y = 500;
        
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
        ctx.drawImage(this.carImg, this.x, this.y,  this.carImg.width/2, this.carImg.height/2);
        
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

    // ***** UPDATE CANVAS ***** //
    function updateCanvas() {
    
      ctx.clearRect(0, 0, 500, 700);
      car.draw()
    }
    
    updateCanvas()

   


    
    


  
  
  
  }
};
