window.onload = function() {
  var cont = 0;
  var car = new Car(10);
  var img = new Image();   // Create new img element 158x319px
  img.src = car.imgSrc;
  car.img = img; // Set source path
  document.getElementById('start-button').onclick = function() {
    startGame();
  };

  document.onkeydown = function(e) {
    if (e.keyCode == 37){ // To LEFT
      if (car.x - car.speed > 0){
        car.x -=car.speed;
        //paintAll();
      }
    } else if (e.keyCode == 39){ // To RIGHT
      if (car.x +car.speed < car.width - 30){ // Size Car
        car.x +=car.speed;
        //paintAll();
      }
    }
  };

  function startGame() {
    var canvas = document.getElementById('race');
    var ctx = canvas.getContext('2d');
    car.canvas = ctx;
    paintAll();
    setInterval(paintAll,10);
  }

  function paintAll(){
    runRoad(car.canvas);
    paintCar(car.canvas,car.img,car.x,car.y);
  }

  function clear(context){
    context.clearRect(0, 0, 450, 490); // Initial width, height
  }

  function runRoad(context){
    if (cont == 30)
      cont = -10;
    clear(context);
    paintRoad(context);
    paintLines(context,cont);
    cont++;
    //window.requestAnimationFrame(runRoad(context));
  }

  function paintCar(context,image,x,y){
    context.drawImage(image, x, y, 31, 63); // drawImage(image, x, y, width, height)
  }
  function paintRoad(context){
    // Green #1b8100 - GRAY #808080
    context.fillStyle = 'rgba(27, 129, 0, 1)'; // GREEN
    context.fillRect(0,0,450,490);
    context.fillStyle = 'rgba(128, 128, 128, 1)';
    context.fillRect(40,0,370,490);
    context.strokeStyle = '#FFFFFF';
    context.lineWidth = 10;
    context.strokeRect(60,-20,330,530);
  }

  function paintLines(context,cont){
    for (var x = cont; x < 500 ; x+=40){
      context.fillStyle = '#FFFFFF';
      context.fillRect(223,0+x,4,20); // Initial (223,0)
    }
  }
};
