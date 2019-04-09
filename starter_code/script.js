window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var img = new Image();
      img.src = './images/road.png';
      

      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');

      var backgroundImage = {
        img: img,
        y: 0,
        speed: 1,

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

      function updateCanvas() {
        backgroundImage.move();

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        backgroundImage.draw();

        requestAnimationFrame(updateCanvas);
      }

      // start calling updateCanvas once the image is loaded
      img.onload = updateCanvas;

        }
};


