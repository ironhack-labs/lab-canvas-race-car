/*  1) Iniciar o canvas e incluir a imagem da pista se deslocando para
    baixo = drawfield(), moveField();
    2) Desenhar o carro na pista;
    3) Fazer o carro se mover lateralmente e implementar boundaries;
    4) Criar obstáculos;
    5) Mover obstáculos e fazer aparecer novos a cada x segundos;
    6) Gerar obstáculos em tamanhos e posições aleatórias;
    7) Criar lógica de colisão entre carros e obstáculos;
    8) Sistema de pontos;
    9) Game Over e Score.
*/

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext('2d');

    const fieldImg = new Image();
    fieldImg.src = '../images/road.png';

    const carImg = new Image();
    carImg.src = '../images/car.png';
    
    /* 
    quando a imagem carregar irá instaciar um novo field, 
    um novo player, novos obstacles e um novo Game.
    */ 

    fieldImg.onload = () => {
      carImg.onload = () => {
        // dois evendos encadeados (quando uma carregar começa a carregar a outra)
        const field = new Field(
        canvas, context, 0, 0, canvas.width, canvas.height, fieldImg,
        );
        const player = new Player(
          canvas, context, 210, 440, 80, 160, carImg,
        );
        
        /* Se fosse criar apenas um obstáculo seria esse o código, mas quero criar vários
        const obstacle = new Obstacle(canvas, context, 0, 0, 400, 30, 'black');*/
      
        // Intância da classe Game
        const game = new Game(canvas, context, field, player, Obstacle);
        
        /* Na hora que eu chamar a função keyboradSetteings() antes de startgame(),
        já vou estar com os event listeners carregados */
        game.keyboardSettings();
        game.startGame();
      };
    };
  };
};