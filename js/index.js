const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    draw();
    drawImage();
    
  };

  function startGame() {
    
  }

  function draw(){
    ctx.beginPath();
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 0, 330, 700);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'grey'
    ctx.fillRect(25, 0, 280, 700);
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(175, 0);
    ctx.lineTo(175, 700);
    ctx.stroke();
    ctx.lineWidth = 15;
    ctx.strokeStyle = 'white';
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(40, 0);
    ctx.lineTo(40, 700);
    ctx.stroke();
    ctx.lineWidth = 15;
    ctx.strokeStyle = 'white';
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(290, 0);
    ctx.lineTo(290, 700);
    ctx.stroke();
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'white';
    ctx.closePath();}
  
  let img = Image ()
  document.getElementById(car.png)
  img.src = ".\images\car.png"
  function drawImage(){
    ctx.drawImage(car, 25, 400, 50, 50);
    
  }


};
