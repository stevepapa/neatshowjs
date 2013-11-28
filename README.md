neatShow.js
===========

A jQuery plugin to fade in images beautifully on your website.

When neatShow is applied to an image, it will wait until the image has finished downloading, then instantly fades it in regardless of other images or activity on the page. Works reliably with all images regardless of their state, including new and cached.

###<a href="http://stevepapa.com/neatshowjs/examples/" target="_blank">Demo 1 (default)

###<a href="http://stevepapa.com/neatshowjs/examples/random.html" target="_blank">Demo 2 (random)</a>



USAGE
-----

Default:

    $(selector).neatShow();

    
OPTIONS
-------


Speed:    
    
    $(selector).neatShow({ speed: 800});
     // specify fade in speed for images in milliseconds. 
     // If no speed is specified default is 400ms.

    $(selector).neatShow({ speed: 'random'});
     // each image will fade in at a random speed once downloaded

    $(selector).neatShow({ speed: 'random', minSpeed: 400, maxSpeed: 2400});
     // you can also specify minimum and maximum fade in speeds for random.
     // If none are specified the defaults are 400 and 1200
     
Container Mode: 

    $(selector).neatShow({ mode: 'container'});
     // Container Mode will scan through selector's images and  
     // fade in any image inside that container that is hidden.
     
     
     
Please remember, any image you wish to fade in using this plugin must be hidden by default.
