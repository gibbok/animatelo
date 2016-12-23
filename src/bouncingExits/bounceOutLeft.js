; (function (animatejs) {
    'use strict';
    animatejs.bounceOutLeft = function (selector, options) {
        var keyframeset = [{
            "opacity": 1,
            "transform": "none",
            "offset": 0
        }, {
            "opacity": 1,
            "transform": "translate3d(20px, 0, 0)",
            "offset": 0.2
        }, {
            "opacity": 0,
            "transform": "translate3d(-2000px, 0, 0)",
            "offset": 1
        }];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
