; (function (animate) {
    'use strict';
    animate.flipInX = function (selector, options) {
        var keyframeset = [
            {
                transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
                animationTimingFunction: 'ease-in',
                opacity: 0,
                offset: 0
            },
            {
                transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
                animationTimingFunction: 'ease-in',
                offset: 0.4
            },
            {
                transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
                opacity: 1,
                offset: 0.6
            },
            {
                transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)',
                offset: 0.8
            },
            {
                transform: 'perspective(400px)',
                opacity: 1,
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
