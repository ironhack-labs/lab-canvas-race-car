window.onload = function() {
  document.getElementById("start-button").onclick = function() {

      //var ctx = document.getElementById("myCanvas")
      var canvas = new Canvas("myCanvas");

      setInterval(function() {
          canvas.startGame();
        
          if(canvas.counter % 200 ===0){
            canvas.counter++;
          }
          if(canvas.counter === canvas.height){
            canvas.counter =0;
          }
        
      }.bind(this), 1000 / 60);

  };

  function Canvas(id) {

      this.canvas = document.getElementById(id);
      this.ctx = this.canvas.getContext("2d");
      this.fps = 60;
      this.x = 0;
      this.y = 0;
      this.width = 350;
      this.height = 700;
      this.offset = 0;
      this.obstaclesArray = [new Obstacle(this.canvas,0), new Obstacle(this.canvas,50),new Obstacle(this.canvas,60) ];
      this.counter =0;
      this.xCar = this.width / 2.3;
      this.yCar= this.height / 1.2;

  }

  Canvas.prototype.drawBoard = function() {

      this.rect(this.width, this.height, this.x, this.y, "rgb(109,109,109)") //gris fondo
      this.rect(this.width - 330, this.height, this.x, this.y, "rgb(8, 112, 0)"); //verde izdqui
      this.rect(this.width - 340, this.height, this.x + 30, this.y, "rgb(255,255,255)"); //blanco izquierd
      this.rect(this.width - 330, this.height, this.width - 20, this.y, "rgb(8, 112, 0)"); //verde derecha
      this.rect(this.width - 340, this.height, this.width - 40, this.y, "rgb(255,255,255") //blanco derecha
      this.obstacles();


  }

  Canvas.prototype.rect = function(width, height, x, y, color) {
      this.ctx.beginPath();
      this.ctx.fillStyle = color;
      this.ctx.fillRect(x, y, width, height);
      this.ctx.closePath();

  }

  Canvas.prototype.cleanAndDraw = function() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.drawBoard();
      this.ctx.setLineDash([15, 30]);
      this.ctx.lineDashOffset -= 1;
      this.ctx.beginPath()
      this.ctx.strokeStyle = "white";
      this.ctx.lineWidth = 5;
      this.ctx.moveTo(this.width / 2, 0);
      this.ctx.lineTo(this.width / 2, this.height);
      this.ctx.stroke();
      this.ctx.closePath();
      this.loadCar();
       this.obstaclesArray[0].y+= (this.counter);
       this.obstaclesArray[1].y+=(this.counter);
       this.obstaclesArray[2].y+= (this.counter);
      
     
 


  }

  Canvas.prototype.startGame = function() {
      this.cleanAndDraw();

  }

  Canvas.prototype.loadCar = function() {
      var img = new Image();
      img.src = "images/car.png";

      this.ctx.drawImage(img, this.xCar, this.yCar / 1.2, 50, 100);


  }


  Canvas.prototype.obstacles = function(){
    this.obstaclesArray.forEach(function(obstacle) {
      obstacle.draw();
    })
  }
 

  Canvas.prototype.generateObstacles = function() {

    this.obstaclesArray.push(new Obstacle(this.canvas,0))
  }


  Canvas.prototype.colision = function(){
     this.obstacles.forEach(obstacle)
  }



  function Obstacle(canvas, valy){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;
    this.x = 0;
    this.y = (Math.random() * (0 - 400)) + 100 ;
    this.width = Math.floor(Math.random() * (200 - 100)) + 100;
    this.height = 25;
    // //this.xRandom = (Math.floor((Math.random() * (this.x + 30 - this.width - 40)) + this.width - 40));
    // this.xRandom = (Math.floor((Math.random() * (this.x + 170 -  this.width - 40))+ 170));

    // this.y =0;

  }

  Obstacle.prototype.draw= function(valy){
    
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgb(117,0,0)";
  
   
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.closePath();

  }


}