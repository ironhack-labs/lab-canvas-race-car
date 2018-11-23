 function Game(canvasId) {
     this.canvas = document.getElementById(canvasId);
     this.canvas.width = window.innerWidth;
     this.canvas.height = window.innerHeight;
     this.ctx = this.canvas.getContext('2d');
  
     document.addEventListener('keyleft', this.onKeyEvent.bind(this));
     document.addEventListener('keyright', this.onKeyEvent.bind(this));
  
     this.square = new Road(this.ctx);
  
//     this.obstacles = [];
//     this.drawIntervalCount = 0;
//     this.drawIntervalId = undefined;
   }
  
   Game.prototype.start = function() {
//     if (!this.isRunning()) {
//       this.drawIntervalId = setInterval(function () {
//         this.drawIntervalCount++;
//         this.clear();
  
//         if (this.drawIntervalCount % WALL_INTERVAL === 0) {
//           this.addObstacle();
//           this.drawIntervalCount = 0;
//         } else if (this.drawIntervalCount % COIN_INTERVAL === 0) {
//           this.coins++;
//         }
  
//         if (this.isGameOver()) {
//           this.stop();
//           alert(this.coins);
//         }
  
         this.draw();
//       }.bind(this), DRAW_INTERVAL_MS);
//     }
   }
  
//   Game.prototype.isGameOver = function() {
//     return this.obstacles.some(function(obstacle) {
//       return this.square.collideWith(obstacle);
//     }.bind(this));
//   }
  
//   Game.prototype.isRunning = function() {
//     return this.drawIntervalId !== undefined;
//   }
  
//   Game.prototype.stop = function () {
//     clearInterval(this.drawIntervalId);
//     this.drawIntervalId = undefined;
//   }
  
//   Game.prototype.onKeyEvent = function(event) {
//     this.square.onKeyEvent(event);
//   }
  
//   Game.prototype.addObstacle =  function() {
//     var heightUp = Math.random() * this.canvas.height - (this.square.height);
//     var heightDown = this.canvas.height - heightUp - this.square.height - 50;
//     this.obstacles.push(new Wall(this.ctx, this.canvas.width, 0, heightUp));
//     this.obstacles.push(new Wall(this.ctx, this.canvas.width, this.canvas.height - heightDown, heightDown));
//   }
  
  
//   Game.prototype.clear = function () {
//     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
//   }
  
//   Game.prototype.draw = function () {
//     this.square.draw();
//     this.obstacles.forEach(function(obstacle) {
//       obstacle.draw();
//     })
//   }