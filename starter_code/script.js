window.onload = function() {


  document.getElementById("start-button").onclick = function() {
  


    startGame();
  };

  function startGame() {
    
    var gameBoard = new GameBoard();
    //var car = new Car();
    
    //car.drawCar(gameBoard.ctx);
    gameBoard.drawGameBoard(); 

    var img = new imgen();
    img.src = "images/car.png";
    gameBoard.ctx.drawImage(img,10,10,150,180);

  


   
  }
};
