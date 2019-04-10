window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  
  function startGame() {

    var img = new Image();
img.src = 'images/newroad.png';
var carPic = new Image();
carPic.src = 'images/car.png'
var x = document.getElementById("inv");
x.style.display = "none";

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var backgroundImage = {
  img: img,
  x: 0,
  speed: -1,

  move: function() {
    this.x += this.speed;
    this.x %= canvas.width;
  },

  draw: function() {
    ctx.drawImage(this.img, 0, this.x);
    if (this.speed < 0) {
      ctx.drawImage(this.img, 0, this.x + canvas.width);
    } else {
      ctx.drawImage(this.img, 0,this.x - this.img.width);
    }
  },
};





var car = {
  img: carPic,
  x: 80,
  speed: 1,

  move: function() {
    this.x += this.speed;
    this.x %= canvas.width;
  },

  draw: function() {
    ctx.drawImage(this.img, 260,600, 40, this.x);
  }
};

function updateCanvas() {
  backgroundImage.move();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();
  car.draw();

  requestAnimationFrame(updateCanvas);
}

// start calling updateCanvas once the image is loaded
img.onload = updateCanvas;

    
  }
};




