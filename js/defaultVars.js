const Canvas =  document.getElementById("canvas")
const ctx = Canvas.getContext("2d")


const carImg="images/car.png"
//const imgCono="images/cono.png"


let frames  =   0
let requestId;
//const armyCono=[]
const arr=[];
let points=0

const audio= new Audio()
audio.src="audio/drama.mp3"
audio.loop=true
