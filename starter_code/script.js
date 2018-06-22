window.onload = function() {

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  function Linea(x,y,w,h,color){
    this.x = x ? x : 0;
    this.y = y ? y : 0;
    this.w = w ? w : 50;
    this.h = h ? h : 50;
    this.color = color ? color : 'green';

    this.draw = function (){
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.w, this.h);
      ctx.fill();
      ctx.closePath();
    }
  }
  var pasto1 = new Linea (0,0, 30, canvas.height);
  var pasto2 = new Linea (470,0, 30, canvas.height);
  var costado1 = new Linea (30,0, 15, canvas.height, 'gray');
  var costado2 = new Linea (455,0,15,canvas.height,'gray');
  var pista = new Linea (55, 0, 390, canvas.height, 'gray');
  var lineaCentral = new Linea (250, 0, 10, canvas.height, '#fff');

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

    function draw(car) {
      var img = new Image();
      img.onload = function () {
        ctx.drawImage(img, 230, 480, 50, 100);
      }
      img.src = "./images/car.png";
    }

    draw()
    pasto1.draw();
    pasto2.draw();
    costado1.draw();
    costado2.draw();
    pista.draw();
    lineaCentral.draw();

  }
};

