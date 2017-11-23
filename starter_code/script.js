window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var ctx = document.getElementById('canvas').getContext('2d');
    console.log(ctx);
    var img = document.getElementById('source');
    ctx.drawImage(img,0,0,500,500);
    var car = new Car(ctx);

    function update () {
      ctx.clearRect(0, 0, 500, 500);
      ctx.drawImage(img,0,0,500,500);
      car.update(ctx);
    }

    document.onkeydown = function(e) {
      console.log('hello')
      switch (e.keyCode) {
        case 37:
          car.moveLeft();
          update();
          break;
        case 39:
          car.moveRight();
          update();
          break;
      }
    };
  }
};

function Car (a) {
  this.x = 225;
  this.y = 450;
  this.img =  document.getElementById('car');
  a.drawImage(this.img,225,450,50,50);
  this.moveLeft = function () {
    console.log('hi',this.x);
    this.x -= 10;
  };
  this.moveRight = function () {
    this.x += 10;
  };
  this.update = function (a) {
    console.log('houla')
    a.drawImage(this.img,this.x,450,50,50);
  }
}
