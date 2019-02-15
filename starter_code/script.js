window.onload = function() {
  // StartGame();

  var app = new StartGame ()
  
  document.getElementById("start-button").onclick = function() {
    app.init("canvasExp")
  };
};
