window.onload = function () {
  var canvas = document.getElementById('road');
  var ctx = canvas.getContext('2d');
  
  document.getElementById("start-button").onclick = function () {
    player = new Car(150, 525, 50, 100);
    drawRoad();
    player.update();
    interval = setInterval(update, 15);

  };

  function update() {
    drawRoad();
    player.update();
  }

  function drawRoad() {
    ctx.fillStyle = "#008200";
    ctx.fillRect(0, 0, 450, 650);
    ctx.fillStyle = "#808080";
    ctx.fillRect(40, 0, 370, 650);
    ctx.fillStyle = "#FFF";
    ctx.fillRect(55, 0, 15, 650);
    ctx.fillStyle = "#FFF";
    ctx.fillRect(380, 0, 15, 650);
    for (var i = 0; i < 1000; i += 60) {
      ctx.fillStyle = "#FFF";
      ctx.fillRect(220, i, 10, 40);
    }

  }

  function moveLeft() {
    if (player.x - 15 > 0) {
      player.x -= 15;
    }
  }

  function moveRight() {
    if (player.x + 15 < 400) {
      player.x += 15;
    }
  }

  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 37:
        console.log(player)
        moveLeft();
        break;
      case 39:
        moveRight();
        break;
    }
  };

  function Car(x, y, width, height) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = "images/car.png";
    this.update = function () {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    };
  }


}