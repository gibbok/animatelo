; (function (animatejs) {
    'use strict';
    animatejs.zoomOutUp = function (selector, options) {
        var keyframeset = [
            {
                opacity: 1,
                transform: 'none',
                transformOrigin: 'left center',
                offset: 0
            },
            {
                opacity: 1,
                transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)',
                animationTimingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
                offset: 0.4
            },
            {
                opacity: 0,
                transform: 'scale3d(.1, .1, .1) translate3d(0, -2000px, 0)',
                transformOrigin: 'center bottom',
                animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)',
                offset: 1
            }
        ];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
