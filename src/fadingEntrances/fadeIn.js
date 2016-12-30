; (function (animate) {
    'use strict';
    animate.fadeIn = function (selector, options) {
        var keyframeset = [
            {
                opacity: 0,
                offset: 0
            },
            {
                opacity: 1,
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
