window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById("canvas")
    var ctx = canvas.getContext("2d")

    //Grey rectangle
    ctx.beginPath()
    ctx.fillStyle = "#7C7A7D"
    ctx.fillRect(0,0,500,800)
    //Left side of the road
    ctx.beginPath()
    ctx.fillStyle = "green"
    ctx.fillRect(0,0,20,800)

    ctx.beginPath()
    ctx.fillStyle = "#fff"
    ctx.fillRect(30,0,10,800)

    //Right side of the road
    ctx.beginPath()
    ctx.fillStyle = "green"
    ctx.fillRect(280,0,20,800)

    ctx.beginPath()
    ctx.fillStyle = "#fff"
    ctx.fillRect(260,0,10,800)

    ctx.beginPath();
    ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
    ctx.moveTo(150,0);
    ctx.lineTo(150,800);
    ctx.lineWidth=5
    ctx.strokeStyle="#fff"
    ctx.stroke();

    var car = new Image()
    car.src = "./images/car.png"

    car.onload=function(){
      ctx.drawImage(car,player.x,player.y,25,20)
    }
    class Player {
      constructor(){
        this.x = 140
        this.y = 130
        this.left = false
        this.right= false
      }
    }
   var player = new Player;

  }
}
