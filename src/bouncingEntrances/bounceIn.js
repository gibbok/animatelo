; (function (animatejs) {
    'use strict';
    animatejs.bounceIn = function (selector, options) {
        var keyframeset = [
            {
                "opacity": "0",
                "transform": "scale3d(.3, .3, .3)",
                "offset": 0
            },
            {
                "animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
                "offset": 0
            },
            {
                "animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
                "offset": 0.2
            },
            {
                "transform": "scale3d(1.1, 1.1, 1.1)",
                "offset": 0.2
            },
            {
                "animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
                "offset": 0.4
            },
            {
                "transform": "scale3d(.9, .9, .9)",
                "offset": 0.4
            },
            {
                "animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
                "offset": 0.6
            },
            {
                "opacity": "1",
                "transform": "scale3d(1.03, 1.03, 1.03)",
                "offset": 0.6
            },
            {
                "animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
                "offset": 0.8
            },
            {
                "transform": "scale3d(.97, .97, .97)",
                "offset": 0.8
            },
            {
                "animationTimingFunction": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
                "offset": 1
            },
            {
                "opacity": "1",
                "transform": "scale3d(1, 1, 1)",
                "offset": 1
            }
        ];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
