//Creamos el lienzo cuando hacemos click en el botón de start
var initialBoard = document.querySelector("game-intro");

var carBoard = document.querySelector('#raceCar');

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    //carBoard.classList.remove('hide');
    startGame();
  };
  

  function startGame() {
  }
  //iniciar canvas
  var canvas = document.getElementById("raceCar");
  var ctx = canvas.getContext("2d");
  //creamos la carretera
  ctx.fillStyle = "#008400";
  ctx.fillRect(0, 0, 35, 520);
  ctx.fillStyle = "#808080";
  ctx.fillRect(35, 0, 15, 520);
  ctx.fillStyle = "#808080";
  ctx.fillRect(60, 0, 230, 520);
  ctx.fillStyle = "#008400";
  ctx.fillRect(315, 0, 35, 520);
  ctx.fillStyle = "#808080";
  ctx.fillRect(300, 0, 15, 520);
  var discountLines = 0
  //creamos un bucle para generar las lineas discontínuas.
  while(discountLines < 520){
    ctx.fillStyle = 'white';
    ctx.fillRect(170, discountLines, 6, 20);
    discountLines += 50 
  }
 //creamos una posicion variable que luego moveremos con los controles
 var posX = 500;
  //creamos el  coche
  var img = new Image();
  img.src = "images/car.png";
  ctx.drawImage(img, posX, 1380);
  ctx.scale(0.3, 0.3);


  
  
  img.onload = function(){
    ctx.drawImage(img, posX, 1380);
  } 
  //actualizamos la posicion x  dependiendo de las teclas que se pulsen
  document.onkeydown = function(elem) {
    //console.log(elem.keyCode)
    if(elem.keyCode == 37){
      posX -= 1;
      console.log(posX);
    }
    if(elem.keyCode == 39){
      posX += 1;
      console.log(posX);
    }
  }
};
