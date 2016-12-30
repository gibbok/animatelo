; (function (animate) {
    'use strict';
    animate.zoomIn = function (selector, options) {
        var keyframeset = [
            {
                opacity: 0,
                transform: 'scale3d(.3, .3, .3)',
                offset: 0
            },
            {
                opacity: 1,
                transform: 'none',
                offset: 0.5
            },
            {
                opacity: 1,
                transform: 'none',
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
