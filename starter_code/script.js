window.onload = function() {
  
  
  document.getElementById("start-button").onclick = function(e) {
    board();
    animate();
  };
  
  const myCanvas = document.getElementById('my-canvas');
  const ctx = myCanvas.getContext('2d');
  let x = 210;
  let y = 0;
  let pBlock = 0;
  let pBlock2 = 0;
  let xPosition = 0;

  function board() {
     ctx.fillStyle = 'green';
     ctx.fillRect(0,0,500,750);
     ctx.fillStyle = 'grey';
     ctx.fillRect(20,0,460,750);
     ctx.fillStyle = 'white';
     ctx.fillRect(25,0,5,750);
     ctx.fillRect(470,0,5,750);
  }
  
  function draw(){
    const img = new Image();
    img.src = "./images/car.png";
    ctx.drawImage(img, x, 500, 79, 160);
  }
  
  function drawMoveDash(){
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.setLineDash([30, 30]);
    ctx.moveTo(250, -750 + y);
    ctx.lineTo(250, 0 + y);
    ctx.stroke();
    ctx.closePath();

    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.setLineDash([30, 30]);
    ctx.moveTo(250, 30 + y);
    ctx.lineTo(250, 750 + y);
    ctx.stroke();
    ctx.closePath();
    y += 5;
    if( y === 750){
      y = 0;
    }
  }
  

 // function random(){
 //   xPosition = Math.round(Math.random() * 400);
 // }
    
  function blocks1(){
    ctx.fillStyle = 'brown';
    ctx.fillRect(400,pBlock2-350,300,20);
    pBlock2 += 2;
    if( pBlock2 === 1150){
      pBlock2 = 0;
    }
  }
  
  function blocks2(){
    ctx.fillStyle = 'brown';
    ctx.fillRect(xPosition+50,pBlock,100,20);
    pBlock += 2;
    if( pBlock === 750){
      pBlock = 0;
    }
  }

 // setInterval(function(){ 
    
    //console.log(xPosition);
  //  blocks(),9000});
    
  document.onkeydown = function(e) {
    controlPosition(e.keyCode)
  };

  function controlPosition(key) {
    let result = key;
    if(result === 37){
      if ( x > 10){
        x -= 10;
      }
    }
    if(result === 39) {
      if ( x < 420){
        x += 10;
      }
    }
   return false; 
  };

  function clear(){
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);  
  }
  
  function animate(){
    clear();
    board();
    drawMoveDash();
    draw();
    blocks1();
    blocks2();
    controlPosition();
    window.requestAnimationFrame(animate);  
  }
  
};
