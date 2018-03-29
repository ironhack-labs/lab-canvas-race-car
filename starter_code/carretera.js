function Carretera(id){
    this.canvas = document.getElementById(id);
    this.ctx = canvas.getContext('2d');
    this.w = 420;
    this.h = 510;
};

Carretera.prototype.draw = function (){
    this.drawCesped();
    this.drawAsfalto();
    this.drawLinea();
    
    
};

Carretera.prototype.drawCesped = function(){
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0,0, this.w, this.h);
}
Carretera.prototype.drawAsfalto = function(){
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(30,0, this.w-60, this.h);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(34,0, this.w-410, this.h);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(this.w-44,0, 10, this.h);
}

Carretera.prototype.drawLinea = function(){
    this.ctx.beginPath();
    this.ctx.setLineDash([15, 20]);
    this.ctx.moveTo(this.w/2, 0);
    this.ctx.lineTo(this.w/2, this.h);
    this.ctx.strokeStyle = "white";
    this.ctx.stroke();
}