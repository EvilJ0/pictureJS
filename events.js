import pictures from "./pictures.js";


let events = {

    tripeClickHandler:
        function tripeClickHandler(icon) {
            icon.addEventListener('click', function (evt) {
                if (evt.detail === 3) {
                    localStorage.setItem(icon.data.id, JSON.stringify(icon))
                    events.searchInLocalStorage(pictures);
                }
            })
        },

    searchInLocalStorage:
        function searchInLocalStorage(data) {
        for (let i of data) {
            if (JSON.parse(localStorage.getItem(i.id))) {
                let findElement = document.getElementById(i.id);
                findElement.classList.add('selected')
            }
        }
    },

    clickHandler:
        function clickHandler(icon,selectedImage) {
            icon.addEventListener('click', function () {
                let url = icon.src;
                let style = "background-image: url(" + url + ")";
                selectedImage.style = "background-image: url(" + url + ")";
                console.log(icon.data);
                console.log(style);
            })

        }

}

export default events

