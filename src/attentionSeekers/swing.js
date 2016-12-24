; (function(animatejs) {
    'use strict';
    animatejs.swing = function(selector, options) {
        var keyframeset = [
            {
                transform: 'rotate3d(0, 0, 1, 0deg)',
                offset: 0
            },
            {
                transform: 'rotate3d(0, 0, 1, 15deg)',
                offset: 0.2
            },
            {
                transform: 'rotate3d(0, 0, 1, -10deg)',
                offset: 0.4
            },
            {
                transform: 'rotate3d(0, 0, 1, 5deg)',
                offset: 0.6
            },
            {
                transform: 'rotate3d(0, 0, 1, -5deg)',
                offset: 0.8
            },
            {
                transform: 'rotate3d(0, 0, 1, 0deg)',
                offset: 1
            }
        ];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
