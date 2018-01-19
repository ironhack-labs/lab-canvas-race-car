function GameBoard(ctx) {
  this.ctx = document.getElementById('canvas').getContext('2d');
}

GameBoard.prototype.drawRoad = function (x) {
  //solidos carretera
  this.ctx.fillStyle = '#1e8400';
  this.ctx.fillRect(0, 0, 600, window.innerHeight);
  this.ctx.fillStyle = '#a0a0a0';
  this.ctx.fillRect(60, 0, 480, window.innerHeight);
  this.ctx.fillStyle = '#fff';
  this.ctx.fillRect(80, 0, 10, window.innerHeight);
  this.ctx.fillRect(510, 0, 10, window.innerHeight);
  this.ctx.strokeStyle = '#fff';
  this.ctx.setLineDash([30, 20]);
  this.ctx.moveTo(298, 0);
  this.ctx.lineWidth = 8;
  this.ctx.lineTo(298, window.innerHeight);
  this.ctx.stroke();
}

GameBoard.prototype.clean = function () {
  this.ctx.clearRect(0, 0, 600, 1500)
}

// var ctx;
// var car;
// var render;
// var now = Date.now();
// var delta = 0;

// window.onload = function () {
//   document.getElementById("start-button").onclick = function () {
//     if ($('#canvas').length < 1) {
//       startGame();

//     }

//   };

//   function startGame() {
//     $('#game-board').html('<canvas id="canvas"></canvas');
//     $('#canvas').attr({
//       height: window.innerHeight,
//       width: 600
//     });

//     cv = document.getElementById('canvas');
//     ctx = cv.getContext('2d');
//     showRoad();
//     window.requestAnimationFrame(render);
//     // instancia
//     car = new Car(ctx);

//   };
// };


// function showRoad() {
//   render = function () {
//     then = now;
//     now = Date.now();
//     delta = now - then;
//     // ctx.clearRect(0, 0, cv.width, cv.height);
//     car.render(delta);
//     window.requestAnimationFrame(render);
//   };

//   //altura
//   var vHeight = window.innerHeight;
//   //solidos carretera
//   ctx.fillStyle = '#1e8400';
//   ctx.fillRect(0, 0, 600, window.innerHeight);
//   ctx.fillStyle = '#a0a0a0';
//   ctx.fillRect(60, 0, 480, window.innerHeight);
//   ctx.fillStyle = '#fff';
//   ctx.fillRect(80, 0, 10, window.innerHeight);
//   ctx.fillRect(510, 0, 10, window.innerHeight);
//   ctx.strokeStyle = '#fff';
//   ctx.setLineDash([30, 20]);
//   ctx.moveTo(298, 0);
//   ctx.lineWidth = 8;
//   ctx.lineTo(298, window.innerHeight);
//   ctx.stroke();



// }

// //eventos teclado
// $(document).keydown(function (e) {
//   switch (e.keyCode) {
//     case 37:
//       car.moveCar(-1);
//       break;
//     case 39:
//       car.moveCar(1);
//       break;
//   }
// });