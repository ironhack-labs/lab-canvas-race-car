window.onload = function() {
  document.getElementById("start-button").onclick = function() {
   startGame();
  };
  
 function startGame() {

var img = new Image();
img.src = 'images/newroad.png';
var carPic = new Image();
carPic.src = 'images/car.png'
var obstacle = new Image();
obstacle.src = 'images/greybrick.png'
var x = document.getElementById("inv");
x.style.display = "none";
// var myObstacle;
// myObstacle = new component(10, 200, "green", 300, 120);

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');



document.onkeydown = function(e) {
  e.preventDefault() // prevents for scroll bar to move when pressing up and down
  switch (e.keyCode) {
    case 38: car.y -= 10; break; // up arrow 
    case 40: car.y += 10; break; // down arrow
    case 37: car.x -= 10; break; // left arrow
    case 39: car.x += 10; break; // right arrow
  }
};

var backgroundImage = {
  img: img,
  x: 0,
  speed: +9,

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

//below is the obstacles
var myObstacle = {
  img: obstacle,
  x: 0,
  y: Math.floor(Math.random() * 60),
  speed: 6,
  random: Math.floor(Math.random() * 2),

  move: function() {
    this.y += this.speed;
    this.y %= canvas.height;
    if(this.random === 2) {
      if(this.x <= 0){
        this.x = 700;
      } else{
          this.x -= Math.floor(Math.random() * 3);  
      }
    } else {
      this.x += Math.floor(Math.random() * 3);
    }
    if(this.x > 720) {
      this.x = 0;
    } else if(this.x < -20) {
      this.x = 700
    }
  },

  draw: function() {
    ctx.drawImage(this.img, this.x, this.y, 40, 40);
    // if (this.speed < 0) {
    //   ctx.drawImage(this.img, this.x, this.y + canvas.height,40, 40);
    // } else {
    //   ctx.drawImage(this.img, this.x,this.y - this.img.height,40, 40);
    // }
  },
};

//sec object

//below is the obstacles
var myObstacle = {
  img: obstacle,
  x: 0,
  y: Math.floor(Math.random() * 60),
  speed: 6,
  random: Math.floor(Math.random() * 2),
  height: 55,
  width: 55,

  move: function() {
    this.y += this.speed;
    this.y %= canvas.height;
    if(this.random === 2) {
      if(this.x <= 0){
        this.x = 700;
      } else{
          this.x -= Math.floor(Math.random() * 3);  
      }
    } else {
      this.x += Math.floor(Math.random() * 3);
    }
    if(this.x > 720) {
      this.x = 0;
    } else if(this.x < -20) {
      this.x = 700
    }
  },

  draw: function() {
    ctx.drawImage(this.img, this.x, this.y, 40, 40);


    // if (this.speed < 0) {
    //   ctx.drawImage(this.img, this.x, this.y + canvas.height,40, 40);
    // } else {
    //   ctx.drawImage(this.img, this.x,this.y - this.img.height,40, 40);
    // }
  },
};



var car = {
  img: carPic,
  x: 240,
  y:575,
  speed: +100,
  height: 120,
  width: 80,

  move: function() {
    this.x += this.speed;
    this.x %= canvas.width;
  },

  draw: function() {
    ctx.drawImage(this.img, this.x,this.y, 80, 120);
  }
};

function crash() {
  if (car.x < myObstacle.x + myObstacle.width - 20 &&
    car.x + car.width - 20 > myObstacle.x &&
    car.y < myObstacle.y + myObstacle.height - 20 &&
    car.y + car.height - 20 > myObstacle.y)  {

      carPic.src = 'images/fire.png'
      car.draw();
      return true;

    } else {
      return false;
    }

  }

function updateCanvas() {
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.move();
  backgroundImage.draw();
  car.draw();
  myObstacle.draw();
  myObstacle.move();
  if (crash()){
    return;
  }


  requestAnimationFrame(updateCanvas);
}

// start calling updateCanvas once the image is loaded
img.onload = updateCanvas;

    
  }
};




