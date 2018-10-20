window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};

function startGame() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  drawRoad();
  draw(car);
}

//setInterval(updateCanvas(),1000)

var car = {
  x: 162,
  y: 600,
  moveLeft: function() {
    this.x -= 10;
  },
  moveRight: function() {
    this.x += 10;
  }
};

function draw(car) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var img = new Image();
  img.onload = function() {
    ctx.drawImage(img, car.x, car.y, 79, 160);
  };
  img.src = "./images/car.png";
}


function obstacleCreator() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var randomLength = function() {
    var rX = Math.floor(Math.random() * 150);
    if (rX < 50) return 50 ; 
    else return rX;
  };

  var randomX = function() {
    var rX = Math.floor(Math.random() * 200);
    return rX + 50;
  }

  ctx.fillStyle = "rgba(128,0,0,1)";
  ctx.fillRect(randomX(), 0, randomLength(), 30);

}

function drawRoad() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgba(128,128,128,1)";
  ctx.fillRect(0, 0, 400, 800);
  //road

  ctx.fillStyle = "rgba(0,128,0,1)";
  ctx.fillRect(0, 0, 30, 800);
  // Grass left

  ctx.fillStyle = "rgba(0,128,0,1)";
  ctx.fillRect(370, 0, 30, 800);
  // grass right

  ctx.fillStyle = "rgba(250,250,250,1)";
  ctx.fillRect(35, 0, 10, 800);
  // White line left

  ctx.fillStyle = "rgba(250,250,250,1)";
  ctx.fillRect(355, 0, 10, 800);
  // White line right

  ctx.strokeStyle = "rgba(250,250,250,1)";
  ctx.lineWidth = "10";
  ctx.setLineDash([15, 15]); //dashes are 5px and spaces are 3px
  ctx.beginPath();
  ctx.moveTo(200, 0);
  ctx.lineTo(200, 800);
  ctx.stroke();
  // White line dashed center
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      car.moveLeft();
      break;
    case 39:
      car.moveRight();
      break;
  }

  function updateCanvas() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, 400, 800);
    
    drawRoad();
    draw(car);
  }
  updateCanvas();
};
