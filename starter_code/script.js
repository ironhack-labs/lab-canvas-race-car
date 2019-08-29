window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    const myCanvasDOMEl = document.querySelector("#myCanvas");
    const ctx = myCanvasDOMEl.getContext("2d");
    const w = 600;
    const h = 800;
    const w2 = w / 2;
    const h2 = h / 2;
    const speed = 40;
    let counter = 0;
    const speedLine = 5;

    // const PI = Math.PI;
    // const PI_DOUBLE = Math.PI * 2;
    // const PI_HALF = Math.PI / 2;
      setInterval(() => {
      ctx.clearRect(0, 0, w, h);
      setCanvasDimensions();
      setRoad();
      setCar();
      moveCar();
      counter++;
    }, 1000/60);

    function setCanvasDimensions() {
      // x axis
      myCanvasDOMEl.setAttribute("width", `${w}px`);
      // y axis
      myCanvasDOMEl.setAttribute("height", `${h}px`);
    }

    function setRoad() {
      ctx.beginPath();
      ctx.rect(0, 0, w, h);
      ctx.fillStyle = "green";
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.rect(50, 0, w - 100, h);
      ctx.fillStyle = "grey";
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.rect(70, 0, w - 585, h);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.rect(515, 0, w - 585, h);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();
      
      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.lineWidth = 10;
      ctx.moveTo(w2, h + counter * speedLine);
      ctx.lineTo(w2, 0);
      ctx.setLineDash([20]);
      ctx.stroke();
      ctx.closePath();
    }
    let positions = {
      x: w2 - 60,
      y: h2 + 190
    };

    function setCar() {
      let car = new Image();
      car.src = "./images/canoa.png";
      // car.onload = function(){
      ctx.drawImage(car, positions.x, positions.y, 100, 200);
      // }
    }

    function moveCar() {
      window.onkeydown = function(e) {
        switch (e.key) {
          case "ArrowLeft":
            positions.x -= speed;
            if (positions.x <= 63) {
              positions.x = 63;
            }
            break;
          case "ArrowRight":
            positions.x += speed;
            if (positions.x >= 420) {
              positions.x = 420;
            }
            break;
        }
      };
    }
  }
};

// window.onkeydown = function(e) {
//   console.log("hola");
//   switch (e.key) {
//     case "ArrowLeft":
//       positions.x -= speed;
//       break;
//     case "ArrowRight":
//       positions.x += speed;
//       break;
//     case "ArrowUp":
//       positions.y -= speed;
//       if (positions.y <= circleRadius) {
//         positions.y = circleRadius;
//       }
//       break;
//     case "ArrowDown":
//       positions.y += speed;
//       if (positions.y > h + circleRadius) {
//         positions.y = -circleRadius * 2;
//       }
//       break;
//   }
// };
