window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
     
    var ctx = document.getElementById('canvas').getContext("2d");
    ctx.lineWidth = 5.0;
    
    function drawMap(){//Draw Road
      ctx.fillStyle= 'green'
      ctx.fillRect(0, 0, 25, 600)
      ctx.fillStyle= 'gray'
      ctx.fillRect(25, 0, 10, 600)
      ctx.fillStyle= 'white'
      ctx.fillRect(35, 0, 10, 600)
      ctx.fillStyle= 'gray'
      ctx.fillRect(45, 0, 275, 600)
      ctx.fillStyle= 'white'
      ctx.fillRect(320, 0, 10, 600)
      ctx.fillStyle= 'gray'
      ctx.fillRect(330, 0, 10, 600)
      ctx.fillStyle= 'green'
      ctx.fillRect(340, 0, 25, 600)
      //Draw Lane Divider 
      ctx.beginPath();
      ctx.strokeStyle='white'
      ctx.setLineDash([10, 10]);
      ctx.moveTo(190, 600);
      ctx.lineTo(190, 0);
      ctx.stroke();
    }

//boundaries left: 35, right: 320
      var car = {
        x: 160,
        y: 475,
        moveLeft:  function() { this.y -=2;
                    if(this.x>45){this.x -= 5; }
           },
        moveRight: function() { this.y -=2; if(this.x<255){ this.x += 5;} },
      }
      
      function drawCar(){
        var img = new Image();
        imgScale = 400/600;
        img.onload = function() {
            ctx.drawImage(img, car.x, car.y,100*imgScale,100);
        };
        img.src = 'images/car.png';
       }

      document.onkeydown = function(e) {
        switch (e.keyCode) {
          case 37: car.moveLeft();  console.log('left',  car); break;
          case 39: car.moveRight(); console.log('right', car); break;
        }
        updateCanvas();
      }
      
     function updateCanvas() {
      ctx.clearRect(0,0,400,600);
      ctx.fillText("Car_x: " + car.x, 380,40);
      ctx.fillText("Car_y: " + car.y, 380,60);
      drawCar();
      drawMap();
      
    }

    updateCanvas();
      

      //Place Car on Map 
      
      
    }  
};
