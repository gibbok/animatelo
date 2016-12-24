; (function (animatejs) {
    'use strict';
    animatejs.fadeInDownBig = function (selector, options) {
        var keyframeset = [
            {
                opacity: 0,
                transform: 'translate3d(0, -2000px, 0)',
                offset: 0
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
