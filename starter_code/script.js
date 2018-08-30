window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    loadImage();
  };


  function startGame() {
    var canvasSpace = document.getElementById("canvas-field");
    var ctx = canvasSpace.getContext("2d");

    ctx.fillStyle = "rgb(65, 130, 0)";
    ctx.fillRect(5, 5, 25, 490);
    ctx.fillRect(375, 5, 25, 490);

    ctx.fillStyle = "rgb(128, 128, 128)";
    ctx.fillRect(30, 5, 10, 490);
    ctx.fillRect(365, 5, 10, 490);
    ctx.fillRect(55, 5, 295, 490);

    
    ctx.strokeStyle = 'white'; 
    ctx.lineWidth = 5;
    ctx.setLineDash([20,20]);
    ctx.beginPath();     
    ctx.moveTo (200, 5); 
    ctx.lineTo (200, 495);
    ctx.stroke();
  }
};

function loadImage(){
  var canvasSpace = document.getElementById("canvas-field");
  var ctx = canvasSpace.getContext("2d");

  var imgCar = new Image();
  var loadedImage = 0;
  imgScale = 319/158;  
  imgCar.src = '../starter_code/images/car.png';

  function drawImages (){
    loadedImage++;
    if (loadedImage === 1){
      ctx.drawImage (imgCar, 170, 372, 60, 60*imgScale);
    }
  }
  imgCar.onload = function(){
    drawImages();
  }
};
