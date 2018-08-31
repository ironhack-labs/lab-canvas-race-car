var ctx = document.getElementById('canvas').getContext('2d');
var img = new Image();

function dibujaCanvas(){
  
  //Pastito
  ctx.beginPath();
  ctx.fillStyle = "#008F00"
  ctx.fillRect(0,0,40,600)
  ctx.fillRect(460,0,40,600)

  //carretera
  ctx.beginPath();
  ctx.fillStyle= "#7F7F7F"
  ctx.fillRect(40,0,420,600)

  //lineas
  ctx.beginPath();
  ctx.strokeStyle= "white"
  ctx.setLineDash([]);
  ctx.lineWidth=10;
  ctx.strokeRect(60,-10,380,620)
  ctx.setLineDash([22, 10]);
  ctx.lineWidth=5;

  ctx.moveTo(250, 0);
  ctx.lineTo(250, 600);
  ctx.stroke();
  
  //Imagen
  ctx.drawImage(img,carrito.x,carrito.y,50,100)
}
img.src = './images/car.png';
