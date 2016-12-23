; (function (animatejs) {
    'use strict';
    animatejs.bounceOutDown = function (selector, options) {
        var keyframeset = [
            {
                "opacity": 1,
                "transform": "none",
                "offset": 0
            },
            {
                "transform": "translate3d(0, 10px, 0)",
                "offset": 0.2
            }, {
                "transform": "translate3d(0, -20px, 0)",
                "offset": 0.4
            }, {
                "opacity": 1,
                "transform": "translate3d(0, -20px, 0)",
                "offset": 0.45
            }, {
                "opacity": 0,
                "transform": "translate3d(0, 1700px, 0)",
                "offset": 1
            }];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
