; (function(window) {
    'use strict';
    var _data = null,
        _elmMenuAnimations = null,
        _elmButtonAnimate = null,
        menuSelection = null,
        init = function() {
            document.addEventListener('DOMContentLoaded', function() {
                _logic();
            }.bind(this));
        },
        _logic = function() {
            _getMenuAnimations();
            _getButtonAnimate();
            _getMenuAnimationsSelectedValue();
            _menuAnimationsListener();
            _buttonAnimateListener();
        },
        _getMenuAnimations = function() {
            _elmMenuAnimations = document.querySelector('#test-form-select-animations');
        },
        _getButtonAnimate = function() {
            _elmButtonAnimate = document.querySelector('#test-form-btn-animate');
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
                _animate();
            }.bind(this));
        },
        _buttonAnimateListener = function() {
            _elmButtonAnimate.addEventListener('click', function(event) {
                event.preventDefault();
                _animate();
            }.bind(this));
        },
        _animate = function() {
            window.animatejs[menuSelection]('#test-target');
        };
    init();
})(window)