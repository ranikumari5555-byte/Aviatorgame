let multiplier=1
let running=false
let cashed=false
let wallet=1000
let betAmount=0
let ctx=document.getElementById("graph").getContext("2d")

let x=0
let y=300

function drawGraph(){

ctx.lineWidth=3
ctx.strokeStyle="#00ff9c"

ctx.beginPath()
ctx.moveTo(x,y)

x+=3
y-=multiplier*0.5

ctx.lineTo(x,y)
ctx.stroke()

}

function bet(){

if(running) return

betAmount=parseFloat(document.getElementById("bet").value)

if(!betAmount) return alert("Enter Bet")

if(betAmount>wallet) return alert("Not enough money")

wallet-=betAmount
updateWallet()

startGame()

}

function startGame(){

multiplier=1
running=true
cashed=false
x=0
y=300

ctx.clearRect(0,0,600,350)

let plane=document.getElementById("plane")

let game=setInterval(()=>{

multiplier+=0.04

document.getElementById("multi").innerText=
multiplier.toFixed(2)+"x"

drawGraph()

plane.style.bottom=(multiplier*8)+"px"
plane.style.left=(multiplier*8)+"px"

if(Math.random()<0.015){

clearInterval(game)

if(!cashed){

alert("Crashed! You Lost")

}

running=false

plane.style.bottom="20px"
plane.style.left="20px"

}

},100)

}

function cashout(){

if(!running) return
if(cashed) return

cashed=true

let win=betAmount*multiplier

wallet+=win

updateWallet()

alert("You won ₹"+win.toFixed(2))

running=false

}

function updateWallet(){

document.getElementById("wallet").innerText=
wallet.toFixed(2)

}

setInterval(()=>{

let names=["Ravi","Aman","Rohit","Karan","Vikas","Sahil","Raj"]

let list=document.getElementById("players")

let li=document.createElement("li")

li.innerText=
names[Math.floor(Math.random()*names.length)]
+" cashed out at "
+(Math.random()*5+1).toFixed(2)+"x"

list.prepend(li)

if(list.children.length>8){

list.removeChild(list.lastChild)

}

},2000)

