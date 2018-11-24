function Road(ctx, height) {
  this.ctx = ctx;
  this.height = height;
}

Road.prototype.draw = function(ctx, height) {

  ctx.rect(0,0,30,height);
  ctx.fillStyle = 'green';
  ctx.fill();
  ctx.beginPath();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(30,0,10,height);
  ctx.fillStyle = 'grey';
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(60,0,10,height);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(50,0,300,height);
  ctx.fillStyle = 'grey';
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(350,0,10,height);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(360,0,10,height);
  ctx.fillStyle = 'grey';
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(370,0,30,height);
  ctx.fillStyle = 'green';
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.setLineDash([25, 25]);
  ctx.moveTo(200, 0);
  ctx.lineTo(200, height);
  ctx.lineWidth = 5;
  ctx.strokeStyle = 'white';
  ctx.stroke();
  ctx.closePath();
}