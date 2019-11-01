const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
const width = context.canvas.width;
const height = context.canvas.height;

window.onload = function() {
    document.getElementById("start-button").onclick = function() {
      startGame();
    };
  
    function startGame() {
  
    }
  };
  
  
  function drawEverything() {
    drawingLines();
    drawImage();
    drawingObstacles ()
  }
  
  
  
  
  //middle short line
  function drawingLines(){
  
    //main road
    context.fillStyle = 'grey';
    context.fillRect(40, 0, 230, 600);
  
    //left line
    context.fillStyle = 'white';
    context.fillRect(55, 0, 5, 600);
  
    //right line
    context.fillStyle = 'white';
    context.fillRect(250, 0, 5, 600);
  
    //middle lines
    for (let i = 0; i < 600; i++) {
      context.fillStyle = 'white';
    context.fillRect(150, i * 50, 5, 30);
    }
  
  }
  
  
  
  
  
  // drawing the picture in the canvas
  
  function drawImage(){
  
    const bugatti = new Image();
    bugatti.src = 'images/car.png';
    
    bugatti.addEventListener('load', () => {
    context.drawImage(bugatti, car.position, 520, 40, 80);
  });
  };
  
  
  function drawingObstacles () {
    context.fillStyle = 'brown';
    context.fillRect(65, 30, 100, 30);
  
    context.fillRect(130, 200, 120, 30);
  
    context.fillRect(110, 300, 140, 30);
  
    context.fillRect(65, 450, 100, 30);
  }
  
  class Car {
    constructor(){
      this.position = (width / 2) - 40;
    }
  
    moveLeft(){
      if (this.position > 40){
        this.position --;
      } else {
        this.position = 40;
      }
    }
  
    moveRight(){
      if(this.position > 40){
      this.position++;
    } else {
      this.position = 40;
    }
  }
  }
  
  const car = new Car();
  
  
  
  // making the car move with the right the left keyboard keys
  
  window.addEventListener('keydown', (e) => {
    // Stop the default behavior (moving the screen to the left/up/right/down)
    event.preventDefault();
  
    // React based on the key pressed
    switch (e.keyCode) {
        case 37:
            //context.clearRect(car.position, 0, 0, 0);
            car.moveLeft();
            drawEverything();
            console.log('left');
            break;
        case 39:
            //context.clearRect(car.position, 0, 0, 0);
            car.moveRight();
            drawEverything();
            console.log('right');
            break;
    }
  });
  
  drawEverything();
  