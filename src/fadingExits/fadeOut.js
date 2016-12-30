; (function(animate) {
    'use strict';
    animate.fadeOut = function(selector, options) {
        var keyframeset = [
            {
                opacity: 1,
                offset: 0
            },
            {
                opacity: 0,
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
