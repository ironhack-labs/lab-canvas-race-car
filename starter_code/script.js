var carSpeed = 1.6

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}


window.onload = function() {

    var myObstacles = [];

    var myGameArea = {
        canvas: document.createElement("canvas"),
        frames: 0,
        start: function() {
          this.canvas.width = window.innerWidth/2;
          this.canvas.height = window.innerHeight;
          this.ctx = this.canvas.getContext("2d");
          document.body.insertBefore(this.canvas, document.body.assets).classList.add('game-canvas');
          // call updateGameArea() every 20 milliseconds
          this.interval = setInterval(updateGameArea, 10);
        },
    
         middleLine: function () {
          var ctx = myGameArea.ctx;
          ctx.lineWidth=6
          ctx.setLineDash([44,44])
          ctx.beginPath()
          ctx.moveTo(this.canvas.width/2,this.canvas.height)
          ctx.lineTo(this.canvas.width/2,0)
          ctx.strokeStyle = '#fff'
          ctx.stroke();
          ctx.closePath() 
        },
    
        clear: function() {
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },

        stop: function() {
          clearInterval(this.interval);
        },
    
      };
   
      class Component {
        constructor(width, height, color, x, y) {
          this.width = width;
          this.height = height;
          this.color = color;
          this.x = x;
          this.y = y;
        }
    
        update() {
          var ctx = myGameArea.ctx;
          ctx.fillStyle = this.color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
        }

        left() {
          return this.x;
        }
        right() {
          return this.x + this.width;
        }
        top() {
          return this.y;
        }
        bottom() {
          return this.y + this.height;
        }
      
        crashWith(obstacle) {
          return !(
            this.bottom() < obstacle.top() ||
            this.top() > obstacle.bottom() ||
            this.right() < obstacle.left() ||
            this.left() > obstacle.right()
          );
        }
        
      }


      class Player extends Component {
        constructor (width, height, color, x, y) {
          super(width, height, color, x,y)
          this.x = x
          this.y = y
          this.speedX = 0
          this.speedY = 0
        }

        load() {
          var ctx = myGameArea.ctx;
          var car = new Image();   // Create new <img> element
          car.src = './images/pngkey.com-f1-car-png-3790155.png'; // Set 
          ctx.drawImage(car, this.x, this.y, this.width, this.height);
        }
        

        newPos() {
          this.x += this.speedX;
          this.y += this.speedY;
          this.x = clamp(this.x, grid/2+ 17, grid*5)
          this.y = clamp(this.y, 0, window.innerHeight)       
        }
      }

      function updateObstacles() {
        console.log(`update obstacles called`)
        myGameArea.frames += 1;
        if (myGameArea.frames % 320 === 0) {
          var y = 10;
          var minWidth = 100;
          var maxWidth = 350;
          var width = Math.floor(
            Math.random() * (maxWidth - minWidth + 1) + minWidth
          );
          var minGap = 50;
          var maxGap = 200;
          var gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
          myObstacles.push(new Component(width, 25, "brown", gap, y));
        }
        for (i = 0; i < myObstacles.length; i++) {
          myObstacles[i].y += 1;
          myObstacles[i].update();
        }
      }

      function checkGameOver() {
        var crashed = myObstacles.some(function(obstacle) {
          return car.crashWith(obstacle);
        });
      
        if (crashed) {
          myGameArea.stop();
        }
      }
  
    
      document.onkeydown = function(e) {
        switch (e.keyCode) {
          case 37: 
          case 65: // left arrow
            console.log(`left key pressed`)
            car.speedX -= carSpeed
            break;
          case 39:
          case 68: // right arrow
            console.log(`right key pressed`)
            car.speedX += carSpeed
            break;
          case 38:
          case 87: // up
            console.log(`up key pressed`)
            car.speedY -= carSpeed
            break;
          case 40:
          case 83:
            console.log(`down key pressed`)
            car.speedY += carSpeed
            break;
        }
      };
    
      document.onkeyup = function(e) {
        car.speedX = 0;
        car.speedY = 0;
      };
    
      const grid = window.innerWidth/12
    
      var leftGrass = new Component(grid/2, window.innerHeight, "green", 0, 0);
      var rightGrass = new Component(grid/2, window.innerHeight, "green", grid*5.5, 0);
      var leftLine = new Component((grid/24)*2, window.innerHeight, "white", grid/2+4, 0);
      var rightLine = new Component((grid/24)*2, window.innerHeight, "white", (grid*5.5)-14, 0);
      var car = new Player(40, 110 , "", grid*3-20, window.innerHeight-140)
    
    
      function updateGameArea() {
        myGameArea.clear()
        leftGrass.update()
        rightGrass.update()
        leftLine.update()
        rightLine.update()
        myGameArea.middleLine()

        car.newPos();
        car.load()

        updateObstacles();

        checkGameOver();
      }
    
    
      myGameArea.start();

      console.log(car)
      
      document.getElementById("start-button").onclick = function() {
    
      };
      

};
