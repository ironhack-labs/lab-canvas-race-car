window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    
    var carpic = new Image ();
      carpic.src = './images/car.png'
    var img = new Image();
      img.src = './images/road.png';
    var enemyCarPic = new Image ();
      enemyCarPic.src = './images/car2.png'; 

      var canvas = document.getElementById('canvas');







      var ctx = canvas.getContext('2d');

      var car = {
        pic: carpic,
        posY: 700,
        posX: 80,
        speed: 10,

        move: function() {

        },

        draw: function() {
          ctx.drawImage (this.pic, this.posX, this.posY, 40, 80);
          
        
        }};


      var backgroundImage = {
        img: img,
        y: 0,
        speed: 8,

        move: function() {
          this.y += this.speed;
          this.y %= canvas.height;
        },

        draw: function() {
          ctx.drawImage(this.img, 0, this.y);
          if (this.speed < 0) {
            ctx.drawImage(this.img, 0, this.y + canvas.height);
          } else {
            ctx.drawImage(this.img, 0, this.y - this.img.height);
          }
        },
      };

      var enemyCar = {
        pic: enemyCarPic,
        posY: 300,
        posX: 200,
        speed: 3,

        move: function() {
          this.posY += this.speed;
          this.posY %= canvas.height;
        },

        draw: function() {
          ctx.drawImage (this.pic, this.posX, this.posY, 40, 80);
          if (this.speed < 0) {
            ctx.drawImage(this.pic, 0, this.y + canvas.height);
          } else {
            ctx.drawImage(this.pic, 0, this.y - this.pic.height);
          }
        },
        //   if (this.speed < 0) {
        //     ctx.drawImage(this.pic, 0, this.y + canvas.height);
        //   } else {
        //     ctx.drawImage(this.pic, 0, this.y - canvas.height);
        //   }
        // },
        
        };


      var backgroundImage = {
        img: img,
        y: 0,
        speed: 8,

        move: function() {
          this.y += this.speed;
          this.y %= canvas.height;
        },

        draw: function() {
          ctx.drawImage(this.img, 0, this.y);
          if (this.speed < 0) {
            ctx.drawImage(this.img, 0, this.y + canvas.height);
          } else {
            ctx.drawImage(this.img, 0, this.y - this.img.height);
          }
        },
      };

      document.onkeydown = function(e) {
        switch (e.keyCode) {
          case 38: // up arrow
            car.posY -= 10;
            break;
          case 40: // down arrow
            car.posY += 10;
            break;
          case 37: // left arrow
            car.posX -= 10;
            break;
          case 39: // right arrow
            car.posX += 10;
            break;
        }
      };
      
      function updateCanvas() {
        backgroundImage.move();
        enemyCar.move();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        backgroundImage.draw();
        car.draw();
        enemyCar.draw();
        

        requestAnimationFrame(updateCanvas);
      }

      // start calling updateCanvas once the image is loaded
      img.onload = updateCanvas;

        }
};






