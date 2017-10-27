window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = green;
   ctx.fillRect(0, 0, 400, 700);

 ctx.fillStyle = grey;
   ctx.fillRect(50, 0, 300, 700);

 ctx.fillStyle = white;
   ctx.fillRect(195, 0, 10, 700);

 ctx.fillStyle = white;
   ctx.fillRect(70, 0, 20, 700);

 ctx.fillStyle = white;
   ctx.fillRect(310, 0, 20, 700);





  function startGame() {
    //var car = new Car
  }
};
