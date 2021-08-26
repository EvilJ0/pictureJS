import {main} from "./main.js";

let dataId = document.querySelector('.metaDataContentWrap:first-child p');
let dataAuthor = document.querySelector('.metaDataContentWrap:nth-child(2) p');
let dataWidth = document.querySelector('.metaDataContentWrap:nth-child(3) p');
let dataHeight = document.querySelector('.metaDataContentWrap:nth-child(4) p');
let dataUrl = document.querySelector('.metaDataContentWrap:last-child a');
let mainContainer = document.querySelector('.mainContainer');

const domEditor = {
    createElement:
        function createElement(tagName, className) {
            let element = document.createElement(tagName);
            element.classList.add(className);
            return element
        },
    createDom:
        function createDom(data, domEditing, tagName, className) {
            let newDom = domEditor.createElement(tagName, className);
            if (tagName === 'img') {
                let newDomWrap = domEditor.createElement("div", "favoriteWrap");
                let iconWrap = domEditor.createElement("div", "favoriteIcon");
                newDom.src = data.download_url;
                newDom.data = data;
                newDom.alt = data.author;
                newDom.id = data.id;
                // newDom.classList.add('hidden')
                iconWrap.id = domEditor.generateIdWrap(data.id);
                if (data.height > data.width) {
                    newDomWrap.style = "grid-row: span 2"
                }
                domEditing.appendChild(newDomWrap).appendChild(iconWrap);
                newDomWrap.appendChild(newDom);
                domEditor.singleTestOfLoad(newDom);
            }
        },
    generateIdWrap:
        function generateIdWrap(data) {
            return "w" + data
        },
    generateWrap:
        function generateWrap(data) {
            let idIcon = domEditor.generateIdWrap(data);
            return document.getElementById(idIcon);
        },

    singleTestOfLoad:

        async function singleTestOfLoad(data) {
            return await new Promise((resolve => {
                resolve(
                    data.onload = function () {
                        console.log("image " + data.id + " loaded");
                        main.LSM.searchInLocalStorage(data.id);
                        // data.classList.remove('hidden');
                        data.classList.add('_active');

                    })
            }))


        },

    starPresentation:
        function starPresentation(findElement) {
            if (!findElement.classList.contains('_activeSlow')) {
                findElement.classList.remove('_fadeOut');
                findElement.classList.add('_active');
                findElement.classList.add('_activeSlow');
            } else {
                findElement.classList.remove('_activeSlow');
                findElement.classList.remove('_active');
                findElement.classList.add('_fadeOut');
            }


        },

    clickHandlerDomMutations:
        function clickHandlerDomMutations(elementDom, selectedImage, metaData) {

            let metaDataContent = metaData.children;

            for (let i of metaDataContent) {
                i.classList.remove('_activeSlow');
                i.classList.add('_fadeOut');
                setTimeout(() => {
                    i.classList.remove('_fadeOut');
                    i.classList.add('_activeSlow')
                    dataId.textContent = elementDom.data.id;
                    dataAuthor.textContent = elementDom.data.author;
                    dataWidth.textContent = elementDom.data.width;
                    dataHeight.textContent = elementDom.data.height;
                    dataUrl.textContent = elementDom.data.url;
                    dataUrl.href = elementDom.data.url;
                }, 200)
            }
            // console.log(metaDataContent)
            let url = elementDom.src;
            if (this.singleTestOfLoad(selectedImage)) {
                selectedImage.classList.remove('_activeSlow');
                selectedImage.classList.add('_fadeOut');
                selectedImage.style = "background-image: url(" + url + ")";

                setTimeout(() => {
                    selectedImage.classList.remove('_fadeOut');
                    selectedImage.classList.add('_activeSlow');

                }, 200)


            }
        },
    // testOfWindowSize:
    //     function testOfWindowSize() {
    //     console.log('work')
    //         let width = window.innerWidth;
    //
    //         if(width<=1400){
    //             mainContainer.classList.add('_fadeOut');
    //         }
    //
    //     }
}

export default domEditor





