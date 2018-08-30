window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    createCanvas();
    createTrack();
  }


  function createCanvas () {
    var html = document.createElement("canvas");
    html.id = "track";
    html.setAttribute("height", "500px");
    html.setAttribute("width", "400px");
    var container = document.getElementById("game-board");
    container.appendChild(html);
  }

  function createTrack () {
    var c = document.getElementById("track");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#008100";
    ctx.fillRect(0, 0, 20, c.height);
    ctx.fillStyle = "#808080";
    ctx.fillRect(20, 0, 30, c.height);
    ctx.fillStyle = "#FFF";
    ctx.fillRect(30, 0, 40, c.height);
    ctx.fillStyle = "#808080";
    ctx.fillRect(40, 0, 360, c.height);
    ctx.fillStyle = "#FFF";
    ctx.fillRect(360, 0, 370, c.height);
    ctx.fillStyle = "#808080";
    ctx.fillRect(370, 0, 380, c.height);
    ctx.fillStyle = "#008100";
    ctx.fillRect(380, 0, c.width, c.height);
    for (var i = 0; i < 15; i++){
      ctx.fillStyle = "#FFF";
      ctx.fillRect(196, 13 + 33 * i, 8, 20);
      // ctx.fillRect(13 + 33 * i, 196, 33 + 33 * i, 204);
    }
  }
};
