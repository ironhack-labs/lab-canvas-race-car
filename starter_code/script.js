// dessiner la route
function draw() {
  var canvas = document.getElementById("road");
  var ctx = canvas.getContext("2d");
  // green bg
  ctx.fillStyle = "#008900";
  ctx.fillRect(0, 0, 400, 800);
  // grey road
  ctx.fillStyle = "#808080";
  ctx.fillRect(41, 0, 320, 800);
  // white lines
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(51, 0, 15, 800);
  ctx.fillRect(336, 0, 15, 800);
  // // centered white dashes
  for (var i = 0; i < 800; i += 40) {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(198, i, 4, 30);
  }
}

// déclarer la voiture
var car = {
  x: 200 - 158 / 8,
  y: 800 - 500 / 4,
  moveLeft: function() {
    this.x -= 25;
  },
  moveRight: function() {
    this.x += 25;
  }
};

// dessiner la voiture
function loadcar(car) {
  var canvas = document.getElementById("road");
  var ctx = canvas.getContext("2d");
  var img = new Image();
  img.onload = function() {
    ctx.drawImage(img, car.x, car.y, 158 / 4, 319 / 4);
  };
  img.src = "images/car.png";
}

// faire bouger la voiture avec les touches
document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      car.moveLeft();
      console.log("left", car);
      break;
    case 39:
      car.moveRight();
      console.log("right", car);
      break;
  }
  updateCanvas();
};

// créer le tableau d'obstacles
var myObstacles = [];

// créer 20 obstacles
for (var j = 0; j < 15; j++) {
  var obstacle = {
    x: Math.floor(Math.random() * 400),
    y: 0,
    width: Math.floor(Math.random() * 100),
    height: 25,
    color: "#9f0000",
    movedown: function() {
      this.y += 100;
    }
  };
  myObstacles.push(obstacle);
}

// dessiner les obstacles
function drawObstacles(myObstacles) {
  var canvas = document.getElementById("road");
  var ctx = canvas.getContext("2d");
  for (var j = 0; j < compteur; j++) {
    ctx.fillStyle = myObstacles[j].color;
    ctx.fillRect(
      myObstacles[j].x,
      myObstacles[j].y,
      myObstacles[j].width,
      myObstacles[j].height
    );
  }
}

// initialiser le jeu
function startGame() {
  draw();
  loadcar(car);
  drawObstacles(myObstacles);
  setInterval(defilement, 1000, myObstacles);
}

var compteur = 0;

// faire defiler les obstacles
function defilement(myObstacles) {
  len = myObstacles.length;
  while (myObstacles[len - 1].y < 800) {
    compteur++;
    array_idx = Math.min(compteur, len)
    for (var j = 0; j < array_idx; j++) {
      myObstacles[j].movedown();
    }
    drawObstacles(myObstacles);
    updateCanvas();
  }
}

// updater le jeu à chaque mouvement
function updateCanvas() {
  var canvas = document.getElementById("road");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 400, 800);
  draw();
  loadcar(car);
  drawObstacles(myObstacles);
}

// onclick
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};
