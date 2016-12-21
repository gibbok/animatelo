document.addEventListener('DOMContentLoaded', function () {
    //var logos = document.querySelectorAll('.logo');
    //var logos = document.querySelectorAll('#logo1');
    var logos = '#logo1';
    //var logos = '.logo';

    //var players = window.animatejs.bounce(logos);
    //var players = window.animatejs.flash(logos);
    var players = window.animatejs.pulse(logos);

    //var players = window.animatejs.bounce(logos, {id:'rocco'});

    // var players = window.animatejs.bounce(logos, {
    //     duration: 1000,
    //     delay: 2000,
    //     iterations: Infinity,
    //     direction: 'normal',
    //     fill: 'both'
    // });
});

/*
    duration: 700, //milliseconds
    delay: 10, //milliseconds
    iterations: Infinity, //or a number
    direction: 'alternate', //'normal', 'reverse', etc.
    fill: 'forwards' //'backwards', 'both', 'none', 'auto'
*/
