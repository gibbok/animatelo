; (function(animatejs) {
    'use strict';
    animatejs.fadeOut = function(selector, options) {
        var keyframeset = [
            {
                "opacity": "1",
                "offset": 0
            },
            {
                "opacity": "0",
                "offset": 1
            }
        ];
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
