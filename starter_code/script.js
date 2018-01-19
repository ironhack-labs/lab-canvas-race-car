window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    function draw() {
      ctx.fillStyle = "green";
      ctx.fillRect(0, 0, 72.5, 510);
      ctx.fillRect(507.5, 0, 580, 510);
      ctx.fillStyle = "grey";
      ctx.fillRect(72.5, 0, 435, 510);
      ctx.fillStyle = "white";
      ctx.fillRect(108.75, 0, 10, 510);
      ctx.fillRect(461.25, 0, 10, 510);
      ctx.fillRect(285, 30, 10, 60);
      ctx.fillRect(285, 120, 10, 60);
      ctx.fillRect(285, 210, 10, 60);
      ctx.fillRect(285, 300, 10, 60);
      ctx.fillRect(285, 390, 10, 60);
      ctx.fillRect(285, 480, 10, 60);
    }
    draw();

    var player = {};
  }
};
