window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  const game = {
    canvas: document.getElementById('canvas'),
    context: canvas.getContext('2d')
  };

  const car = {
    context: game.context,
    x: canvas.width / 2 - 26,
    y: (canvas.height / 4) * 3,
    moveLeft: function() { car.x -= 25 },
    moveRight: function() { car.x += 25 }
  }

  function startGame() {
  
    // Show road background
    const img = new Image();
    img.onload = function() {
      game.context.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    img.src = 'images/road.png';
    
    draw(car);
  }

  document.onkeydown = function(e) {
    switch (e.key) {
      case 'ArrowLeft': 
        car.moveLeft();  
        break;
      case 'ArrowRight': 
        car.moveRight();
        break;
    }
    updateCanvas();
  }
  
  function updateCanvas() {
    game.context.clearRect(canvas.width / 2 - 26, (canvas.height / 4) * 3, canvas.width, canvas.height);
    startGame();
    draw(car);
  }

  // Show car
  function draw(car) {
    const carImg = new Image();
    carImg.onload = function() {
      const ratio = carImg.width / carImg.height;
      const x = canvas.width / 2 - 26;
      const y = (canvas.height / 4) * 3;
      game.context.drawImage(carImg, x, y, ratio * 100, 100);
    }
    carImg.src = 'images/car.png';
  }




  // A partir de aquí, restos de lo que fui intentando y se acabó liando todo

  /*
  const game = {
    canvas: document.getElementById('canvas'),
    
    start: function () {
      this.context = canvas.getContext('2d');
      this.interval = setInterval(updateGame, 20);
    },

    clear: function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

  };

  class Car {
    constructor(x, y) {
      this.context = game.context;
      this.x = x;
      this.y = y;
      //this.x = canvas.width / 2 - car.width / 2;
      //this.y = (canvas.height / 4) * 3;
      //this.ratio = car.width / car.height;
      this.speedX = 0;
    }
    
    initCar() {
      const car = new Image();
      car.onload = function() {
        //const ratio = car.width / car.height;
        //const x = canvas.width / 2 - car.width / 2;
        //const y = (canvas.height / 4) * 3;
        // this.ratio * 100, 100
        game.context.drawImage(car, this.x, this.y, car.width, car.height);
      }
      car.src = 'images/car.png';
    }
    
    update() {
      let context = game.context;
      //this.updatePosition()
      context.fillRect(this.x, this.y, this.width, this.height);
    }

    moveLeft() { this.x -= 25 }
    moveRight() { this.x += 25 }
  }
  
  //const car = new Car(0, 0);
  
  function startGame() {
  
    const img = new Image();
    img.onload = function(){
      game.context.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    img.src = 'images/road.png';

    //car.initCar();
    //game.start();
  }

  /*
  document.onkeydown = function(e) {
    switch (e.key) {
      case ArrowLeft: 
        car.moveLeft(); 
        //console.log('left', car); 
        break;
      case ArrowRight: 
        car.moveRight(); 
        //console.log('right', car); 
        break;
    }
    //updateCanvas();
  }
  */
  /*
  function updateGame() {
    game.clear();
    car.update();
  }
  */

};
