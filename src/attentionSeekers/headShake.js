; (function(animate) {
    'use strict';
    animate.headShake = function(selector, options) {
        var keyframeset = [
            {
                transform: 'translateX(0)',
                offset: 0
            },
            {
                transform: 'translateX(-6px) rotateY(-9deg)',
                offset: 0.065
            },
            {
                transform: 'translateX(5px) rotateY(7deg)',
                offset: 0.185
            },
            {
                transform: 'translateX(-3px) rotateY(-5deg)',
                offset: 0.315
            },
            {
                transform: 'translateX(2px) rotateY(3deg)',
                offset: 0.435
            },
            {
                transform: 'translateX(0)',
                offset: 0.5
            },
            {
                transform: 'translateX(0)',
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
