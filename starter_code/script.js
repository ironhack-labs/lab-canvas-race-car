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
    const PI = Math.PI;
    // const PI_DOUBLE = Math.PI * 2;
    // const PI_HALF = Math.PI / 2;
    function setCanvasDimensions() {
      // x axis
      myCanvasDOMEl.setAttribute("width", `${w}px`);
      // y axis
      myCanvasDOMEl.setAttribute("height", `${h}px`);
    } setCanvasDimensions();

    function setRoad (){
      ctx.beginPath();
      ctx.rect(0, 0, w, h);
      ctx.fillStyle = "green";
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.rect(50, 0, (w-100), h);
      ctx.fillStyle = "grey";
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.rect(70, 0, (w-585), h);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.rect(515, 0, (w-585), h);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.rect(295, 0, (w-585), h);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();

    
    } setRoad ();

    setInterval(() => {
     


    }, 10);
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
