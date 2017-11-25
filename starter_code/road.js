function Road(){

}

Road.prototype.draw = function(ctx){

    ctx.fillStyle = 'green';
    ctx.fillRect(0, 10, 500, 800);
    ctx.fillStyle = 'grey';
    ctx.fillRect(40, 10, 420, 800);
    ctx.fillStyle = 'white';
    ctx.fillRect(60, 10, 20, 800);
    ctx.fillStyle = 'white';
    ctx.fillRect(ctx.canvas.clientWidth-80, 10, 20, 800);
    ctx.setLineDash([18, 17]);/*dashes are 5px and spaces are 3px*/
    ctx.beginPath();
    ctx.moveTo(250,10);
    ctx.lineTo(250, 800);
    ctx.lineWidth = 8;
    ctx.strokeStyle = 'white';
    ctx.stroke();
    ctx.closePath();

}