window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {
    console.log("start game clicked")
    var c = document.getElementById("board");
    //Left Board
    var leftGreenRect = c.getContext("2d");
    var leftGrayRect = c.getContext("2d");
    var leftWhiteRect = c.getContext("2d");

    leftGreenRect.fillStyle = "#008100";
    leftGreenRect.fillRect(20, 20, 30, 900);

    leftGrayRect.fillStyle = "#808080"
    leftGrayRect.fillRect(50,20, 10, 900)

    leftWhiteRect.fillStyle = "white"
    leftWhiteRect.fillRect(60,20,10,900)

    //Middle Board
    var middleGrayRect = c.getContext("2d")

    middleGrayRect.fillStyle = "#808080"
    middleGrayRect.fillRect(70, 20, 500, 900)

    var dash = c.getContext("2d")
    dash.setLineDash([10]);
    dash.style = "white"
    dash.strokeRect(320, 20, 1, 900);
    dash.fillStyle = "white"

    //Right Board
    var rightWhiteRect = c.getContext("2d")
    var rightGrayRect = c.getContext("2d")
    var rightGreenRect = c.getContext("2d")

    rightWhiteRect.fillStyle = "white"
    rightWhiteRect.fillRect(570,20,10,900)

    rightGrayRect.fillStyle = "#808080"
    rightGrayRect.fillRect(580, 20, 10, 900)

    rightGreenRect.fillStyle = "#008100"
    rightGreenRect.fillRect(590, 20, 30, 900)
  }
};