; (function(animate) {
    'use strict';
    animate.flash = function(selector, options) {
        var keyframeset = [
            {
                opacity: 1,
                offset: 0
            }, {
                opacity: 0,
                offset: 0.25
            }, {
                opacity: 1,
                offset: 0.5
            }, {
                opacity: 0,
                offset: 0.75
            }, {
                opacity: 1,
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
