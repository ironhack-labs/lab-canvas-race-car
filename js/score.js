const bestScore = []
const besties = document.querySelector(".besties")
const order = bestScore.sort((a, b) => b - a)
order.forEach((el) => {
  const newLi = document.createElement("li")
  newLi.innerText = el
  besties.appendChild(newLi)
})
