; (function(animatejs) {
    'use strict';
    animatejs.flash = function(selector, options) {
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
        return animatejs._animate(selector, keyframeset, options);
    }
})(window.animatejs = window.animatejs || {});
