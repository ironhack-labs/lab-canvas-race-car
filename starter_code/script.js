window.onload = function() {


  document.getElementById("start-button").onclick = function() {
  


    startGame();
  };

  function startGame() {
    
    var gameBoard = new GameBoard();
  
    gameBoard.drawGameBoard(); 
    var car = new Car();
    car.drawCar(gameBoard.ctx);
       
  }
};
