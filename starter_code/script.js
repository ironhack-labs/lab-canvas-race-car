window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById("racetrack");
    var ctx = canvas.getContext("2d");

    function drawBackground(){
      canvas.width = screen.width/2.55;
      canvas.height = screen.height - 200;

      ctx.fillStyle = 'green';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'gray';
      ctx.fillRect(40, 0, canvas.width - 80, canvas.height);

      ctx.fillStyle = 'white';
      ctx.fillRect(70, 0, 15, canvas.height);

      ctx.fillStyle = 'white';
      ctx.fillRect(canvas.width - 85, 0, 15, canvas.height);
    }

    function drive() {
      let height = 0;
      function updateCanvas2() {
        height += 5;
        ctx.fillStyle = 'white';
        ctx.fillRect(245, height, 10, 20);
        ctx.fillStyle = 'grey';
        ctx.fillRect(245, height - 20, 10, 20);

        draw(car); 

        // cancelling animation frame after height canvas to decrease load on memory
        let win = window.requestAnimationFrame(updateCanvas2);
        if (height > 600) window.cancelAnimationFrame(win);

      }
      updateCanvas2();

    }
    function roadBlocks() {
      let height = 0;
      let xval = 90 + Math.floor(Math.random()*200)
      function updateCanvas3() {
        height += 5;
        // width = Math.random()*500
        ctx.fillStyle = 'red';
        ctx.fillRect(xval, height, 100, 25);
        ctx.fillStyle = 'grey';
        ctx.fillRect(xval, height-25, 100, 25);

        // draw(car);
        // cancelling animation frame after height canvas to decrease load on memory 
        let win = window.requestAnimationFrame(updateCanvas3);
        if (height > 600) window.cancelAnimationFrame(win);

      }
      updateCanvas3();

    }
    // road dashes interval
    setInterval(drive, 250);
    // road blocks interval
    setInterval(roadBlocks, 1200);


    var car = {
      x: canvas.width/2.1,
      y: canvas.height - 100,
      moveLeft: function() {this.x -= 30},
      moveRight: function() {this.x += 30},
    }

    function draw(car) {
      var img = new Image();
      img.onload = function() {
        ctx.drawImage(img, car.x, car.y, 30, 50);
      }
      img.src = "../starter_code/images/car.png"
    }


    document.onkeydown = function (e) {
      switch (e.keyCode) {
        case 37: car.moveLeft(); break;
        case 39: car.moveRight(); break;
      }
      updateCanvas();
    }

    function updateCanvas() {
      ctx.clearRect(0,0,canvas.width, canvas.height)
      draw(car);
      drawBackground();


    }

    updateCanvas();
  }
};

