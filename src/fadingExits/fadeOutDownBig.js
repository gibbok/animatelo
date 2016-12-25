; (function (animatejs) {
    'use strict';
    animatejs.fadeOutDownBig = function (selector, options) {
        var keyframeset = [
            {
                "opacity": "1",
                "transform": "none",
                "offset": 0
            },
            {
                "opacity": "0",
                "transform": "translate3d(0, 2000px, 0)",
                "offset": 1
            }
        ];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
