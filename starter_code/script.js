window.onload = function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  var car = new Image()

 /*  var car = {
    x: 25,
    y: 25,
    moveLeft:  function() { this.x -= 25 },
    moveRight: function() { this.x += 25 },
  }

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: car.moveLeft();  console.log('left',  car); break;
      case 39: car.moveRight(); console.log('right', car); break;
    }
    startGame();
  }  */
 
 
  function startGame() {
    ctx.fillStyle="#008200";
    ctx.fillRect(0, 0, 450, 750)
    ctx.fillStyle="#808080";
    ctx.fillRect(40, 0, 370, 750)
    ctx.fillStyle="#FFF";
    ctx.fillRect(55, 0, 15, 750)
    ctx.fillStyle="#FFF";
    ctx.fillRect(380, 0, 15, 750)
    for (var i=0 ; i < 1000 ; i+=60){
    ctx.fillStyle="#FFF";
    ctx.fillRect(220, i, 10, 40)
    }
    ctx.drawImage(car, 150,620,50,100)
 
  }
  car.src= "../starter_code/images/car.png"
 }