window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    const canvas = document.querySelector('#canvas')
    raceCarApp.init(canvas)
  }
}
