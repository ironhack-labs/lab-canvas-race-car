const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
const game = new Game(ctx)


game.start()//comentar al terminar


/* window.onload = () => {                                          //descomentar al terminar
  document.getElementById('start-button').onclick = () => {         //descomentar al terminar
    game.start();                                                   //descomentar al terminar
  };                                                                //descomentar al terminar
}; */                                                               //descomentar al terminar
