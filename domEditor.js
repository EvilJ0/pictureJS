let domEditor = {
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
                newDom.src = data.download_url;
                newDom.data = data;
                newDom.alt = data.author;
                newDom.id = data.id;
            }
            domEditing.appendChild(newDom)
        }
}

export default domEditor


