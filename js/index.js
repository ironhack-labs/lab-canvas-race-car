window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    raceCarApp.init();
    document.querySelector('.police').classList.add('on');
    const button = document.querySelector('#start-button');
    button.textContent = 'Reload to play again';

    const audio = `<audio autoplay>
            <source src="./sound/kit.mp3" type="audio/mp3" />
          </audio>`;
    setTimeout(() => {
      document.querySelector('#game-board').insertAdjacentHTML('beforeend', audio);
      document.querySelector('audio').loop = true;
    }, 3000);
  };
};
