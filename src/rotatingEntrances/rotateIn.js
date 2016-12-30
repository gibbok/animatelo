; (function (animate) {
    'use strict';
    animate.rotateIn = function (selector, options) {
        var keyframeset = [
            {
                transformOrigin: "center",
                transform: "rotate3d(0, 0, 1, -200deg)",
                opacity: 0,
                offset: 0
            },
            {
                transformOrigin: "center",
                transform: "none",
                opacity: 1,
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
