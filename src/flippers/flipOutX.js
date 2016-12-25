; (function (animatejs) {
    'use strict';
    animatejs.flipOutX = function (selector, options) {
        var keyframeset = [
            {
                transform: 'perspective(400px)',
                opacity: 1,
                offset: 0
            },
            {
                transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
                opacity: 1,
                offset: 0.3
            },
            {
                transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
                opacity: 0,
                offset: 1
            }
        ];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
