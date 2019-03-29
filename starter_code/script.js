window.onload = function() {
  var canvas = document.getElementById("game-board");

  /** @type {CanvasRenderingContext2D} */
  var ctx = canvas.getContext("2d");

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    // alert('hola lau')

    let w = 400;
    let h = 600;
    let w2 = w / 2;
    let h2 = h / 2;

    function setup(canvas, draw) {
      function setCanvasDimensions() {
        canvas.setAttribute("height", h);
        canvas.setAttribute("width", w);
        // alert("adios")
      }
      setCanvasDimensions();
      draw();
    }
    let xCoche = w2 - 35;
    let variablePosicion = 0;

    let puntos = 0;
    function draw() {
      function fondo() {
        function lado1() {
          ctx.beginPath();
          ctx.strokeStyle = `green`;
          ctx.lineWidth = 60;
          ctx.moveTo(0, 0);
          ctx.lineTo(0, h);
          ctx.stroke();
          ctx.closePath();
        }
        lado1();

        function lado2() {
          ctx.beginPath();
          ctx.strokeStyle = `green`;
          ctx.lineWidth = 60;
          ctx.moveTo(w, 0);
          ctx.lineTo(w, h);
          ctx.stroke();
          ctx.closePath();
        }
        lado2();

        function carretera(params) {
          ctx.beginPath();
          ctx.strokeStyle = `gray`;
          ctx.lineWidth = 320;
          ctx.moveTo(w2, 0);
          ctx.lineTo(w2, h);
          ctx.stroke();
          ctx.closePath();
        }
        carretera();

        function lineaCarretera(params) {
          ctx.beginPath();
          ctx.strokeStyle = `white`;
          ctx.setLineDash([20, 20]);
          ctx.lineWidth = 5;
          ctx.moveTo(w2, 0);
          ctx.lineTo(w2, h);
          ctx.stroke();
          ctx.closePath();
        }
        lineaCarretera();
      }
      fondo();

      function car() {
        var img = new Image();
        imgScale = 15 / 31;
        img.onload = function() {
          ctx.drawImage(img, xCoche, h2 + 130, 150 * imgScale, 150);
        };
        img.src = "./images/car.png";
        window.onkeydown = function(e) {
          if (e.keyCode === 37) {
            xCoche -= 20;
          }

          if (e.keyCode === 39) {
            xCoche += 20;
          }
        };
        // var img1 = new Image() // Create new <img> element
        // img1.src = './images/car.png' // Set source path
        // ctx.drawImage(img1.src, w2, h2)
        // alert("hola")
      }
      car();
    }

    function obstaculos(params) {
      function obstaculo1() {
        ctx.beginPath();
        ctx.strokeStyle = `brown`;
        ctx.lineWidth = 10;
        ctx.moveTo(0, variablePosicion);
        ctx.lineTo(100, variablePosicion);
        ctx.setLineDash([0, 0]);
        ctx.stroke();
        ctx.closePath();
      }
      obstaculo1();

      function obs2() {
        ctx.beginPath();
        ctx.strokeStyle = `brown`;
        ctx.lineWidth = 10;
        ctx.moveTo(300, variablePosicion + 60);
        ctx.lineTo(400, variablePosicion + 60);
        ctx.setLineDash([0, 0]);
        ctx.stroke();
        ctx.closePath();
      }
      obs2();

      function obs3() {
        ctx.beginPath();
        ctx.strokeStyle = `brown`;
        ctx.lineWidth = 10;
        ctx.moveTo(200, variablePosicion + 120);
        ctx.lineTo(300, variablePosicion + 120);
        ctx.setLineDash([0, 0]);
        ctx.stroke();
        ctx.closePath();
      }
      obs3();

      function obs4() {
        ctx.beginPath();
        ctx.strokeStyle = `brown`;
        ctx.lineWidth = 10;
        ctx.moveTo(0, variablePosicion + 240);
        ctx.lineTo(100, variablePosicion + 240);
        ctx.setLineDash([0, 0]);
        ctx.stroke();
        ctx.closePath();
      }
      obs4();
      variablePosicion += 20;

      function score() {
        puntos += 1;
        ctx.font = "10px Arial";
        ctx.fillText(`Score: ${puntos} pts`, 30, 20);
      }
      score();
    }

    setInterval(function() {
      ctx.clearRect(0, 0, 400, 600);
      setup(canvas, draw);
      obstaculos();
    }, 1000);

    // setup(canvas, draw)
  }
};
