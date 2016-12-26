; (function (animatejs) {
    'use strict';
    animatejs.slideOutUp = function (selector, options) {
        var keyframeset = [
            {
                visibility: 'visible',
                transform: 'translate3d(0, 0, 0)',
                offset: 0
            },
            {
                visibility: 'hidden',
                transform: 'translate3d(0, -100%, 0)',
                offset: 1
            }
        ];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
