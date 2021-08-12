import pictures from "./pictures.js";

console.log(pictures)
let previews=document.querySelector(".listImages");
let selectedImage=document.querySelector('.selectedImage');
let bigImage=selectedImage.querySelector('.big')



function createElement(tagName,className){
    let element=document.createElement(tagName);
    element.classList.add(className);
    return element
}

function createDom(data, domEditing, tagName,className){
    let newDom=createElement(tagName,className);
    if (tagName=='img'){
        newDom.src=data.download_url;
        newDom.data=data;
        newDom.alt=data.author
    }
    // console.log(newDom.data)

    domEditing.appendChild(newDom)

}

function clickHandler(icon){
    icon.addEventListener('click',function(){

        bigImage.src=icon.src

        console.log(icon.data)
        // console.log(icon.src)
        // console.log(bigImage.src)
    })

}


async function  renderIcons(pictures){
    for(let i=0;i<pictures.length;i++){
        createDom(pictures[i],previews,'img','preview');
    }
}
renderIcons(pictures).then(function (){
    let icons=document.querySelectorAll('.preview');
    for(let i=0;i<pictures.length;i++){
        clickHandler(icons[i])
    }
})

