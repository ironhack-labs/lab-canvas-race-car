window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    document.getElementById("start-button").onclick = function() {
      startGame();
    };  


    var car= new Image()
    var Carmovement = {
      x: 175,
      moveLeft: function () { this.x -= 25 },
      moveRight: function () { this.x += 25 },
    }

  function startGame() {
        ctx.fillStyle="#3b821e";
        ctx.fillRect(0, 0, 450, 700);
        ctx.fillStyle="#808080";
        ctx.fillRect(40, 0, 320, 700);
        ctx.fillStyle="white";
        ctx.fillRect(46, 0, 16, 700);
        ctx.fillStyle="white";
        ctx.fillRect(336, 0, 16, 700);
        for (var i = 0; i < 1000; i += 60) {
          ctx.fillStyle = "#FFF";
          ctx.fillRect(195, i, 8, 40)
        }
        ctx.drawImage(car, Carmovement.x, 600, 50, 100)
      }
      car.src= "../starter_code/images/car.png"

        document.onkeydown = function(e) {
         switch (e.keyCode) {
           case 37: Carmovement.moveLeft();  console.log('left',  Carmovement); break;
           case 39: Carmovement.moveRight(); console.log('right', Carmovement); break;
         }
         startGame();
       }
     };

    
    