; (function (namespace, undefined) {
    'use strict';
    var _defaultTiming = {
        duration: 1000,
        iterations: 1,
        fill: 'both'
    };

    namespace._select = function (selector) {
        var nodeList = [];
        if (typeof 'object' && selector.nodeName) {
            nodeList.push(selector);
        } else if (typeof 'string') {
            nodeList = document.querySelectorAll(selector);
        } else {
            throw 'not a valid selector';
        }
        return nodeList;
    };

    namespace._animate = function (selector, keyframes) {
        var nodeList = namespace._select(selector),
            players = [];
        nodeList.forEach(function (node) {
            var player = node.animate(keyframes, _defaultTiming);
            players.push(player);
        });
        return players;
    };

})(window.animate = window.animate || {});
