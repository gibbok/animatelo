; (function (animatejs) {
    'use strict';
    animatejs.fadeOutLeft = function (selector, options) {
        var keyframeset = [
            {
                "opacity": "1",
                "transform": "none",
                "offset": 0
            },
            {
                "opacity": "0",
                "transform": "translate3d(-100%, 0, 0)",
                "offset": 1
            }
        ];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
