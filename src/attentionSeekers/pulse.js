; (function (animatejs) {
    'use strict';
    animatejs.pulse = function (selector, options) {
        var keyframeset = [
            {
                "transform": "scale3d(1, 1, 1)",
                "offset": 0
            },
            {
                "transform": "scale3d(1.05, 1.05, 1.05)",
                "offset": 0.5
            },
            {
                "transform": "scale3d(1, 1, 1)",
                "offset": 1
            }
        ];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
