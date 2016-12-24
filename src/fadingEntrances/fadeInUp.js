; (function (animatejs) {
    'use strict';
    animatejs.fadeInUp = function (selector, options) {
        var keyframeset = [
            {
                "opacity": 0,
                "transform": "translate3d(0, 100%, 0)",
                "offset": 0
            },
            {
                "opacity": 1,
                "transform": "none",
                "offset": 1
            }
        ];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});