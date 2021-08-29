window.onload = () => {

    //Cuando la pantalla se inice llama a la funcion init de race car y pasarle por parametro un div con ID canvas.
//Recibir en order de los que se quieren.
//
document.getElementById('start-button').onclick = () => {

    raceCarApp.init(document.querySelector('#canvas')) //Llama a la funcion init de app.js para crear canvas
}
}