; (function (animate) {
    'use strict';
    animate.slideOutUp = function (selector, options) {
        var keyframeset = [
            {
                visibility: 'visible',
                transform: 'translate3d(0, 0, 0)',
                offset: 0
            },
            {
                visibility: 'hidden',
                transform: 'translate3d(0, -100%, 0)',
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
