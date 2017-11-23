window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    myGameArea.start();
    myGameArea.makeRoad();
  };

  // function updateGameArea() {
  //   myGameArea.clear();
  //   player.update();
} 

  var myGameArea = {
    canvas : document.getElementById("canvas"),
    start : function() {
        this.width = 500;
        this.height = 600;
        this.context = this.getContext("2d");
        //document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    makeRoad : function() {
      this.context.fillStyle = "green";
      this.context.fillRect(0,0, 30, this.height);
      this.context.fillRect(width-30, 0, 30, this.height);
      this.context.fillStyle = "gray"
      this.context.fillRect(30, 0, width-60, this.height);
      this.context.clearRect(40, 0, 5, this.height);
      this.context.clearRect(width-40, 0, 5, this.height);
      // this.context.moveTo(width/2, 0);
      // this.context.lineWidth = 3;
      for (var i = 0; i < this.height; i+=12){
        this.context.clearRect(width/2-2, i, 4, 6);
      }
      //car.draw();
    },
    clear : function() {
        this.context.clearRect(0, 0, this.width, this.height);
    }
}

function Obstacle(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y; 
    ctx = myGameArea.context;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.speedX = 0;
    this.speedY = 0;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY; 
    } 
}

 var car = {
    
    x: 250,
    y: 480,
    moveLeft: function() { 
      if(this.x > 40) {
        this.x -= 25;
      } 
    },
    moveRight: function() {
      if(this.x < width-110) {
        this.x += 25; 
      }      
    }
  }

  function draw(car){
    var img = new Image();
    img.onload = function() { 
     myGameArea.context.drawImage(img, car.x, car.y, 75, 75);
   }    
   img.src = "images/car.png";
 }

   document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37: car.moveLeft();  console.log('left',  car); break;
    case 39: car.moveRight(); console.log('right', car); break;
  }

  //updateCanvas();
}



 
