window.onload = function() {
  document.getElementById('start-button').onclick = function() {


    startGame();


  };

  function startGame() {

    function drawGameBoard() {
      var ctx = document.getElementById('race-game').getContext('2d');

      ctx.fillStyle = 'rgb(0, 129, 0)';
      ctx.fillRect(0, 0, 120, 900);
      ctx.fillStyle = 'rgb(128, 128, 128)';
      ctx.fillRect(120, 0, 50, 900);
      ctx.fillStyle = 'rgb(255, 255, 255)';
      ctx.fillRect(145, 0, 50, 900);
      ctx.fillStyle = 'rgb(128, 128, 128)';
      ctx.fillRect(170, 0, 460, 900);
      ctx.fillStyle = 'rgb(255, 255, 255)';
      ctx.fillRect(630, 0, 50, 900);
      ctx.fillStyle = 'rgb(128, 128, 128)';
      ctx.fillRect(655, 0, 50, 900);
      ctx.fillStyle = 'rgb(0, 129, 0)';
      ctx.fillRect(680, 0, 120, 900);
      ctx.beginPath();
      ctx.setLineDash([30, 30]);
      ctx.moveTo(400, 1000);
      ctx.lineTo(400, 10);
      ctx.lineWidth = 10;
      ctx.strokeStyle = 'rgb(255, 255, 255)';
      ctx.stroke();
    }

    function drawCar() {
      var ctx = document.getElementById('race-game').getContext('2d');
      var img = new Image();
      imgScale = 640/480;
      img.onload = function () {
        ctx.drawImage (img, 350, 550, 100, 190);
      };
      img.src = './images/car.png';
    }

    drawCar();
    drawGameBoard();

  }



};
