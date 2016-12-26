; (function (animatejs) {
    'use strict';
    animatejs.slideInDown = function (selector, options) {
        var keyframeset = [
            {
                transform: 'translate3d(0, -100%, 0)',
                visibility: 'visible',
                offset: 0
            },
            {
                transform: 'translate3d(0, 0, 0)',
                visibility: 'visible',
                offset: 1
            }
        ];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
