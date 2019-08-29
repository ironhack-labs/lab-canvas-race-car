window.onload = function() {

  can = document.querySelector("canvas");
  ctx = can.getContext("2d");
  w = window.innerWidth / 2 -100;
  h = window.innerHeight -100;
  var printObs
  var wObs = Math.random() * w / 2
  
  

  can.setAttribute("width", `${w}px`);
  can.setAttribute("height", `${h}px`);
  const w2 = can.width / 2;
  const h2 = can.height / 2;
  // var obstaculo={
  //   posx:w2,
  //   posy:h2
  // }

function pintar(num) {
  ctx.beginPath()

  ctx.fillStyle = "black"
  ctx.fillRect(50, 0, (w - 100), h)
  ctx.fillStyle = "white"
  ctx.fillRect(70, 0, 10, h)

  ctx.fillRect(w - 80, 0, 10, h)
  ctx.strokeStyle = 'white';

  for (let i = -2; i < 3; i++) {
    ctx.setLineDash([h / 10, 30]);
    ctx.lineDashOffset = num;
    ctx.moveTo(w2+i, 0);
    ctx.lineTo(w2+i, h);
    ctx.stroke();
  }
  if (num % 400  && num!=0 ) {
    printObs=1
    
  } 
  if(printObs==1){
   

    ctx.fillStyle = "red"

    ctx.fillRect(wObs, -num%h, (w - 300), 30)

  }
  
  ctx.closePath();
  
}

  

  


pintar(0)
  

  


  document.getElementById("start-button").onclick = function() {
    startGame( 
      
    );
  };

  function startGame() {
    var contador=0
    var pos = w2 - 25
    var coche=new Image()
    coche.src="images/car.png"
    window.onkeydown = function (e) {
      switch (e.key) {
        case "ArrowLeft":
          pos=moveLeft(pos);
          break;
        case "ArrowRight":
          pos=moveRight(pos);
          break;
      }
    };


    function moveRight(x) {
      if(pos<w-100)
      return x+=10
      else
      return x
    }
    function moveLeft(x) {
      if (pos > 50)
        return x -= 10
      else
        return x
    }

    

   var inter=setInterval(() => {
     contador --
     pintar(contador)
     ctx.drawImage(coche, pos, h-150,50,100);
  
   }, 5);

   
  }
};
