// window.onload = function() {
//   document.getElementById("start-button").onclick = function() {
//     startGame();
//   };
//
//   function startGame() {
//
//   }
// };


$(document).ready(function() {

  $("#start-button").on('click', function() {
    $('.game-intro').css('display', 'none');

    var myObstacles = [];
    var canvas = document.getElementById("car-game");
    var ctx = canvas.getContext('2d');

function paintBoard (){
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, 700, 550);

    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 50, 550);
    ctx.fillRect(650 ,0, 50, 550);

    ctx.fillStyle = "white";
    ctx.fillRect(60, 0, 20, 550);
    ctx.fillRect(620, 0, 20, 550);

    ctx.lineWidth = 10;
    ctx.strokeStyle = "white";

    ctx.setLineDash([40,70]);
    ctx.moveTo(350, 0);
    ctx.lineTo(350, 550);
    ctx.stroke();
};
    var car = {
      x: 320,
      y: 350,
      moveLeft:  function() {
        if (this.x > 85)
          this.x -= 15 },
      moveRight: function() {
        if (this.x < 560)
        this.x += 15 },

    }

    function draw(car) {
      var img = new Image();
      img.onload = function() {
         ctx.drawImage(img, car.x, car.y, 60, 110);
      }
      img.src = "./images/car.png";
    }


    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37: car.moveLeft();  console.log('left',  car); break;
        case 39: car.moveRight(); console.log('right', car); break;
      }
      updateCanvas();
    }

    function updateCanvas() {
      ctx.clearRect(0,0,700,550);
      ctx.fillText("Car x: " + car.x, 0,40);
      ctx.fillText("Car y: " + car.y, 100,60);
      paintBoard()
      draw(car)
    }


    updateCanvas();


});
})
