window.onload = function(){

  var KEY_UP = 38;
  var KEY_RIGHT = 39;
  var KEY_DOWN = 40;
  var KEY_LEFT = 37;

  document.getElementById('start-button').onclick = function() {
    startGame();
  }

  function Car(canvas, src, x, y, w, h) {

    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.image = new Image();
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = 15,

    this.image.src = 'images/car.png';

    this.setListeners();

  }
  
  Car.prototype.draw = function() {
      this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  }


  Car.prototype.setListeners = function() {
    document.onkeydown = function(e) {
      e.preventDefault();
      switch(e.keyCode) {
        case KEY_LEFT: 
          if (this.x > 75) {
            this.x -= this.vx;
          }
          break; 
        case KEY_RIGHT: 
          if (this.x < 360) {
            this.x += this.vx;
          }
          break; 
      }
    }.bind(this);
  }


  function Rectangle(canvas, x, y, w, h, color) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
  }
  
  Rectangle.prototype.draw = function() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
 
  };

  Rectangle.prototype.move = function(type) {

    if (type === 'line') {
      if (this.y < 800) {
        this.y += 5;
      } else {
        this.y = 0
      }
  
    } else {

      if (this.y < 800) {
        this.y += 5;
      } else {
        canvas.obstacles.shift();
        console.log(canvas.obstacles);
        this.y = 0
      }
  
    }

    
  }
  
  function Canvas(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.borders = [
      new Rectangle(this.canvas, 0, 0, this.canvas.width, this.canvas.height, '#00811A'),
      new Rectangle(this.canvas, 50, 0, 400, this.canvas.height, '#7F7F7F'),
      new Rectangle(this.canvas, 60, 0, 15, this.canvas.height, '#FFFFFF'),
      new Rectangle(this.canvas, 425, 0, 15, this.canvas.height, '#FFFFFF')];
    this.road = []
    this.car = new Car(this.canvas, 'images/car.png', 215, 600, 75, 150);
    this.obstacles = [];
    this.fps = 60;
    this.counter = 0;
    this.id;
    this.score = 0;
  }

  Canvas.prototype.generateLines = function() {
    var margin = 5
    for (var i = 0; i < 20; i ++) {
      this.road.push(new Rectangle(this.canvas, 250, margin, 10,35, '#FFFFFF'))
      margin += 65;
    }
  }

  Canvas.prototype.generateObstacles = function() {
    
      var x = Math.floor(Math.random() * (250 - 70 + 1) + 70);
      this.obstacles.push(new Rectangle(this.canvas,x,0,Math.floor(Math.random() * ((360 - x) - 50 + 1) + 50),50, '#950013'));
      // this.obstacles.push(new Rectangle(this.canvas,Math.floor( Math.random () * (max - min + 1)) + min), 0, x, y, '#950013'));
      console.log(this.obstacles);
    }
    
  Canvas.prototype.start = function() {

    this.obstacles = [];
    this.road = [];

    this.generateLines();

    this.id = setInterval(function() {
      this.clear();
      this.move();
      this.draw();
      
      this.counter++;
      
      if(this.counter % 110 == 0) {
        this.generateObstacles();
      }
      console.log(canvas.score);
    }.bind(this), 1000/this.fps);


  };

  Canvas.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  Canvas.prototype.move = function() {
    this.road.forEach(function(lineRoad) {
      lineRoad.move('line');
    })

    this.obstacles.forEach(function(obstacle) {
      obstacle.move('obstacle');
    })
  }
  
  Canvas.prototype.draw = function() {

    this.borders.forEach(function(border) {
      border.draw();
    })

    this.road.forEach(function(lineRoad) {
      lineRoad.draw();
    })

    this.car.draw();

    this.obstacles.forEach(function(obstacle) {
      
      obstacle.draw();

      if( canvas.car.x+canvas.car.w >= obstacle.x && obstacle.x+obstacle.w >= canvas.car.x &&
        canvas.car.y+canvas.car.h >= obstacle.y && obstacle.y+obstacle.h >= canvas.car.y
      ){
        stopGame();
      } else {
       canvas.score += 0.07;
      }
    })

    var text = `Your score is ${parseInt(canvas.score)}`;

    this.ctx.font = '48px serif';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(text, 150, 780, 200);

  

  };
  
  var canvas = new Canvas("carGame");
  


  function startGame() {
     canvas.start();
  }

  function stopGame() {
    this.obstacles = [];
    this.road = [];
    clearInterval(canvas.id);
    alert(`You lose!! You score was ${parseInt(canvas.score)}`); 
  }
  
}
