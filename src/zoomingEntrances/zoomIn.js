; (function (animatejs) {
    'use strict';
    animatejs.zoomIn = function (selector, options) {
        var keyframeset = [
            {
                opacity: 0,
                transform: 'scale3d(.3, .3, .3)',
                offset: 0
            },
            {
                opacity: 1,
                transform: 'none',
                offset: 0.5
            },
            {
                opacity: 1,
                transform: 'none',
                offset: 1
            }
        ];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
