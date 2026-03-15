let atlasImage
let sprites={}

function loadAtlas(){

let png=document.getElementById("pngFile").files[0]

let xml=document.getElementById("xmlFile").files[0]

atlasImage=new Image()

atlasImage.src=URL.createObjectURL(png)

let reader=new FileReader()

reader.onload=function(){

parseXML(reader.result)

}

reader.readAsText(xml)

}

function parseXML(text){

let xml=new DOMParser().parseFromString(text,"text/xml")

let images=xml.querySelectorAll("Image")

let list=document.getElementById("spriteList")

list.innerHTML=""

images.forEach(img=>{

let name=img.getAttribute("name")

sprites[name]={

x:+img.getAttribute("x"),

y:+img.getAttribute("y"),

w:+img.getAttribute("w"),

h:+img.getAttribute("h")

}

let btn=document.createElement("div")

btn.className="spriteBtn"

btn.innerText=name

btn.onclick=()=>addSprite(name)

list.appendChild(btn)

})

}
