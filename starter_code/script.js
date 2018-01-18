// var myCanvas = document.createElement('canvas');
// myCanvas.id = 'myCanvas';
// myCanvas.className = 'myCanvas';
// document.getElementById('game-board').appendChild(myCanvas);
// $("#myCanvas").attr({ "width": "330px", "height": "750px" })
$(document).ready(() => {
  var ctx = document.getElementById('myCanvas').getContext('2d');

  function createBoard() {
    // ctx.fillStyle = "#00b200";
    // ctx.fillRect(0, 0, 330, 750);
    // ctx.fillStyle = "#808080";
    // ctx.fillRect(10, 0, 310, 750);
    // ctx.fillStyle = "#FFF";
    // ctx.fillRect(15, 0, 5, 750);
    // ctx.fillRect(310, 0, 5, 750);
    // ctx.strokeStyle = "#FFF";
    // ctx.setLineDash([10, 20]);
    // ctx.moveTo(165, 0);
    // ctx.lineTo(165, 750);
    // ctx.stroke();
  }

  function createCar() {
    var img = new Image();
    img.src = "images/car.png"
    var imgScale = 158 / 319;
    img.onload = function () {
      ctx.drawImage(img, 0, 0, 90 * imgScale, 90);
    };
  }

  var car = new CreateCarObject();
  $(document).keydown(function (e) {
    switch (e.which) {
      case 37: // left
        car.move(-1);
        break;
      case 39: // right
        car.move(1);
        break;
      default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  var now = Date.now();
  var delta = 0;
  var render = function () {
    then = now;
    now = Date.now();
    delta = now - then;
    ctx.clearRect(0, 0, 330, 750);
    createBoard();
    // createCar()
    car.render(delta, ctx);
    window.requestAnimationFrame(render);
  };

  function startGame() {
    window.requestAnimationFrame(render);
    
  }
  // $("body").keyup(function (e) {
  //   car.stop();
  // });




  console.log(ctx)

})


  // 2 constructores coche + obstaculos
  // 1 canvas
  // en otro javascript 
