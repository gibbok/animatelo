; (function (animate) {
    'use strict';
    animate.slideInLeft = function (selector, options) {
        var keyframeset = [
            {
                transform: 'translate3d(-100%, 0, 0)',
                visibility: 'visible',
                offset: 0
            },
            {
                transform: 'translate3d(0, 0, 0)',
                visibility: 'visible',
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
