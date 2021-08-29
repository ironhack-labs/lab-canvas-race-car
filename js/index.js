window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    const canvas = document.querySelector("#canvas");
    carGame.init(canvas);
    document.getElementById("start-button").innerHTML = "Restart";
    document.getElementById("start-button").onclick = () => {
      location.reload();
    };
  };
};
