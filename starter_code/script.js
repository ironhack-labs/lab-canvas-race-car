window.onload = function() {
  document.getElementById("start-button").onclick = function() {

    startGame();

  };

  function startGame() {
    var stage = document.getElementById("canvas");
    ctx = stage.getContext("2d");
    x = 520; //posicion en x inicial
    y = 400; //posicion en Y inicial

    var img = new Image();
    img.onload = function() {
      ctx.drawImage(img, x, y);
    };
    img.src = "./images/car.png";

    function insertCar(x, y) {
      ctx.drawImage(img, x, y);
    }
    draw();
    insertCar(x, y);
    function draw() {
      ctx.beginPath();
      ctx.fillStyle = "#AAAAAA";
      ctx.fillRect(0, 0, 1200, 800);

      ctx.beginPath();
      ctx.fillStyle = "#00B200";
      ctx.fillRect(0, 0, 100, 800);

      ctx.beginPath();
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(585, 0, 30, 800);

      function linea() {
        ctx.beginPath();
        ctx.fillStyle = "#AAAAAA";
        ctx.fillRect(585, -20, 30, 30);

        ctx.beginPath();
        ctx.fillStyle = "#AAAAAA";
        ctx.fillRect(585, 130, 30, 30);

        ctx.beginPath();
        ctx.fillStyle = "#AAAAAA";
        ctx.fillRect(585, 280, 30, 30);

        ctx.beginPath();
        ctx.fillStyle = "#AAAAAA";
        ctx.fillRect(585, 430, 30, 30);

        ctx.beginPath();
        ctx.fillStyle = "#AAAAAA";
        ctx.fillRect(585, 580, 30, 30);

        ctx.beginPath();
        ctx.fillStyle = "#AAAAAA";
        ctx.fillRect(585, 730, 30, 30);
      }

      linea();

      ctx.beginPath();
      ctx.fillStyle = "#00B200";
      ctx.fillRect(1100, 0, 100, 800);

      ctx.beginPath();
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(130, 0, 30, 800);

      ctx.beginPath();
      ctx.fillRect(1040, 0, 30, 800);
      ctx.fillStyle = "GREY";

      ctx.setLineDash;
    }
    window.onkeydown = function(event) {
      var keyPr = event.keyCode;

      if (keyPr === 39 && x <= 940) {
        x = x + 20;
      } else if (keyPr === 37 && x > 120) {
        x = x - 20;
      }

      ctx.clearRect(0, 0, 1200, 1200);

      draw();
      insertCar(x, y);
    };
  }
};
