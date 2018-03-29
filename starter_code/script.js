window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();

  };

  function startGame() {
      var lienzo = new Canvas('road');
      lienzo.draw(); 
  }
}
