; (function (animate) {
    'use strict';
    animate.rollOut = function (selector, options) {
        var keyframeset = [
            {
                opacity: 1,
                transform: 'none',
                offset: 0
            },
            {
                opacity: 0,
                transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)',
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
