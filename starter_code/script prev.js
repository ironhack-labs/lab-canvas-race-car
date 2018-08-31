window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  var canvasW = 400;
  var canvasH = 600;

  function startGame() {
    //Create board
    var canvasEl = document.createElement("CANVAS");
    canvasEl.setAttribute("width", "400");
    canvasEl.setAttribute("height", "600");
    var canvas = document.getElementById("game-board").appendChild(canvasEl);
    var ctx = canvas.getContext("2d");

    //Draw road
    var roadlength = canvasH;
    var greenSideW = 25;
    var sidewalk = 10;
    //road
    ctx.fillStyle = "rgba(128,128,128)";
    ctx.fillRect(0, 0, canvasW, roadlength);
    //green-side left
    ctx.fillStyle = "rgba(50,205,50)";
    ctx.fillRect(0, 0, greenSideW, roadlength);
    //green-side rigth
    ctx.fillStyle = "rgba(50,205,50)";
    ctx.fillRect(canvasW - greenSideW, 0, canvasW, roadlength);
    //white lines
    ctx.strokeStyle = "rgb(255,255,255)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(greenSideW + sidewalk, 0);
    ctx.lineTo(greenSideW + sidewalk, roadlength);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(canvasW - (greenSideW + sidewalk), 0);
    ctx.lineTo(canvasW - (greenSideW + sidewalk), roadlength);
    ctx.stroke();
    ctx.beginPath();
    ctx.setLineDash([10, 5]);
    ctx.moveTo(canvasW / 2, 0);
    ctx.lineTo(canvasW / 2, roadlength);
    ctx.stroke();

    var car = new Image();
    car.src = "images/car.png";
    var x = canvas.width / 2 - 39;
    var y = canvas.height - 165;
    var width = 78;
    var height = 159;

    car.onload = function() {
      ctx.drawImage(car, x, y, width, height);
    };
    var moveRight = function() {
      x += 20;
    };
    var moveLeft = function() {
      x -= 20;
    };
  }

  document.onkeypress = function(e) {
    switch (e.keyCode) {
      case 37:
        moveLeft();
        break;
      case 39:
        moveRigth();
        break;
    }
  };
};
