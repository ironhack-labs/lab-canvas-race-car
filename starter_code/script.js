window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    document.getElementById('score').innerHTML = ''
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
        posY: 600,
        posX: 80,
        speed: 10,
        height: 180,
        width: 120,
        move: function() {

        },

        draw: function() {
          ctx.drawImage (this.pic, this.posX, this.posY, this.width, this.height);
          
        
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
        posY: 40,
        posX: 200,
        speed: 2,
        height: 180,
        width: 120,

        move: function() {
          this.posY += this.speed;
          this.posY %= canvas.height;

          if (this.posX >= 500) {
            this.posX = 0;
          } else {
          this.posX += Math.floor(Math.random() * 3);
          }
        },

        draw: function() {
          ctx.drawImage (this.pic, this.posX, this.posY, this.width, this.height);
          if (this.speed > 0) {
            ctx.drawImage(this.pic, 0, this.y + canvas.height);
          } else {
            ctx.drawImage(this.pic, 0, this.y - this.pic.height);
          }
        },
       
        
        };
        var enemyCar2 = {
          pic: enemyCarPic,
          posY: 20,
          posX: 320,
          speed: 3,
          height: 180,
          width: 120,
  
          move: function() {
            this.posY += this.speed;
            this.posY %= canvas.height;
            if (this.posX <= 0) {
              this.posX = 500;
            } else {
            this.posX -= Math.floor(Math.random() * 3);
            }
          },
  
          draw: function() {
            ctx.drawImage (this.pic, this.posX, this.posY, this.width, this.height);
            if (this.speed < 0) {
              ctx.drawImage(this.pic, 0, this.y + canvas.height);
            } else {
              ctx.drawImage(this.pic, 0, this.y - this.pic.height);
            }
          },
         
          
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
            car.posY -= 15;
            break;
          case 40: // down arrow
            car.posY += 15;
            break;
          case 37: // left arrow
            car.posX -= 15;
            break;
          case 39: // right arrow
            car.posX += 15;
            break;
        }
      };
      
      function carsCollide() {
          if (car.posX < enemyCar.posX + enemyCar.width - 20 &&
            car.posX + car.width - 20 > enemyCar.posX &&
            car.posY < enemyCar.posY + enemyCar.height - 20 &&
            car.posY + car.height - 20 > enemyCar.posY)  {

              car.pic.src = "./images/explosion.png";
              car.draw();
              return true;
              
          
            } else if 
               (car.posX < enemyCar2.posX + enemyCar2.width - 20 &&
                car.posX + car.width - 20 > enemyCar2.posX &&
                car.posY < enemyCar2.posY + enemyCar2.height  - 20 &&
                car.posY + car.height - 20 > enemyCar2.posY){

                  car.pic.src = "images/explosion.png";
                  car.draw();
                  return true;
                  
            } else {
              return false;
            }

          }

      function updateCanvas() {
        backgroundImage.move();
        enemyCar.move();
        enemyCar2.move();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        backgroundImage.draw();
        car.draw();
        enemyCar.draw();
        enemyCar2.draw();
        addScore();
         if (carsCollide()) {
          
                  
           return;
         };

        requestAnimationFrame(updateCanvas);
      }

      // start calling updateCanvas once the image is loaded
      img.onload = updateCanvas;

        }
};

function addScore () {
score = document.getElementById('score');
score.innerHTML++;
}




