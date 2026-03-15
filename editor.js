let canvas=document.getElementById("stage")

let ctx=canvas.getContext("2d")

canvas.width=window.innerWidth

canvas.height=window.innerHeight*0.6

let parts=[]

let selected=null

let frames=[]

let frameIndex=0


canvas.addEventListener("touchstart",e=>{

let x=e.touches[0].clientX

let y=e.touches[0].clientY

parts.forEach(p=>{

if(Math.abs(x-p.x)<30 && Math.abs(y-p.y)<30){

selected=p

}

})

})


canvas.addEventListener("touchmove",e=>{

if(selected){

selected.x=e.touches[0].clientX

selected.y=e.touches[0].clientY

draw()

}

})


canvas.addEventListener("touchend",()=>{

selected=null

})


function addSprite(name){

let s=sprites[name]

parts.push({

name:name,

x:200,

y:200,

r:0,

s:1,

sx:s.x,

sy:s.y,

sw:s.w,

sh:s.h

})

draw()

}


function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

parts.forEach(p=>{

ctx.save()

ctx.translate(p.x,p.y)

ctx.rotate(p.r)

ctx.scale(p.s,p.s)

ctx.drawImage(

atlasImage,

p.sx,

p.sy,

p.sw,

p.sh,

-p.sw/2,

-p.sh/2,

p.sw,

p.sh

)

ctx.restore()

})

}
