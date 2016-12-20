document.addEventListener('DOMContentLoaded', function () {
    //var logos = document.querySelectorAll('.logo');
    //var logos = document.querySelectorAll('#logo1');
    //var logos = '#logo1';
    var logos = '.logo';

    window.animatejs.bounce(logos);

    // window.animatejs.bounce(logo, {
    //     duration: 1000,
    //     delay: 2000,
    //     iterations: Infinity,
    //     direction: 'normal',
    //     fill: 'backwards'
    // });
});

/*
    duration: 700, //milliseconds
    delay: 10, //milliseconds
    iterations: Infinity, //or a number
    direction: 'alternate', //'normal', 'reverse', etc.
    fill: 'forwards' //'backwards', 'both', 'none', 'auto'
*/
