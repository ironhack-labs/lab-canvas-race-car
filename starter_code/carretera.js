function Carretera(id){
    this.canvas = document.getElementById(id);
    this.ctx = canvas.getContext('2d');
    this.w = 420;
    this.h = 510;
};

Carretera.prototype.draw = function (){
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0,0, this.w, this.h);
    
};