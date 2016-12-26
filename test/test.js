; (function(window){
   'use strict';
    var test = {
        elmMenuAnimations: null,
        elmButtonAnimate: null,
        menuSelection : null,
        init: function(){
            document.addEventListener('DOMContentLoaded', function() {
                this.getMenuAnimations();
                this.getButtonAnimate();
                this.getMenuAnimationsSelectedValue();
                this.menuAnimationsListener();
                this.buttonAnimateListener();
            }.bind(this));
        },
        getMenuAnimations: function() {
            this.elmMenuAnimations = document.querySelector('#menu-animations');
        },
        getButtonAnimate: function() {
            this.elmButtonAnimate = document.querySelector('#button-animate');
        },
        getMenuAnimationsDefault: function(){
            debugger
            this.menuSelection = this.elmMenuAnimations.selected.value;
        },
        getMenuAnimationsSelectedValue: function(){
            this.menuSelection =  this.elmMenuAnimations.selectedOptions[0].value;
        },
        menuAnimationsListener:function() {
                this.elmMenuAnimations.addEventListener('change', function(event){
                    this.getMenuAnimationsSelectedValue();
            }.bind(this));
        },
        buttonAnimateListener:function() {
            this.elmButtonAnimate.addEventListener('click', function(event){
                event.preventDefault();
                this.animate();
            }.bind(this));
        },
        animate:function(){
            window.animatejs[this.menuSelection]('#target');
        },
    };
test.init();
})(window);

/*
    //var logos = document.querySelectorAll('.logo');
    //var logos = document.querySelectorAll('#logo1');
    //var logos = '#logo3';
    //var logos = '.logo';
    //var players = window.animatejs.bounce(logos);
    //var players = window.animatejs.flash(logos);
    //var players = window.animatejs.pulse(logos);
    //var players = window.animatejs.rubberBand(logos);
    //var players = window.animatejs.shake(logos);
    //var players = window.animatejs.swing(logos);
    //var players = window.animatejs.tada(logos);
    //var players = window.animatejs.wobble(logos);
    //var players = window.animatejs.jello(logos);
    //var players = window.animatejs.headShake(logos);
    //var players = window.animatejs.bounceIn(logos); 
    //var players = window.animatejs.bounceInDown(logos);
    //var players = window.animatejs.bounceInLeft(logos);
    //var players = window.animatejs.bounceInRight(logos);
    //var players = window.animatejs.bounceInUp(logos);
    //var players = window.animatejs.bounceOut(logos);
    //var players = window.animatejs.bounceOutDown(logos);
    //var players = window.animatejs.bounceOutLeft(logos);
    //var players = window.animatejs.bounceOutRight(logos);
    //var players = window.animatejs.bounceOutUp(logos);
    //var players = window.animatejs.fadeIn(logos);
    //var players = window.animatejs.fadeInDown(logos);
    //var players = window.animatejs.fadeInDownBig(logos);
    //var players = window.animatejs.fadeInLeft(logos);
    //var players = window.animatejs.fadeInLeftBig(logos);
    //var players = window.animatejs.fadeInRight(logos);
    //var players = window.animatejs.fadeInRightBig(logos);
    //var players = window.animatejs.fadeInUp(logos);
    //var players = window.animatejs.fadeInUpBig(logos);
    //var players = window.animatejs.fadeOut(logos);
    //var players = window.animatejs.fadeOutDown(logos);
    //var players = window.animatejs.fadeOutDownBig(logos);
    //var players = window.animatejs.fadeOutLeft(logos);
    //var players = window.animatejs.fadeOutLeftBig(logos);
    //var players = window.animatejs.fadeOutRight(logos);
    //var players = window.animatejs.fadeOutRightBig(logos);
    //var players = window.animatejs.fadeOutUp(logos);
    //var players = window.animatejs.fadeOutUpBig(logos);
    //var players = window.animatejs.flip(logos);
    //var players = window.animatejs.flipInX(logos);
    //var players = window.animatejs.flipInY(logos);
    //var players = window.animatejs.flipOutX(logos);
    //var players = window.animatejs.flipOutY(logos);
    //var players = window.animatejs.lightSpeedIn(logos);
    //var players = window.animatejs.lightSpeedOut(logos);
    //var players = window.animatejs.rotateIn(logos);
    //var players = window.animatejs.rotateInDownLeft(logos);
    //var players = window.animatejs.rotateInDownRight(logos);
    //var players = window.animatejs.rotateInUpLeft(logos);
    //var players = window.animatejs.rotateInUpRight(logos);
    //var players = window.animatejs.rotateOut(logos);
    //var players = window.animatejs.rotateOutDownLeft(logos);
    //var players = window.animatejs.rotateOutDownRight(logos);
    //var players = window.animatejs.rotateOutUpLeft(logos);
    //var players = window.animatejs.rotateOutUpRight(logos);
    //var players = window.animatejs.slideInDown(logos);
    //var players = window.animatejs.slideInLeft(logos);
    //var players = window.animatejs.slideInRight(logos);
    //var players = window.animatejs.slideInUp(logos);
    //var players = window.animatejs.slideOutDown(logos);
    //var players = window.animatejs.slideOutLeft(logos);
    //var players = window.animatejs.slideOutRight(logos);
    //var players = window.animatejs.slideOutUp(logos);
    //var players = window.animatejs.hinge(logos);
    //var players = window.animatejs.rollIn(logos);
    //var players = window.animatejs.rollOut(logos);
    //var players = window.animatejs.zoomIn(logos);
    //var players = window.animatejs.zoomInDown(logos);
    //var players = window.animatejs.zoomInLeft(logos);
    //var players = window.animatejs.zoomInRight(logos);
    //var players = window.animatejs.zoomInUp(logos);
    //var players = window.animatejs.zoomOut(logos);
    //var players = window.animatejs.zoomOutDown(logos);
    //var players = window.animatejs.zoomOutLeft(logos);
    //var players = window.animatejs.zoomOutRight(logos);

 */

