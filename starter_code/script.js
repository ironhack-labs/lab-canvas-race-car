window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();


  };

  function startGame() {
    var canvas = document.getElementById('road');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = '#808B96';
    ctx.fillRect(0, 0, 400, 600);
    ctx.fillStyle = '#27AE60';

    ctx.fillRect(0, 0, 30, 600);

    ctx.fillRect(370, 0, 30, 600);

    ctx.clearRect(40, 0, 10, 600);
    ctx.clearRect(350, 0, 10, 600);

    ctx.strokeStyle = "white";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.setLineDash([30, 20]);
    ctx.moveTo(200, 570);
    ctx.lineTo(200, 30);
    ctx.stroke()


    var img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 175, 450, 50, 100);


    };
    img.src = 'images/car.png'



  };



  }

