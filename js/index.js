const canvas = document.querySelector("canvas");
canvas.style.border = "2px solid black";
const ctx = canvas.getContext("2d");

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};

  const img = new Image();
  img.onload = function() {
  ctx.drawImage(img, 0, 0, 500, 700);
  };
  img.src = "./images/road.png";
  ctx.save();
  
  ctx.fillStyle = 'red';
  ctx.save();
  
  ctx.fillRect(100,50,150,25);
  ctx.save();
  ctx.fillRect(20,200,400,25);
  ctx.save();
  ctx.fillRect(30,400,150,25);
  ctx.save();
  ctx.fillRect(220,550,250,25);
  ctx.save();