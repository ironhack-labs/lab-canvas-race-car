
$(document).ready(function(){
  $(".start-button").click(function(){
    $(".hide").toggle();
  })
})

function obstaculo (x,y,width){
 this.x=x;
 this.y=y;
 this.speed=1;
 this.width=width;
 this.height=height;
 this.length=length;
}
obstaculo.prototype.move = function(){
  
  this.y += this.speed;

}
obstaculo.prototype.render = function(delta){
 ctx.fillStyle= "rgb(146,0,0)";
  this.move ();
 
  ctx.fillRect(this.x, this.y,this.width, this.height);
}

var arrObstaculos = [
 new Ostaculo(100,0,0),
 new Obstaculo(150,40,40),
 new Obstaculo(200,80,80),
 new Obstaculo(200,80,80)
];

var now = Date.now();
var delta = 0;

var render = function(){
 then = now;
 now = Date.now();
 delta = now - then;
 
 ctx.clearRect(0,0,cv.width,cv.height);
 arrobstaculo.forEach(function(c){
   c.render(delta);
 });
 window.requestAnimationFrame(render);
};
window.requestAnimationFrame(render);

}
})
};