; (function (animatejs) {
    'use strict';
    animatejs.zoomOutRight = function (selector, options) {
        var keyframeset = [
            {
                'opacity': 1,
                'transform': 'none',
                'transformOrigin': 'left center',
                'offset': 0
            },
            {
                'opacity': 1,
                'transform': 'scale3d(.475, .475, .475) translate3d(-42px, 0, 0)',
                'offset': 0.4
            },
            {
                'opacity': 0,
                'transform': 'scale(.1) translate3d(2000px, 0, 0)',
                'transformOrigin': 'right center',
                'offset': 1
            }
        ];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
