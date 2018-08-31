window.onload = function() {
  document.getElementById("start-button").onclick = function() {
  startGame(); //es donde voy a crear el espacio
  //mas adelante necesito crear otra función para cargar la imagen del coche
  // depués otra para cargar la imagen
  // y por último otra para que realice el mvto dcha-izq.
  };
  
  function startGame() {
    var canvasGrid = document.getElementById("RaceCar");
    var ctx = canvasGrid.getContext ("2d");
    
    ctx.fillStyle = "rgb(65, 130, 0";
    ctx.fillRect = (0, 0, 40, 600);
    ctx.stroke();
  }



};  