; (function (animate) {
    'use strict';
    animate.rotateOutUpRight = function (selector, options) {
        var keyframeset = [
            {
                transformOrigin: 'right bottom',
                transform: 'none',
                opacity: 1,
                offset: 0
            },
            {
                transformOrigin: 'right bottom',
                transform: 'rotate3d(0, 0, 1, 90deg)',
                opacity: 0,
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
