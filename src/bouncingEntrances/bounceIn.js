; (function(animatejs) {
    'use strict';
    animatejs.bounceIn = function(selector, options) {
        var keyframeset = [
            {
                opacity: 0,
                transform: 'scale3d(.3, .3, .3)',
                animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                offset: 0
            },
            {
                transform: 'scale3d(1.1, 1.1, 1.1)',
                animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                offset: 0.2
            },
            {
                transform: 'scale3d(.9, .9, .9)',
                animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                offset: 0.4
            },
            {
                opacity: 1,
                transform: 'scale3d(1.03, 1.03, 1.03)',
                animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                offset: 0.6
            },
            {
                transform: 'scale3d(.97, .97, .97)',
                animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                offset: 0.8
            },
            {
                opacity: 1,
                transform: 'scale3d(1, 1, 1)',
                animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                offset: 1
            }
        ];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
