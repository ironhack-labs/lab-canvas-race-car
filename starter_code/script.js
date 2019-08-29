window.onload = function() {
  const myCanvasDOMEl = document.querySelector("#myCanvas");
  const ctx = myCanvasDOMEl.getContext("2d");
  const w = 700;
  const h = window.innerHeight;
  const w2 = w / 2;
  const h2 = h / 2;

  document.getElementById("start-button").onclick = function() {
    startGame();
}; 

function startGame() {

    function setCanvasDimensions() {
      myCanvasDOMEl.setAttribute("width", `${w}px`);
      myCanvasDOMEl.setAttribute("height", `${h}px`);
    }
    setCanvasDimensions();
  
    window.onresize = setCanvasDimensions;
  
    ctx.beginPath(); 
    ctx.fillStyle = "#438200";
    ctx.fillRect(0,0,w,h);  
    ctx.closePath();

    ctx.beginPath(); 
    ctx.fillStyle = "#808080";
    ctx.fillRect(100,0,w-200,h);
    ctx.closePath();

    ctx.beginPath(); 
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(115,0,w/30,h);
    ctx.closePath(); 

    ctx.beginPath(); 
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(w-140,0,w/30,h);
    ctx.closePath(); 

    ctx.beginPath(); 
    ctx.strokeStyle = "#ffffff";
    ctx.setLineDash([50,50]);
    ctx.moveTo(w2,0);
    ctx.lineTo(w2,h);
    ctx.lineWidth = w/60;
    ctx.stroke();
    ctx.closePath(); 


  //   // setInterval(() => {

  //   //   }, 10);

  //   // }
  }

}