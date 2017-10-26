window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

    var canvas = document.getElementById('road');
    var ctx = canvas.getContext('2d');

    function drawRoad() {
    var canvas = document.getElementById('road');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = "#009933";
    ctx.fillRect(0, 0, 300, 450);
    ctx.fillStyle = "#5c5c3d";
    ctx.fillRect(20, 0, 260, 450);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(30, 0, 10, 450);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(260, 0, 10, 450);
     ctx.fillStyle = "#ffffff";
    ctx.fillRect(150, 0, 10, 30);
     ctx.fillStyle = "#ffffff";
    ctx.fillRect(150, 50, 10, 30);
     ctx.fillStyle = "#ffffff";
    ctx.fillRect(150, 100, 10, 30);
     ctx.fillStyle = "#ffffff";
    ctx.fillRect(150, 150, 10, 30);
     ctx.fillStyle = "#ffffff";
    ctx.fillRect(150, 200, 10, 30);
     ctx.fillStyle = "#ffffff";
    ctx.fillRect(150, 250, 10, 30);
     ctx.fillStyle = "#ffffff";
    ctx.fillRect(150, 300, 10, 30);
     ctx.fillStyle = "#ffffff";
    ctx.fillRect(150, 350, 10, 30);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(150, 400, 10, 30);


            }

  drawRoad();


  }









};
