; (function (animate) {
    'use strict';
    animate.rotateOutDownLeft = function (selector, options) {
        var keyframeset = [
            {
                transformOrigin: 'left bottom',
                transform: 'none',
                opacity: 1,
                offset: 0
            },
            {
                transformOrigin: 'left bottom',
                transform: 'rotate3d(0, 0, 1, 45deg)',
                opacity: 0,
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
