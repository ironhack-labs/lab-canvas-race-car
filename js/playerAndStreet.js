function moveCar() {
  if (keyIsDown(LEFT_ARROW)) {
    carX -= movement;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    carX += movement;
  }
}

function moveBackground() {
  if (roadY >= height + 77) {
    roadY = 0;
  }
  if (treeY >= height + 77) {
    treeY = 0;
  }
}

function createBoundaries() {
  if (carX < 38) {
    carX = 38;
  }
  if (carX > width - carW - 38) {
    carX = width - carW - 38;
  }
}
