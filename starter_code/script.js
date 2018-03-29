window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  var canvas = document.getElementById("canvas");

  function startGame() {
    var carretera = new Carretera();
    carretera.draw();
  }

  
};
