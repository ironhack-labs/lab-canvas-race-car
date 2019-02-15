//$(document).ready(function() {
var myCar = new CarApp()
window.onload = function() {
        document.getElementById("start-button").onclick = function() {
            myCar.init("canvasCar")
        }
    }
    //})