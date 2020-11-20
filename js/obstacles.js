function drawObstacles(x, y, w) {
    mainCtx.fillStyle = `red`;
    mainCtx.fillRect(x, y, w, 40);
  }
    

  function createObstacles() {
    
    let x = Math.floor(Math.random()*500);
    let w = Math.floor(Math.random()*250);
   
    drawObstacles(x, 0, w);
  
    
  }