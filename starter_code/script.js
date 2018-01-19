// window.onload = function() {

//   var gameBoard = new GameBoard();
//   var car = new Car();

//   document.getElementById("start-button").onclick = function() {
//     startGame();
//   };

//   function startGame() {
      
//     gameBoard.drawGameBoard(); 
//     car.drawCar(gameBoard.ctx);      
//   }

//   $(document).keydown(function (e) {
//     car.moveCar(e.keyCode);
//   });

// };


$(document).ready(function(){

  var gameBoard = new GameBoard();
  var car = new Car();

  $('#start-button').on('click', function (){
    startGame();
  });

  function startGame() {
      
    gameBoard.drawGameBoard(); 
    car.drawCar(gameBoard.ctx);      
  }

  $(document).keydown(function (e) {
    car.moveCar(e.keyCode);
  });
  
})