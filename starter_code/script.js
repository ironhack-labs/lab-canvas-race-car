window.onload = function() {
  
  
  $("#start-button").on("click", function(){
    startGame();
  });

  function startGame() {    

    var canvas = new Canvas("main-road");
    canvas.start();
  }
};
