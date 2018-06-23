var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//1. Constantes


//2. Clases

function Rectangulo (x,y,width,height,color){
	this.x = x ? x : 0;
	this.y = y ? y : 0;
	this.width = width;
	this.height = height;
	this.color = color ? color : "green";

	this.draw = function(){
		ctx.beginPath ();
		ctx.rect(this.x,this.y,this.width,this.height);
    	ctx.fillStyle = this.color;
    	ctx.fill ();
    	ctx.closePath ();
    	}
}

function DottedLine (x,y,width,height,color){
	this.x = x ? x : 0;
	this.y = y ? y : 0;
	this.width = width;
	this.height = height;
	this.color = color ? color : "white";

	this.draw = function(){
		ctx.beginPath ();
		ctx.strokeStyle = this.color;
		ctx.lineWidth = 20;
		ctx.setLineDash([50, 30]);
		ctx.moveTo(this.x,this.y);
		ctx.lineTo(this.x,this.y,this.width,this.height);
    	ctx.stroke ();
    	ctx.closePath ();

    	}
}

function Car (){

}

//3. Instancias

var recVer = new Rectangulo(0,0,400,canvas.height,"green");
	recVer.draw();

var recGris= new Rectangulo(25,0,350,canvas.height,"#84888e");
	recGris.draw();

var recBlan= new Rectangulo(40,0,320,canvas.height,"white");
	recBlan.draw();

var recGrisBlan= new Rectangulo(55,0,290,canvas.height,"#84888e");
	recGrisBlan.draw();

var punteada = new DottedLine(50,0,null,null,"white");
	punteada.draw();

//var choche = new Car();

//4. Main Functions

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

  }
};

//5. Listeners