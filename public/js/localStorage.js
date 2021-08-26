import {main} from "./main.js";

const localStorageMutations={
    testOfFavorite:
    function testOfFavorite(data){
        if (JSON.parse(localStorage.getItem(data.data.id))) {
            localStorageMutations.deleteFromLocalStorage(data.data.id);
        } else {
            localStorage.setItem(data.data.id, JSON.stringify(data))
            localStorageMutations.searchInLocalStorage(data.data.id);
            console.log("triple catch " + data.data.id)
        }
    },

    searchInLocalStorage:
        function searchInLocalStorage(data) {
            if (JSON.parse(localStorage.getItem(data))) {
                main.DE.starPresentation(main.DE.generateWrap(data))
            }
        },

    deleteFromLocalStorage:
        function deleteFromLocalStorage(data) {
            localStorage.removeItem(data);
            main.DE.starPresentation(main.DE.generateWrap(data));
        },
}

export default localStorageMutations
