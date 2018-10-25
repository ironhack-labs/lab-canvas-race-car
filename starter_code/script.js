

window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {

    var canvas = document.getElementById('road');
    var ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 600;




    var x = 174;
    var y = 300;
    var img = new Image();
    img.src = 'images/car.png';
    img.onload = function () {
      draw();
    }
    function draw() {

      ctx.fillStyle = "#00a035";
      ctx.fillRect(0, 0, canvas.width, canvas.height);


      ctx.fillStyle = "#808080";
      ctx.fillRect(20, 0, 360, canvas.height);

      ctx.fillStyle = "#fff";
      ctx.fillRect(40, 0, 10, canvas.height);
      ctx.fillRect(350, 0, 10, canvas.height);

      ctx.fillRect(195, 25, 10, 60);
      ctx.fillRect(195, 125, 10, 60);
      ctx.fillRect(195, 225, 10, 60);
      ctx.fillRect(195, 325, 10, 60);
      ctx.fillRect(195, 425, 10, 60);
      ctx.fillRect(195, 525, 10, 60);

      ctx.drawImage(img, x, y, img.width / 3, img.height / 3);


    }
    function goRight() {
      x += 5;
    }
    function goLeft() {
      x -= 5;
    }

    addEventListener('keydown', function (e) {

      if (e.keyCode === 37) {

        goLeft();
      }

      if (e.keyCode === 39) {

        goRight();
      }


    });

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      draw();
    }

    let interval = setInterval(function () {
      update();
    }, 1000 / 60);

    let myObstacles = [];
    myGameArea = {
      frames: 0,
    }

    myGameArea.frames += 1;
    if (myGameArea.frames % 120 === 0) {
      gameSpace = myGameArea.canvas.width;
      minHeight = 20;
      maxHeight = 200;
      height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
      minGap = 50;
      maxGap = 200;
      gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
      myObstacles.push(new component(10, height, "green", gameSpace, 0));
      myObstacles.push(new component(10, gameSpace - height - gap, "green", gameSpace, height + gap));
    }
  }
};