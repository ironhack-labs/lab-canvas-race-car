window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  let roadImg = new Image();
  roadImg.src = 'images/road.png';

  let carImg = new Image();
  carImg.src = 'images/car.png';

  let car = {
    x: 300,
    y: 500,
    width: 50,
    height: 100,
    speed: 20,

    img: carImg,

    rightArrowPressed: function() {
      this.x += 25;
    },
    leftArrowPressed: function() {
      this.x -= 25;
    },

    update: function() {
      ctx.drawImage(car, this.x, this.y, this.width, this.height);
    }
  };

  let frameCounter = 0;

  function startGame() {
    draw();
  }

  let gameRunning = true
  //called 60 times per seconds
  let draw = () => {
    // ctx.clearRect(0, 0, canvas.width, canvas.height)
    frameCounter++;
    ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(car.img, car.x, car.y, 60, 120);

    // drawing some helper output to see the output how often it renders
    ctx.font = '30px Arial';
    ctx.fillStyle = 'blue';
    ctx.fillText(`frame counter: ${frameCounter}`, 0, 50);
    if (gameRunning){
      window.requestAnimationFrame(draw)
    } 
  };


  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 39:
        car.rightArrowPressed();
        break;
      case 37:
        car.leftArrowPressed();
        break;
    }
    update();
  };
};
