; (function (animatejs) {
    'use strict';
    animatejs.tada = function (selector, options) {
        var keyframeset = [
            {
                transform: "scale3d(1, 1, 1)",
                offset: 0
            },
            {
                transform: "scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)",
                offset: 0.1
            },
            {
                transform: "scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)",
                offset: 0.2
            },
            {
                transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
                offset: 0.3
            },
            {
                transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
                offset: 0.4
            },
            {
                transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
                offset: 0.5
            },
            {
                transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
                offset: 0.6
            },
            {
                transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
                offset: 0.7
            },
            {
                transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
                offset: 0.8
            },
            {
                transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
                offset: 0.9
            },
            {
                transform: "scale3d(1, 1, 1)",
                offset: 1
            }
        ];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
