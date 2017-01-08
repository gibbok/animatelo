; (function (window) {
    'use strict';
    var _targetId = '#index-target',
        _menuAnimationId = '#index-form-select-animations',
        _buttonAnimateId = '#index-form-btn-animate',
        _formId = '#index-form',
        _buttonResetId = '#test-form-btn-reset',
        _elmMenuAnimations = null,
        _elmButtonAnimate = null,
        _elmForm = null,
        _submitedBy = '',
        _player = null,
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
            _formListener();
            _buttonAnimateListener();
        },
        _getMenuAnimations = function () {
            _elmMenuAnimations = document.querySelector(_menuAnimationId);
        },
        _getButtonAnimate = function () {
            _elmButtonAnimate = document.querySelector(_buttonAnimateId);
        },
        _getForm = function () {
            _elmForm = document.querySelector(_formId);
        },
        _getMenuAnimationsDefault = function () {
            _menuSelection = _elmMenuAnimations.selected.value;
        },
        _getMenuAnimationsSelectedValue = function () {
            menuSelection = _elmMenuAnimations.options[_elmMenuAnimations.selectedIndex].value;
        },
        _formListener = function () {
            _elmForm.addEventListener('submit', function (event) {
                event.preventDefault();
                if (_submitedBy === 'animate') {
                    _getMenuAnimationsSelectedValue();
                    _resetPlayer();
                    _animate();
                }
            }.bind(this));
        },
        _resetPlayer = function () {
            if (_player) {
                _player.cancel();
            }
        },
        _buttonAnimateListener = function () {
            _elmButtonAnimate.addEventListener('click', function (event) {
                _submitedBy = 'animate';
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
            _player = window.animate[menuSelection](_targetId, parameters)[0];
        };
    init();
})(window)