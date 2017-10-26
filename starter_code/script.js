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

    var canvas = document.getElementById("car-game");
    var ctx = canvas.getContext('2d');

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

    var car = {
      x: 25,
      y: 25,
      moveUp:    function() { this.y -= 25 },
      moveDown:  function() { this.y += 25 },
      moveLeft:  function() { this.x -= 25 },
      moveRight: function() { this.x += 25 },
    }

    function draw(car) {
      var img = new Image();
      img.onload = function() {
         ctx.drawImage(img, car.x, car.y, 50, 50);
      }
      img.src = "images/car.png";
    }


    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37: car.moveLeft();  console.log('left',  car); break;
        case 39: car.moveRight(); console.log('right', car); break;
      }
      updateCanvas();
    }

    function updateCanvas() {
      ctx.clearRect(0,0,1500,1700);
      ctx.fillText("Car_x: " + car.x, 580,40);
      ctx.fillText("Car_y: " + car.y, 580,60);
      draw(car)
    }

    updateCanvas()

};
}
