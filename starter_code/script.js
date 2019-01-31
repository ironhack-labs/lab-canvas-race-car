window.onload = function() 
{
  document.getElementById("start-button").onclick = function() 
  {
    startGame();
  };

  function startGame()
  {
    function draw() 
    {
      var canvas = document.getElementById('game-board');
      var ctx = canvas.getContext('2d');

      function background()
      {
        ctx.fillStyle = 'rgb(3, 114, 21)';
        ctx.fillRect(0, 0, 50, 750);
        ctx.fillStyle = 'rgb(127, 127, 127)';
        ctx.fillRect(50, 0, 25, 750);
        ctx.fillStyle = 'rgb(127, 127, 127)';
        ctx.fillRect(100, 0, 400, 750);
        ctx.fillStyle = 'rgb(127, 127, 127)';
        ctx.fillRect(525, 0, 25, 750); 
        ctx.fillStyle = 'rgb(3, 114, 21)';
        ctx.fillRect(550, 0, 50, 750);
      }
      
      function streetlines()
      {
        ctx.strokeStyle = 'rgb(255, 255, 255)';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.setLineDash([50, 50]);
        //ctx.fillRect(300, 50, 15, 30);
        ctx.moveTo(300, 50);
        ctx.lineTo(300, 750);
        ctx.stroke();
      }
      setInterval(streetlines, 1300);

      function animateObstacle()
      {
        //loop through array of obstacles and animate each one
        ctx.fillStyle = "red";
        ctx.fillRect(350,obstacle.y,100, 100);
        obstacle.y+=10;
      }

      var obstacle = 
      {
        x: 50,
        y: 0
      };
      
      document.onkeydown = function(e) 
      {
        switch (e.keyCode) 
        {
          // case 38: car.moveUp();    console.log('up',    car); break;
          // case 40: car.moveDown();  console.log('down',  car); break;
          case 37: car.moveLeft();  console.log('left',  car); break;
          case 39: car.moveRight(); console.log('right', car); break;
        }
      }
      
      function animate()
      {
        //draw everything and erase everything
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        background();
        streetlines();
        ctx.drawImage(img, car.x, car.y, 150*imgScale/2,150); //car
        animateObstacle();
        window.requestAnimationFrame(animate);
      }
      
      var car = 
      {
        x: 325,
        y: 550,
        // moveUp:    function() { this.y -= 25 },
        // moveDown:  function() { this.y += 25 },
        moveLeft:  function() { this.x -= 25 },
        moveRight: function() { this.x += 25 },
      }
      
      var img = new Image();   // Create new img element
      imgScale = 500/480;
      img.onload = function() 
      {
        animate();
      };
      img.src = './images/car.png'; // Set source path
    }
    draw();
  }
};
        





        // ctx.fillStyle = 'rgb(255, 255, 255)';
        // ctx.fillRect(300, 50, 15, 30);
        
        
          //function setLineDash()
          //{
              // ctx.fillStyle = 'rgb(255, 255, 255)';
              // ctx.fillRect(300, 50, 15, 30);
              // ctx.moveTo(300, 50);
              // ctx.lineTo(300, 750);
          //}
        //setInterval(animation, 500);
        
      
      
      
        //setInterval(function() {
        //  let start = 0;
        //  ctx.moveTo[1] == 0 ? ctx.moveTo[1] == 50 : ctx.moveTo[1] == 0
        //}, 500);
      
        // ctx.moveTo(300, 50);
        // ctx.lineTo(300, 750);
        // ctx.stroke();
        
  
  // window.onload = function() 
  // {
    //   document.getElementById("start-button").onclick = function()
    //   {
      //     startGame();
      //   };
      // }
      
// var gameRoad = 
// {
//   canvas: document.getElementById('game-board'),
//   startGame: function(width, height, x, y) 
//   {
//     this.canvas.width = 600;
//     this.canvas.height = 750;
//     this.context = this.canvas.getContext('2d');
//     document.body.insertBefore(this.canvas, document.body.childNodes[0])

//     ctx.fillStyle = 'rgb(3, 114, 21)';
//     ctx.fillRect(0, 0, 50, 750);
//     ctx.fillStyle = 'rgb(127, 127, 127)';
//     ctx.fillRect(50, 0, 25, 750);
//     ctx.fillStyle = 'rgb(127, 127, 127)';
//     ctx.fillRect(100, 0, 400, 750);
//     ctx.fillStyle = 'rgb(127, 127, 127)';
//     ctx.fillRect(525, 0, 25, 750); 
//     ctx.fillStyle = 'rgb(3, 114, 21)';
//     ctx.fillRect(550, 0, 50, 750);
    
//     ctx.strokeStyle = 'white';
//     ctx.lineWidth = 15;
//     ctx.beginPath();
//     ctx.setLineDash([50, 50]);
   
//     ctx.moveTo(300, 50);
//     ctx.lineTo(300, 750);
//     ctx.stroke();
//   }
// }

// function component(width, height, x, y)
// {
//   this.width = width;
//   this.height = height;
//   this.x = x;
//   this.y = y;
//   ctx = gameRoad.context;

//   var img = new Image();   // Create new img element
//     imgScale = 640/480;
//     img.onload = function() 
//     {
//       var player = ctx.drawImage(img, 325,500,150*imgScale/2,150);
//     };
//     img.src = './images/car.png';

//   ctx.fillRect(this.x, this.y, this.width, this.height)
// }

//     // Set source path

    

