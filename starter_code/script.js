window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
      var ctx = document.getElementById('canvas').getContext("2d");
      var img = new Image();
   
      ctx.lineWidth = 5.0;
      //Draw Road
      ctx.fillStyle= 'green'
      ctx.fillRect(0, 0, 25, 600)
      ctx.fillStyle= 'gray'
      ctx.fillRect(25, 0, 10, 600)
      ctx.fillStyle= 'white'
      ctx.fillRect(35, 0, 10, 600)
      ctx.fillStyle= 'gray'
      ctx.fillRect(45, 0, 275, 600)
      ctx.fillStyle= 'white'
      ctx.fillRect(320, 0, 10, 600)
      ctx.fillStyle= 'gray'
      ctx.fillRect(330, 0, 10, 600)
      ctx.fillStyle= 'green'
      ctx.fillRect(340, 0, 25, 600)
      //Draw Lane Divider 
      ctx.beginPath();
      ctx.strokeStyle='white'
      ctx.setLineDash([10, 10]);
      ctx.moveTo(190, 600);
      ctx.lineTo(190, 0);
      ctx.stroke();

      //Place Car on Map 
      imgScale = 400/600;
      img.onload = function() {
          ctx.drawImage(img, 160, 475,100*imgScale,100);
      };
      img.src = 'images/car.png';
      
    }  
};
