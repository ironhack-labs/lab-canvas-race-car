const bestScore = [1200, 3100, 300, 200]
const besties = document.querySelector(".besties")
const order = bestScore.sort((a, b) => b - a)
order.forEach((el) => {
  const newLi = document.createElement("li")
  newLi.innerText = el
  besties.appendChild(newLi)
})
