window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    board.start();
    board.car();
    //player = new Car(130, 500, 40, 80);
  }


  var board = {
    canvas : document.createElement("canvas"),
    start : function() {
              this.canvas.width = 300;
              this.canvas.height = 600;
              this.context = this.canvas.getContext("2d");
              this.draw();
              document.getElementById("game-board").insertBefore(this.canvas, document.getElementById("game-board").childNodes[0]);
            },
    frames: 0,
    clear : function() {
              this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            },
    draw : function(){
      console.log('road')
              this.context.fillStyle = "green"
              this.context.fillRect(0,0,300,600);
              this.context.fillStyle = "grey"
              this.context.fillRect(40,0,240,600);
              this.context.strokeStyle= "white";
              for (i = 0 ; i < 40; i++){
                this.context.clearRect(147,5+30*i,6,15);
              }
              this.context.clearRect(40,0,6,600);
              this.context.clearRect(254,0,6,600);
            },
    car : function() {

      car = new Image();
      car.src= "images/car.png";
      console.log(car);  
      car.onload = function(){
        this.context.drawImage(car, 125, 460, 50, 100)
        console.log("dibuja coche");
      }.bind(this)
      
     }

    }
  
};