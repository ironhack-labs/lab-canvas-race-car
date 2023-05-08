document.addEventListener("keydown", e => {
  switch (e.keyCode) {
    case 37:
      raceCar.moveLeft()
      return
    case 39:
      raceCar.moveRight()
      return
    // case 38:
    //   speed++
    //   return
  }
})