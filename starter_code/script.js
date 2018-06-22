window.onload = function() {
  
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  
  //Var
  var interval;
  var points = 0;
  var sound = new Audio();
  sound.src = 'http://66.90.93.122/ost/super-mario-kart-original-soundtrack/nwlchhmj/01%20-%20super%20mario%20kart.mp3'
   
  //Outerbox
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 10;
  ctx.strokeRect(20, -5, 460, 910);
  ctx.fillRect(30,10,440, 910);
    
  //Draw lines
  var line1 = new Line(20);
  var line2 = new Line(220);
  var line3 = new Line(420);
  var line4 = new Line(620);
  var line5 = new Line(820);

  //Reacomodar en start game
  interval = setInterval(update,1000/200);

  document.getElementById("start-button").onclick = function() {    
    startGame();
  };

  //Line Class
  function Line(y){
    this.x = 250;
    this.y = y ? y : 20;

    this.draw = function(){  
      //Draw street lines
      this.y++;
      if(this.y == 920) this.y= -100;
      ctx.strokeRect(this.x, this.y,2,100);
      ctx.lineWidth = 10;
    }
  }

  function startGame() {
    sound.play();
    //sound.loop() = true; no funciona
  }

  // intial car position
  var wheel = 200;
  var pointsHeader = this.document.getElementById("points");

  function update(){
    ctx.clearRect(30,10,440, 910); //Solo limpia el interior
    ctx.fillRect(30,10,440, 910);
    line1.draw();
    line2.draw();
    line3.draw();
    line4.draw();
    line5.draw();
    ctx.drawImage(car,wheel,550,115,230);
    points++;
    pointsHeader.innerHTML = Math.floor(points/100);
  }

  addEventListener('keydown', function(e){
    console.log("apretaste"+e.keyCode);
    switch(e.keyCode){
      case 37:
        if (wheel > 40) wheel-=40;
        break;
      case 39:
        if (wheel+40 < 385){wheel+=40;}
        break;
    }

  });
};





//Keyboard Listener

