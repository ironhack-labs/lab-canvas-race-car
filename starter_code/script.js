window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var car = new Car();
    console.log(car.x)
    car.drawCar(car.x)
    obstacles()
  };


  var car = new Car();
  var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
  function startGame() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "#008100";
    ctx.fillRect(0, 0, 570, 856);
    ctx.fillStyle = "#808080";
    ctx.fillRect(50, 0, 470, 856);
    ctx.fillStyle = "white";
    ctx.fillRect(60, 0, 15, 856);
    ctx.fillRect(498, 0, 15, 856);
    
    midLine()
    ctx.stroke();
  }
  function midLine(){
    t=10
    s=40
    cont=0
    for(i=0;i<20;i++){
      ctx.fillStyle = "white";
      ctx.fillRect(280, cont, t, s);
      cont=t+s+cont
      ctx.fillRect(280,cont, t,s)
    }
  }

  document.onkeydown = function(e) {
    console.log(e)
    switch (e.keyCode) {

      case 37:
       ctx.clearRect(0, 0, 570, 856)
       startGame()
        car.drawCar(car.moveLeft())
        break;
      case 39:
        ctx.clearRect(0, 0, 570, 856)
        startGame()
        car.drawCar(car.moveRight());
        break;
    }
  };
function obstacles(){
  setInterval(function(){
    var y=0;

    for (i=0; i<5;i++){
      ctx.fillStyle= "#880000"
      var ran=Math.floor(Math.random()*200)
      y=y+20
      ctx.fillRect(ran,y,200,30)

    }
   
  

  },1000)

}

   setInterval(function(){



  },1000)


  function Car() {
    console.log(this.x)
    this.x = 250;
    this.nextX=250;
    this.speed = 1;
  
  }
  

  Car.prototype.moveLeft = function() {
    return this.x = this.x-this.speed;
  };
  Car.prototype.moveRight = function() {
    return this.x = this.x+this.speed;
  };
  
  Car.prototype.drawCar=function(x) {
    console.log(x)
    var img = new Image();
    img.onload = function() {
      ctx.drawImage(img, x, 700, 75, 150);
    };
    img.src = "./images/car.png";
  }

};
