window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var createCar = function (){
    var img = new Image();
    imgScale = 640/480;
    img.onload = function() {
      ctx.drawImage(img, 237, 680,50*imgScale,50);
      img.src = 'images/car.png';
        };
      }
      
      
      
      
      function startGame() {
        function draw() {
          var canvas = document.getElementById('example');
          var ctx = canvas.getContext('2d');
          ctx.fillStyle = "grey";
          ctx.fillRect(0,0,550,760);
          ctx.fillStyle = "#0b0"
          ctx.fillRect(1,1,30,760);
          ctx.fillStyle = "white";
          ctx.fillRect(40, 1, 10, 760);
          
          
          ctx.strokeStyle = "white";
          ctx.beginPath();
          ctx.setLineDash([25, 15]);
          ctx.moveTo(275, 0);
          ctx.lineTo(275, 760);
          ctx.lineWidth= 5;
          ctx.stroke()
          
          ctx.fillStyle = "#0b0"
          ctx.fillRect(520,1,30,760);
          
          ctx.fillStyle = "white";
          ctx.fillRect(500, 1, 10, 760);
          
          
          var img = new Image();
          imgScale = 640/480;
          img.onload = function() {
            ctx.drawImage(img, 237, 680,50*imgScale,50);
          };
          img.src = 'images/car.png';
          
          
          
          
        }
        
        draw()
        
      }
    };
    function moveRight(x){//preguntar que significa cuando algo esta como oscuro: ej (x)
      
      if (img.x + 10 < 340) { 
        img.x += 10;
      }
    }
    
    
    function moveLeft(x){
      if(x -10 >60){
        x -= 10
      }//preguntar TA//se coge el width menos los andenes???
    }
    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37: img.moveLeft();  console.log('left',  this.img); break;
        case 39: img.moveRight(); console.log('right', this.img); break;
            
      }
      updateCanvas();
    }



// var canvas = document.getElementById("canvas");
// var ctx    = canvas.getContext("2d");
// ctx.fillStyle = 'white';
// ctx.font = '18px serif';

// var ghost = {
//   x: 25,
//   y: 25,
  
//   moveLeft:  function() { this.x -= 25 },
//   moveRight: function() { this.x += 25 },
// }

// function draw(ghost) {
//   var img = new Image();
//   img.onload = function() { 
//      ctx.drawImage(img, ghost.x, ghost.y, 50, 50); 
//   }
//   img.src = "https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif";
// }


 

// function updateCanvas() {
//   ctx.clearRect(0,0,1500,1700);
//   ctx.fillText("Ghost_x: " + ghost.x, 580,40);
//   ctx.fillText("Ghost_y: " + ghost.y, 580,60);
//   draw(ghost)
// }

// updateCanvas()