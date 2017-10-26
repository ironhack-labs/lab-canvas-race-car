window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();

  };

  function startGame() {

    var canvas = document.getElementById('road');
    var ctx = canvas.getContext('2d');
    drawRoad();
    draw(car);



    document.onkeydown = function(e) {
    switch (e.keyCode) {
    case 37: car.moveLeft();  console.log('left',  car); break;
    case 39: car.moveRight(); console.log('right', car); break;
  }
  updateCanvas();
};

function updateCanvas() {
  ctx.clearRect(0,0,1500,1700);
  ctx.fillText("car_x: " + car.x, 580,40);
  ctx.fillText("car_y: " + car.y, 580,60);
  draw(car);
}

updateCanvas();

  };


};



    function draw(car) {
      var car = {
        x: 200,
        y: 200,
        moveLeft:  function() { this.x -= 25 ;},
        moveRight: function() { this.x += 25 ;},
  };

    var img = new Image();
    imgScale = 640/480;
    img.onload = function() {
     ctx.drawImage(img, car.x, car.y, 30*imgScale,80);
      };
    img.src = "images/car.png";
};


function drawOb() {
    var canvas = document.getElementById('road');
    var ctx = canvas.getContext('2d');
   ctx.fillStyle = "#61380B";
    ctx.fillRect(20, 20, 280, 20);}

  drawOb();

function drawRoad() {
var canvas = document.getElementById('road');
var ctx = canvas.getContext('2d');
ctx.fillStyle = "#009933";
ctx.fillRect(0, 0, 300, 450);
ctx.fillStyle = "#5c5c3d";
ctx.fillRect(20, 0, 260, 450);
ctx.fillStyle = "#ffffff";
ctx.fillRect(30, 0, 10, 450);
ctx.fillStyle = "#ffffff";
ctx.fillRect(260, 0, 10, 450);
 ctx.fillStyle = "#ffffff";
ctx.fillRect(150, 0, 10, 30);
 ctx.fillStyle = "#ffffff";
ctx.fillRect(150, 50, 10, 30);
 ctx.fillStyle = "#ffffff";
ctx.fillRect(150, 100, 10, 30);
 ctx.fillStyle = "#ffffff";
ctx.fillRect(150, 150, 10, 30);
 ctx.fillStyle = "#ffffff";
ctx.fillRect(150, 200, 10, 30);
 ctx.fillStyle = "#ffffff";
ctx.fillRect(150, 250, 10, 30);
 ctx.fillStyle = "#ffffff";
ctx.fillRect(150, 300, 10, 30);
 ctx.fillStyle = "#ffffff";
ctx.fillRect(150, 350, 10, 30);
ctx.fillStyle = "#ffffff";
ctx.fillRect(150, 400, 10, 30);

drawOb();




        };
