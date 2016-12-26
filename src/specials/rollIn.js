; (function (animatejs) {
    'use strict';
    animatejs.rollIn = function (selector, options) {
        var keyframeset = [
            {
                "opacity": "0",
                "transform": "translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)",
                "offset": 0
            },
            {
                "opacity": "1",
                "transform": "none",
                "offset": 1
            }
        ];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
