window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    board.start();
    board.makeRoad();
  };
} 

  var board = {
    canvas : document.getElementById("canvas"),
    makeRoad : function() {
      this.context.fillStyle = "green";
      this.context.fillRect(0,0, 30, this.height);
      this.context.fillRect(width-30, 0, 30, this.height);
      this.context.fillStyle = "gray"
      this.context.fillRect(30, 0, width-60, this.height);
      this.context.clearRect(40, 0, 5, this.height);
      this.context.clearRect(width-40, 0, 5, this.height);
      for (var i = 0; i < this.height; i+=12){
        this.context.clearRect(width/2-2, i, 4, 6);
      }
    },
    clear : function() {
        this.context.clearRect(0, 0, this.width, this.height);
    }, 
    
    start : function() {
      this.width = 500;
      this.height = 600;
      this.context = this.getContext("2d");
      this.interval = setInterval(makeRoad, 20);
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

  $(document).ready( function() {
  function draw(car){
    var img = new Image();
    img.onload = function() { 
    board.context.drawImage(img, car.x, car.y, 75, 75);
   }    
   img.src = "images/car.png";
 }

   document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37: car.moveLeft();
    break;
    case 39: car.moveRight();
    break;
  }

}
  });