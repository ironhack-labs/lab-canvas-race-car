window.onload = () => {
  let game = new Game();
  document.getElementById('start-button').onclick = () => {
    game.start();
  };

};

function isCollide($dom1, $dom2) {
  let sq1 = {
      x: $dom1.offsetLeft,
      y: $dom1.offsetTop,
      width: $dom1.offsetWidth,
      height: $dom1.offsetHeight
  }
  let sq2 = {
      x: $dom2.offsetLeft,
      y: $dom2.offsetTop,
      width: $dom2.offsetWidth,
      height: $dom2.offsetHeight
  }
  if (!(sq2.y + sq2.height <= sq1.y ||
          sq2.y >= sq1.y + sq1.height ||
          sq2.x + sq2.width <= sq1.x ||
          sq2.x >= sq1.x + sq1.width
      )) {
      console.log("collision");
      return true;
  } else {
      console.log("no collision");
      return false;
  }
}