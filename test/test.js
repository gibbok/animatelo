; (function(window) {
    'use strict';
    var _xhrSuccess = function() {
            this.callback.apply(this, this.arguments);
        },
        _xhrError = function() {
            console.error(this.statusText);
        },
        _request = function(url, cb /*, argumentToPass1, argumentToPass2, etc. */ ) {
            var oReq = new XMLHttpRequest();
            oReq.callback = cb;
            oReq.arguments = Array.prototype.slice.call(arguments, 2);
            oReq.onload = _xhrSuccess;
            oReq.onerror = _xhrError;
            oReq.open("get", url, true);
            oReq.send(null);
        },
        _data = null,
        _elmMenuAnimations = null,
        _elmButtonAnimate = null,
        menuSelection = null,
        init = function() {
            document.addEventListener('DOMContentLoaded', function() {
                _getData();
            }.bind(this));
        },
        logic = function() {
            _getMenuAnimations();
            _getButtonAnimate();
            _getMenuAnimationsSelectedValue();
            _menuAnimationsListener();
            _buttonAnimateListener();
        },
        _getData = function() {
            _request('../animatejsConfig.json', logic.bind(this));
        },
        _getMenuAnimations = function() {
            _elmMenuAnimations = document.querySelector('#menu-animations');
        },
        _getButtonAnimate = function() {
            _elmButtonAnimate = document.querySelector('#button-animate');
        },
        _getMenuAnimationsDefault = function() {
            _menuSelection = _elmMenuAnimations.selected.value;
        },
        _getMenuAnimationsSelectedValue = function() {
            menuSelection = _elmMenuAnimations.selectedOptions[0].value;
        },
        _menuAnimationsListener = function() {
            _elmMenuAnimations.addEventListener('change', function(event) {
                _getMenuAnimationsSelectedValue();
            }.bind(this));
        },
        _buttonAnimateListener = function() {
            _elmButtonAnimate.addEventListener('click', function(event) {
                event.preventDefault();
                _animate();
            }.bind(this));
        },
        _animate = function() {
            window.animatejs[menuSelection]('#target');
        };
    init();
})(window)