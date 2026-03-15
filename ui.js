function rotate(v){

if(selected){

selected.r+=v

draw()

}

}


function scale(v){

if(selected){

selected.s*=v

draw()

}

}


function saveFrame(){

frames[frameIndex]=JSON.parse(JSON.stringify(parts))

}


function nextFrame(){

frameIndex++

parts=frames[frameIndex]||[]

draw()

}


function play(){

let i=0

setInterval(()=>{

if(frames[i]){

parts=JSON.parse(JSON.stringify(frames[i]))

draw()

}

i++

if(i>=frames.length)i=0

},120)

}
