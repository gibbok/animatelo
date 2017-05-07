; (function (window) {
    document.addEventListener('DOMContentLoaded', function () {
        var _animationName = 'bounce',
            _elmSelector = document.getElementById('animations'),
            _elmPlay = document.getElementById('animate'),
            _elmLeft = document.querySelector('.left .example'),
            _elmRight = document.querySelector('.right .example');

        _elmRight.classList.add('animated');
        _elmRight.addEventListener('animationend', function (event) {
            _elmRight.classList.remove(_animationName); // Cleanup
        });

        _elmSelector.addEventListener('change', function (event) {
            _animationName = this.value;
        });

        _elmPlay.addEventListener('click', function (event) {
            _elmPlay.classList.add('is-disabled');

            _elmRight.classList.add(_animationName);
            var _player = animatelo[_animationName](_elmLeft)[0];

            _player.onfinish = function () {
                _player.cancel();
                _elmPlay.classList.remove('is-disabled');
            };
        });
    });
})(window)
















