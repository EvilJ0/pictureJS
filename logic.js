import pictures from "./pictures.js";
import events from "./events.js";
import domEditor from "./domEditor.js";
let previews = document.querySelector(".listImages");
let selectedImage = document.querySelector('.selectedImage');

class DataType {
    constructor(author, download_url, height, id, url, width) {
        this.author = author;
        this.download_url = download_url;
        this.height = height;
        this.id = id;
        this.url = url;
        this.width = width;
    }

}

async function renderIcons(pictures) {
    for (let i in pictures) {
        domEditor.createDom(pictures[i], previews, 'img', 'preview');
    }
}

renderIcons(pictures).then(function () {
    events.searchInLocalStorage(pictures);
    let icons = document.querySelectorAll('.preview');
    for (let i in pictures) {
        events.clickHandler(icons[i],selectedImage);
        events.tripeClickHandler(icons[i]);
    }
})



