/*    neatShow.js 
 *    version v1.2 (06/2013)
 *    Copyright 2013 Steve Papadopoulos.
 *    Released under the MIT license.
 *    http://stevepapa.com/neatshowjs
 *    Dependencies: jQuery v1.4+ 
 */
(function(e){jQuery.fn.neatShow=function(t){var n=this;var r=400;var i=1800;if(typeof t==="undefined")t={};t.speed=t.speed||null;t.mode=t.mode||null;t.minSpeed=t.minSpeed||r;t.maxSpeed=t.maxSpeed||i;if(t.mode=="container")n=this.find("img:not(:visible)");var s=function(){t.speed="random"?this.speed=Math.floor(Math.random()*(t.maxSpeed-t.minSpeed+1)+t.minSpeed):this.speed=t.speed;e(this).fadeIn(this.speed)};return n.each(function(){if(this.complete||this.readyState=="complete"){s.call(this)}else{e(this).load(s)}})}})(jQuery)