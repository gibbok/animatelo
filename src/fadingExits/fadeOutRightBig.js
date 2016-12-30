; (function (animate) {
    'use strict';
    animate.fadeOutRightBig = function (selector, options) {
        var keyframeset = [
            {
                opacity: 1,
                transform: 'none',
                offset: 0
            },
            {
                opacity: 0,
                transform: 'translate3d(2000px, 0, 0)',
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
