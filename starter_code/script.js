// window.onload = function() {
var myCanvas= document.getElementById('theCanvas');
var ctx = myCanvas.getContext('2d');
var currentGame;
var theCar;

var Car = function(){
  this.x=240;
  this.y=600;
  this.width=50;
  this.height=85;
  this.img='images/car.png';
}

Car.prototype.drawCar = function(){
  var that=this
  var theImage = new Image();
  theImg.src=that.img;
  theImage.onload = function(){
    ctx.drawImage(theImage, that.x, that.y, that.width, that.height)
  }
}
Car.prototype.move = function(whichKey){
  switch(whichKey{
    case 'ArrowLeft':
    console.log('moving left');
    break;
    case 'ArrowRight';
    console.log('moving right')
  })
}


document.getElementById("start-button").onclick = function() {
var theCar = new Car();
theCar.drawCar();
},
document.onkeydown=function(){

}
// }

//     // document
//   };
  // document.onkeydown

  //left arrow is 37 right event.key ArrowLeft ArrowRight ArrowUp ArrowDown