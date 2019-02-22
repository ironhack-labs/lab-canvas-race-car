document.getElementById("start-button").onclick = function() {
    startGame();
  };
  
  let frames = 0;

  function startGame() {
    document.getElementById('game-board').innerHTML = ''
    let canvas = document.createElement("canvas");
    canvas.width = 480;
    canvas.height = 470;
    canvas.style.border = "thick solid #808080";
    context = canvas.getContext("2d");
    setInterval(()=>{updateGameAre(context, canvas)}, 20);
    document.getElementById('game-board').appendChild(canvas);    
  }
  
  function updateGameAre (ctx, frame){    
    frames +=1;
    road(ctx, frame);    
    carUpdate(ctx, frame);
  }
  function carUpdate (ctx, frame){
    car
  }
  function road (ctx, frame){
    // this is static, we dont have to paint it, over and over again. Or do I ?
    let doce = frame.width / 12 
    let dos = frame.width / 2 ; //dot know why the ** this is not the middle. 
    let extra = doce / 3;    
    reactangle(ctx, 0 ,frame.width, 0, '#808080', frame.height ) //road    
    reactangle(ctx, 0 ,doce, 0, '#008a06', frame.height) //left green
    reactangle(ctx, 0 ,doce, (frame.width - doce), '#008a06', frame.height) //right green 
    reactangle(ctx, 0 ,extra, extra + doce, '#ffffff', frame.height) // left white
    reactangle(ctx, 0 ,extra, (frame.width - (extra * 2 + doce)), '#ffffff', frame.height) // right white     
    // I dont know how to animate this
    let top = 0;
    for (let i = 0; i < 15; i++) {    
      top = top + i;          
        reactangle(ctx, top, extra, dos - extra, '#ffffff', frame.height / 12) 
        // reactangle(ctx, top + frames , extra, dos - extra, '#ffffff', frame.height / 12) 
      top = (frame.height / 12) + top + 15 ;
    }
  }
  function reactangle(ctx, top ,width, start, color, height) {
    ctx.beginPath();
    ctx.rect(start, top, width, height);
    ctx.fillStyle = color;    
    ctx.fill();
  }
