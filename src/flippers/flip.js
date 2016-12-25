; (function (animatejs) {
    'use strict';
    animatejs.flip = function (selector, options) {
        var keyframeset = [
            {
                "transform": "perspective(400px) rotate3d(0, 1, 0, -360deg)",
                "animationTimingFunction": "ease-out",
                "offset": 0
            },
            {
                "transform": "perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)",
                "animationTimingFunction": "ease-out",
                "offset": 0.4
            },
            {
                "transform": "perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)",
                "animationTimingFunction": "ease-in",
                "offset": 0.5
            },
            {
                "transform": "perspective(400px) scale3d(.95, .95, .95)",
                "animationTimingFunction": "ease-in",
                "offset": 0.8
            },
            {
                "transform": "perspective(400px)",
                "animationTimingFunction": "ease-in",
                "offset": 1
            }
        ];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
