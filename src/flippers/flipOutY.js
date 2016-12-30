; (function (animate) {
    'use strict';
    animate.flipOutY = function (selector, options) {
        var keyframeset = [
            {
                transform: 'perspective(400px)',
                opacity: 1,
                offset: 0
            },
            {
                transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)',
                opacity: 1,
                offset: 0.3
            },
            {
                transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
                opacity: 0,
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
