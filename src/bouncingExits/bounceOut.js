; (function (animatejs) {
    'use strict';
    animatejs.bounceOut = function (selector, options) {
        var keyframeset = [
            {
                "opacity": 1,
                "transform": "none",
                "offset": 0
            }, {
                "transform": "scale3d(.9, .9, .9)",
                "offset": 0.2
            }, {
                "transform": "scale3d(1.1, 1.1, 1.1)",
                "offset": 0.5
            }, {
                "opacity": 1,
                "transform": "scale3d(1.1, 1.1, 1.1)",
                "offset": 0.55
            }, {
                "opacity": 0,
                "transform": "scale3d(.3, .3, .3)",
                "offset": 1
            }];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
