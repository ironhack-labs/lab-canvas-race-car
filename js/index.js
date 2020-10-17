window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const img = new Image();
    img.src = 'images/road.png';

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

     const backgroundImage = {
      img: img,
      x:125,
      y:0,
      speed: -1,

     move: function() {
      this.y += this.speed;
      this.y %= canvas.height;
      },

    draw: function() {
    ctx.drawImage(this.img, 125, this.y);
      ctx.drawImage(this.img, 125, this.y + canvas.height);
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
  }
};

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38: car.moveUp();    console.log('up',    car); break;
    case 40: car.moveDown();  console.log('down',  car); break;
    case 37: car.moveLeft();  console.log('left',  car); break;
    case 39: car.moveRight(); console.log('right', car); break;
  }
  updateCanvas();
}

function draw(car) {
  var car = {
    x: 125,
    y: 100,
    moveUp:    function() { this.y -= 25 },
    moveDown:  function() { this.y += 25 },
    moveLeft:  function() { this.x -= 25 },
    moveRight: function() { this.x += 25 },
  }
  
  var img = new Image();
  img.onload = function() {
     ctx.drawImage(img, car.x, car.y, 50, 50);
  }
  img.src = "images/car.png";
}