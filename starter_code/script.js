window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    // console.log('a');
      startGame();
  };

  function startGame() {
    const canvas = document.getElementById("game-board");
    const ctx = canvas.getContext('2d');
    function drawBg (){
      //retângulo da direita
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(0, canvas.height);
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(canvas.width, 0);
      ctx.lineTo(0, 0);
      ctx.fillStyle = 'green';
      // ctx.fillRect(x, y, radius, startAngle, endAngle, true);
      ctx.fill();
      ctx.closePath();

      ctx.fillStyle='grey';
      ctx.fillRect(50,0, 400, canvas.height);

      ctx.beginPath();
      ctx.lineWidth = 10;
      ctx.strokeStyle = '#fff';
      ctx.moveTo(65,0);
      ctx.lineTo(65,canvas.height);
      ctx.moveTo(435,0);
      ctx.lineTo(435,canvas.height);
      ctx.stroke();
      ctx.closePath();

      
      ctx.beginPath();
      ctx.lineWidth = 4;
      // ctx.setlineDash([5,3]);
      ctx.moveTo(canvas.width/2,0);
      ctx.lineTo(canvas.width/2, canvas.height);
      ctx.stroke();
      ctx.closePath();
    }    

    drawBg();
    let carPosition = 225;
    let img = new Image();
    // imgScale = 640/480;
    img.onload = function() {
      ctx.drawImage(img, carPosition, canvas.height - 130, 50, 110);
    };

    img.src = 'images/car.png';

    function moveLeft(){
      if ((carPosition - 25) > 65){
        ctx.clearRect(0, 0, 500, 600);
        drawBg();
        ctx.drawImage(img, carPosition -= 25, canvas.height - 130, 50, 110);
      }
    }
    function moveRight(){
      if ((carPosition + 25) < 400){
        ctx.clearRect(0, 0, 500, 600);
        drawBg();
        ctx.drawImage(img, carPosition += 25, canvas.height - 130, 50, 110);
      }
    }

    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37:
          moveLeft();
          break;
        case 39:
          moveRight();
          break;
      }
     }

     function Obstacles (x) {
       this.y = 0;
       this.x = x;
     }

     let array = [];
     
     function getRandomInt(min,max){
       return Math.floor(Math.random() * (max-min))+ min;
     }
     let obstacle;
     setInterval(() => {
      init = getRandomInt(100, 380);
      obstacle = new Obstacles(init);
      array.push(obstacle);
      console.log(array)
     }, 2000);

     setInterval(() => {
       ctx.clearRect (0, 0, 500, 600);
       drawBg();
       ctx.drawImage(img, carPosition, canvas.height - 130, 50, 110);
       for (let i = 0; i < array.length; i += 1) {
        array[i].y += 1; 
        ctx.rect(array[i].x, array[i].y, 50, 50);
        ctx.fillStyle="red";
        ctx.fill();
       }
     }, 10);


   }


};


