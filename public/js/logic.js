import {main} from "./main.js";

let previews = document.querySelector(".listImages");
let selectedImage = document.querySelector('.selectedImage');
let metaData = document.querySelector('.imageMetaData');

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

let pictures = main.Pic


async function renderIcons(pictures) {
    for (let i in pictures) {
        main.DE.createDom(pictures[i], previews, 'img', 'preview');
        main.LSM.searchInLocalStorage(main.Pic);
        await main.DE.singleTestOfLoad(pictures[i])
        ;

    }


}

renderIcons(main.Pic).then(async function () {

    let icons = document.querySelectorAll('.preview');
    for (let i in pictures) {
        main.Ev.clickHandler(icons[i], selectedImage, metaData);
        main.Ev.tripeClickHandler(icons[i]);
        main.Ev.mobileLongTouchHandler(icons[i]);
        main.Ev.mobileShortTouchHandler(icons[i], selectedImage, metaData)
    }

})









