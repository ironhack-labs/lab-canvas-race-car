window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var canvas = document.getElementById('board');
  var ctx = canvas.getContext('2d');

  function draw(){ //fills the canvas with the road collors 
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 450, 600);
    ctx.fillStyle = "gray";
    ctx.fillRect(30, 0, 390, 600);
    ctx.fillStyle = "white";
    ctx.fillRect(40, 0, 10, 600);
    ctx.fillRect(400, 0, 10, 600);
    for(y = 20; y < 580; y += 70){
      ctx.fillRect(220, y, 10, 40);
    }
  }

  function setPlayerCar(){
    var img = new Image();   // Create new img element
    img.src = 'images/car.png';
    img.onload = function() {
      ctx.drawImage(img, 190, 450,150*158/319,150);
    };
  }

  function clearCanvas() {
    ctx.clearRect(0,0,450,600);
  }

  function moveCarLeft(){
    speed -= 2;
    clearCanvas();
    ctx.fillRect(100,speed1,50,50);
    ctx.fillRect(300,speed2,50,50);
    ctx.fillRect(500,speed3,50,50);
    window.requestAnimationFrame(updateCanvas);
  }
  
  window.requestAnimationFrame(updateCanvas);

  function startGame() {
    draw();
    setPlayerCar();
  }
  
};




