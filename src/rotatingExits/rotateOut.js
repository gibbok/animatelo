; (function (animatejs) {
    'use strict';
    animatejs.rotateOut = function (selector, options) {
        var keyframeset = [
            {
                transformOrigin: 'center',
                transform:'none',
                opacity: 1,
                offset: 0
            },
            {
                transformOrigin: 'center',
                transform: 'rotate3d(0, 0, 1, 200deg)',
                opacity: '0',
                offset: 1
            }
        ];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
