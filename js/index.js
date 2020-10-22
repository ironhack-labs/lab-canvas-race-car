//when we click on the Start Game button, we need to create the canvas and display the road.
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const $canvas = document.querySelector("canvas");
    const ctx = $canvas.getContext("2d");
    img = new Image();
    img.src = "./images/road.png";
    console.log($canvas.width)
    ctx.drawImage(img, 90, 0);
    // debugger
    // console.log(ctx.width);
    // $context.drawImage(image, 0, 0, $context.width, $context.height);

    // var ctx = c
    // var img = document.getElementById("scream");

    // $context = image
    // debugger
    // $context.fillStyle = "#FF0000";
    // $context.fillRect(0, 0, 150, 75);


    // }

  }



};
