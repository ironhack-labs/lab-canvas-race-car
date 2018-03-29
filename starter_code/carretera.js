function Carretera(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    
    this.w = 420;
    this.h = 510;

    this.y = 0;
    this.x = 0;
};

Carretera.prototype.draw = function (){
    
    this.drawCesped();
    this.drawAsfalto();
    this.drawLinea();
};

Carretera.prototype.drawCesped = function(){
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
}
Carretera.prototype.drawAsfalto = function(){
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(this.x + 30,this.y, this.w-60, this.h);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(this.x + 34, this.y, this.w-410, this.h);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(this.x + 376,this.y, 10, this.h);
}

Carretera.prototype.drawLinea = function(){
    this.ctx.beginPath();
    this.ctx.setLineDash([15, 20]);
    this.ctx.moveTo(this.x +(this.w/2), this.y);
    this.ctx.lineTo(this.x+(this.w/2), this.y + this.h);
    this.ctx.strokeStyle = "white";
    this.ctx.stroke();
}
