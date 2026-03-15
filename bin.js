function exportBIN(){

let buffer=new ArrayBuffer(frames.length*100)

let view=new DataView(buffer)

let o=0

frames.forEach(f=>{

f.forEach(p=>{

view.setFloat32(o,p.x);o+=4

view.setFloat32(o,p.y);o+=4

view.setFloat32(o,p.r);o+=4

view.setFloat32(o,p.s);o+=4

})

})

let blob=new Blob([buffer])

let a=document.createElement("a")

a.href=URL.createObjectURL(blob)

a.download="anim.bin"

a.click()

}
