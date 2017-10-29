<<<<<<< HEAD
//
//
//
//
// window.onload = function() {
//
//
//   // var Obstacle = function() {
//   //   ctx.fillStyle = "#950000";
//   //   ctx.fillRect(this.x, this.y, 120, 40);
//   //
//   //   this.x = Math.floor(Math.random(450 - 50) * 50);
//   //   this.y = 0;
//   // }
//
//   document.getElementById("start-button").onclick = function() {
//
//     var car = new Car();
//     this.moveRigth();
//     this.moveLeft();
//     this.drawCar(car);
//     // startGame();
//
//     // var obstacle = new Obstacle ();
//   };
//
// var Car = function() {
//   x =  225,
//   y = 500
// }
//
// Car.prototype.moveLeft = function() {
//   if(this.x > 40){
//     this.x -= 25
//   };
// }
//
// Car.prototype.moveRigth = function() {
//   if(this.x < 420){
//     this.x += 25;
//   };
// }
//
// function startGame() {
//   var car = new Car();
//   // moveRigth();
//   // moveLeft();
//   // this.drawCar(car);
// }
//
// Car.protoype.drawCar = function(car) {
//   var img = new Image();   // Create new img element
//   img.src = './images/car.png';
//   imgScale = 158/319;
//   img.onload = function() {
//     ctx.drawImage(img, car.x, car.y, 100*imgScale, 100);
//   }
// }
//
//   // function startGame() {
//   //   car = {
//   //     x: 225,
//   //     y: 500,
//   //
//   //     moveLeft:  function() {
//   //       if(this.x > 40){
//   //         this.x -= 25
//   //       }
//   //     },
//   //
//   //     moveRight: function() {
//   //       if(this.x < 420){
//   //         this.x += 25;
//   //       }
//   //     }
//   //   }
//
//
//   //   document.onkeydown = function(e) {
//   //     switch (e.keyCode) {
//   //       case 37: car.moveLeft();  console.log('left',  car); break;
//   //       case 39: car.moveRight(); console.log('right', car); break;
//   //     }
//   //     updateCanvas();
//   //   }
//   //
//   //   function updateCanvas() {
//   //     ctx.clearRect(0,0,1500,1700);
//   //     draw();
//   //     // drawCar(car);
//   //   }
//   //
//   //   updateCanvas();
//   // }
// // };
=======
window.onload = function() {

  document.getElementById("start-button").onclick = function() {
    var canvas = new Canvas();
    var car = new Car();
    console.log(car);
    var obstacles = new Obstacles();

    // canvas.startGame(car, obstacles, ...);
    canvas.startGame(car, obstacles);

    setInterval(function () {
      canvas.updateCanvas();
    }, 100);

    //requestAnimation Mirar
  };

};
>>>>>>> prototype
