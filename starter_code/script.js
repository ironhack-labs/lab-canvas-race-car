window.onload = function () {
  document.getElementById("start-button").onclick = function () {


    startGame();


  };
  var coche = new Car();
  console.log(coche);

  function startGame() {
    var d = 0, s = 0;

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
    $(document).keydown(function (e) {
      switch (e.keyCode) {
        case 39: // izquierda
          console.log("DD")
          d++*(200);

          break;
        case 37: // derecha
          s++;
          break;
      }

      var img = new Image();
      img.onload = function () {
        ctx.drawImage(img, 175 + d-s,450, 50, 100);


      };
      img.src = 'images/car.png'



    });




  }
}