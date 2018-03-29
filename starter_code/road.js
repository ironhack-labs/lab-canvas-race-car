function Road (canvasId){
  var canvas = document.getElementById(canvasId)
  this.w = canvas.getAttribute("width");
  this.h = canvas.getAttribute("height");
  this.ctx = canvas.getContext("2d");
}

Road.prototype.drawRect = function (x,y,width, height){
  this.ctx.fillRect(x,y,width,height);
}

Road.prototype.draw = function (){
  var margen = 20;
  var margenInterior = 5;
  var linea = 8;
  
  this.ctx.fillStyle = "rgb(0,146,0)"
  this.drawRect(0,0,this.w,this.h);

  this.ctx.fillStyle = "rgb(127,127,127)";
  this.drawRect(margen, 0, this.w-margen*2, this.h);

  this.ctx.fillStyle = "rgb(255,255,255)";
  this.drawRect(margen + margenInterior, 0, linea,this.h)

  this.drawRect( this.w-margen-margenInterior-linea , 0, linea,this.h)

  var lineaIntermitente = 10;
  var anchoLineaIntermitente = 5;
  var altoLineaIntermitente = 30;
  for(var i = 0; i < this.h; i +=50 ){
    this.drawRect( this.w/2 , i, anchoLineaIntermitente, altoLineaIntermitente)
  }

  var img = new Image();
 
  var anchoImagen = 60;
  var altoImagen = 100;
  img.onload = function(){

    this.ctx.drawImage(img, this.w/2 -anchoImagen/2 ,this.h - altoImagen - 40,anchoImagen, altoImagen)
  }.bind(this)
  img.src = "images/car.png";
  
}

