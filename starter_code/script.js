window.onload = function() {
  var canvas = document.getElementById('canvasss');
  var ctx = canvas.getContext('2d');
  var car = new Car();
  var img = new Image();
  var vimScale = 640/480;
  img.src = 'images/car.png';
  document.getElementById("start-button").onclick = function() {
    startGame();

  };

  document.onkeydown(e){
    if(){

    }
  }

  function paintCar(){
       ctx.drawImage(img, car.x, car.y,31,63);
  }

    function road(){
      ctx.fillStyle = 'rgb(54, 122, 44)';
      ctx.fillRect(50, 0, 200, 150);

      ctx.fillStyle = 'rgb(177, 187, 209)';
      ctx.fillRect(70, 0, 160, 150);

      ctx.fillStyle = 'rgb(252, 252, 252)';
      ctx.fillRect(75, 0, 5, 150);

      ctx.fillStyle = 'rgb(252, 252, 252)';
      ctx.fillRect(220, 0, 5, 150);

      ctx.fillStyle = 'rgb(252, 252, 252)';
      ctx.fillRect(148, 0, 5, 150);

      // LINEAS
      ctx.fillStyle = 'rgb(177, 187, 209)';
      ctx.fillRect(148, 2, 5, 5);

      ctx.fillStyle = 'rgb(177, 187, 209)';
      ctx.fillRect(148, 12, 5, 5);

      ctx.fillStyle = 'rgb(177, 187, 209)';
      ctx.fillRect(148, 22, 5, 5);

      ctx.fillStyle = 'rgb(177, 187, 209)';
      ctx.fillRect(148, 32, 5, 5);

      ctx.fillStyle = 'rgb(177, 187, 209)';
      ctx.fillRect(148, 42, 5, 5);

      ctx.fillStyle = 'rgb(177, 187, 209)';
      ctx.fillRect(148, 52, 5, 5);

      ctx.fillStyle = 'rgb(177, 187, 209)';
      ctx.fillRect(148, 62, 5, 5);

      ctx.fillStyle = 'rgb(177, 187, 209)';
      ctx.fillRect(148, 72, 5, 5);

      ctx.fillStyle = 'rgb(177, 187, 209)';
      ctx.fillRect(148, 82, 5, 5);

      ctx.fillStyle = 'rgb(177, 187, 209)';
      ctx.fillRect(148, 92, 5, 5);

      ctx.fillStyle = 'rgb(177, 187, 209)';
      ctx.fillRect(148, 102, 5, 5);

      ctx.fillStyle = 'rgb(177, 187, 209)';
      ctx.fillRect(148, 112, 5, 5);

      ctx.fillStyle = 'rgb(177, 187, 209)';
      ctx.fillRect(148, 122, 5, 5);

      ctx.fillStyle = 'rgb(177, 187, 209)';
      ctx.fillRect(148, 132, 5, 5);

      ctx.fillStyle = 'rgb(177, 187, 209)';
      ctx.fillRect(148, 142, 5, 5);

      ctx.fillStyle = 'rgb(177, 187, 209)';
      ctx.fillRect(148, 152, 5, 5);
    }

  function startGame() {
    road();
    paintCar();




// var car= {
//   x: 131,
//   y:90,
//   moveLeft : function() {this.y -= 5},
//   moveLeft : function() {this.y -= 5},
// }
//
// document.onkeydown = function (e){
//   switch (e.keyCode){
//     case 16: car.moveLeft();
//     break;
//     case 17: car.moveRight();
//     break;
//   }
//   updateCanvas();
// }
//
// function draw(car){
//   var img = new Image();
//   img_onload = function(){
//     ctx.drawImage(img, car.x, car.y, 200, 200);
//   }
//   img.src="images/car.png";
// }
//
// function updateCanvas(){
//   ctx.clearRect(0,0,1500,1700);
//   draw(car);
// }
//
//


}



};
