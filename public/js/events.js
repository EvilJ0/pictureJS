import {main} from "./main.js";


const events = {

    tripeClickHandler:
        function tripeClickHandler(icon) {


            icon.addEventListener('click', function (evt) {
                if (evt.detail === 3) {
                    main.LSM.testOfFavorite(icon);
                }
            })
        },

    clickHandler:
        function clickHandler(elementDom, selectedImage, metaData) {
            elementDom.addEventListener('click', function () {
                main.DE.clickHandlerDomMutations(elementDom, selectedImage, metaData)
            })

        },

    mobileLongTouchHandler:
        function mobileLongTouchHandler(icon) {
            let lDelay;
            let between = {};
            icon.addEventListener('touchstart', function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
                lDelay = new Date();
                between.x = evt.changedTouches[0].pageX;
                between.y = evt.changedTouches[0].pageY;
            }, false);
            icon.addEventListener('touchend', function (evt) {
                let pDelay = new Date();
                if (evt.changedTouches[0].pageX === between.x &&
                    evt.changedTouches[0].pageY === between.y &&
                    (pDelay.getTime() - lDelay.getTime()) > 800) {
                    main.LSM.testOfFavorite(icon);
                }
            }, false);
        },

    mobileShortTouchHandler:
        function mobileShortTouchHandler(elementDom, selectedImage, metaData){
            elementDom.addEventListener('touchstart',function (evt){
            if (evt.targetTouches.length === 1) {
                main.DE.clickHandlerDomMutations(elementDom, selectedImage, metaData)
            }
        }, false);
        }

}

export default events

