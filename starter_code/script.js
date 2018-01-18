$(document).ready(() => {
  var ctx = document.getElementById('myCanvas').getContext('2d');
  var car = new CreateCarObject(ctx);
  var now = Date.now();
  var delta = 0;
  var i = 0;

  function createBoard() {
    ctx.fillStyle = "#00b200";
    ctx.fillRect(0, 0, 330, 750);
    ctx.fillStyle = "#808080";
    ctx.fillRect(10, 0, 310, 750);
    ctx.fillStyle = "#FFF";
    ctx.fillRect(15, 0, 5, 750);
    ctx.fillRect(310, 0, 5, 750);
    ctx.strokeStyle = "#FFF";
    ctx.setLineDash([10, 20]);
    ctx.moveTo(165, 0);
    ctx.lineTo(165, 750);
    ctx.stroke();
  }

  function step() {
    var img = new Image();
    img.src = "images/car.png"
    imgScale = 158 / 319;
    img.onload = function () {
      ctx.clearRect(0, 0, 330, 750)
      createBoard();
      ctx.drawImage(img, car.x, 650, 90 * imgScale, 90);
      requestAnimationFrame(step)
    }
  }

  function startGame() {cod
    requestAnimationFrame(step);
  }

  $(document)
    .keydown(function (e) {
      switch (e.which) {
        case 37: // left
          car.x -= 5;
          if (car.x < 20) {
            car.x = 20;
          }
          break;
        case 39: // right
          car.x += 5;
          if (car.x > 265) {
            car.x = 265;
          }
          break;
        default:
          return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
    });

  $("#start-button")
    .click(function () {
      startGame();
    });

})

