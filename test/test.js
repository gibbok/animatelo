; (function (window) {
    'use strict';
    var _data = null,
        _elmMenuAnimations = null,
        _elmButtonAnimate = null,
        _elmForm = null,
        menuSelection = null,
        init = function () {
            document.addEventListener('DOMContentLoaded', function () {
                _logic();
            }.bind(this));
        },
        _logic = function () {
            _getMenuAnimations();
            _getButtonAnimate();
            _getForm();
            _getMenuAnimationsSelectedValue();
            _menuAnimationsListener();
            _buttonAnimateListener();
        },
        _getMenuAnimations = function () {
            _elmMenuAnimations = document.querySelector('#test-form-select-animations');
        },
        _getButtonAnimate = function () {
            _elmButtonAnimate = document.querySelector('#test-form-btn-animate');
        },
        _getForm = function () {
            _elmForm = document.querySelector('#test-form');
        },
        _getMenuAnimationsDefault = function () {
            _menuSelection = _elmMenuAnimations.selected.value;
        },
        _getMenuAnimationsSelectedValue = function () {
            menuSelection = _elmMenuAnimations.selectedOptions[0].value;
        },
        _menuAnimationsListener = function () {
            _elmMenuAnimations.addEventListener('change', function (event) {
                _getMenuAnimationsSelectedValue();
                _animate();
            }.bind(this));
        },
        _buttonAnimateListener = function () {
            _elmButtonAnimate.addEventListener('click', function (event) {
                event.preventDefault();
                _animate();
            }.bind(this));
        },
        _getCustomParameters = function () {
            var result = {};
            for (var i = 0, len = _elmForm.length; i < len; i++) {
                var item = _elmForm[i];
                var prop = item.dataset.prop;
                var value;
                if (prop) {     
                    if (prop === 'direction' || prop === 'fill') {
                        value = item.value;
                    } else {
                        value = Number(item.value);
                    }
                    result[prop] = value;
                }
            }
            return result;
        },
        _animate = function () {
            var parameters = _getCustomParameters();
            window.animatejs[menuSelection]('#test-target', parameters);
        };
    init();
})(window)