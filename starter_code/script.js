
/** @type {CanvasRenderingContext2D} */

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame(); 

  };
  // draw1(); moveLine (); car();
  

  function startGame() {
    setInterval(() => {
      // clearRect(0,0,400,600);
      draw1(); moveLine (); car();
    }, 100)
    }

   



  }

