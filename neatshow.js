/*    neatShow.js 
 *    version v1.2 (06/2013)
 *    Copyright 2013 Steve Papadopoulos.
 *    Released under the MIT license.
 *    http://stevepapa.com/neatshowjs
 *    Dependencies: jQuery v1.4+ 
 */

(function( $ ) {
    
    jQuery.fn.neatShow = function (option) {
        
        var selection = this;
        var minSpeed = 400;
        var maxSpeed = 1800;
        
        if (typeof option === 'undefined')  option = {};
        option.speed = option.speed || null;
        option.mode = option.mode || null;
        option.minSpeed = option.minSpeed || minSpeed;
        option.maxSpeed = option.maxSpeed || maxSpeed;
        
        if (option.mode == 'container')  selection = this.find('img:not(:visible)');
        
        var neat = function(){
            
            option.speed = 'random' ?
                this.speed = Math.floor(Math.random()*(option.maxSpeed-option.minSpeed+1)+option.minSpeed) :
                this.speed = option.speed ;
            
            $(this).fadeIn(this.speed);
        };
        
        return selection.each(function () {
            if (this.complete || this.readyState == 'complete') {
                neat.call(this);
            } else {
                $(this).load(neat);
            }
        });
    };
    
}( jQuery ));