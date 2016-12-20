; (function (animatejs, undefined) {
    var _defaultTiming = {
        duration: 1000,
        iterations: 1,
        delay: 0,
        fill: 'both',
        direction: 'normal'
    };
    var _UUID = function () {
        var d = new Date().getTime(),
            uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                /* jslint bitwise:true */
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        return uuid;
    };

    animatejs._select = function (selector) {
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

    animatejs._animate = function (selector, keyframes) {
        var nodeList = animatejs._select(selector),
            players = [];
        nodeList.forEach(function (node) {
            var player = node.animate(keyframes, _defaultTiming);
            player.id = _UUID();
            players.push(player);
        });
        return players;
    };

})(window.animatejs = window.animatejs || {});

/*
var player = document.getElementById('toAnimate').animate([
    { transform: 'scale(1)', opacity: 1, offset: 0 },
    { transform: 'scale(.5)', opacity: .5, offset: .3 },
    { transform: 'scale(.667)', opacity: .667, offset: .7875 },
    { transform: 'scale(.6)', opacity: .6, offset: 1 }
  ], {
    duration: 700, //milliseconds
    easing: 'ease-in-out', //'linear', a bezier curve, etc.
    delay: 10, //milliseconds
    iterations: Infinity, //or a number
    direction: 'alternate', //'normal', 'reverse', etc.
    fill: 'forwards' //'backwards', 'both', 'none', 'auto'
  });

*/
