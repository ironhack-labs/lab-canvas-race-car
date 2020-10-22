//when we click on the Start Game button, we need to create the canvas and display the road.
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    // $context = document.getElementById('canvas').getContext('2d')
    // $context =
     img = new Image();
    img.src = "./images/road.png";
    // // console.log(image);
    // $context.drawImage(image, 0, 0, $context.width, $context.height);

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    // var img = document.getElementById("scream");
    ctx.drawImage(img, 10, 10);

    // $context = image
    // debugger
    // $context.fillStyle = "#FF0000";
    // $context.fillRect(0, 0, 150, 75);

    // let frames = window.frames; // or // var frames = window.parent.frames;
    // console.log(frames);
    // for (var i = 0; i < frames.length; i++) {
    //   // do something with each subframe as frames[i]
    //   frames[i].document.body.style.background = "red";
    //
    // }

  }



};
