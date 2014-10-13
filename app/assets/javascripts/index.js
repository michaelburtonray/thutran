(function(){

  "use strict";

  var $lenses,
    flag = false,
    animate_background_position = false,
    direction = 'down';

  $(function() {

    $lenses = $('.lense').add('body');

    if('ontouchstart' in window) {
      document.documentElement.classList.add('touch');
      document.documentElement.classList.add('animate');
    } else {
      document.documentElement.classList.add('no-touch');
    }


    document.addEventListener('keypress', respondToKeypress);
    // $(document).on('touchend', respondToKeypress);


    window.addEventListener('load', fadeInContent);

    checkDevicePixelRatio();

  });


  function fadeInContent() {

    $('html').removeClass('loading');
  }

  function respondToKeypress(event) {
    event.preventDefault();

    console.log(event);

    switch(event.charCode) {

      // Return
      case 32:
        document.documentElement.classList.toggle('animate');
      break;

    }

    if(event.type === "touchend") {
      animate_background_position = animate_background_position ? false : true;
    }
  }


  function checkDevicePixelRatio() {

    $('.lenticular').each(function(){
      var image = this.querySelector('.image');
      var width = image.dataset.width/devicePixelRatio;
      var height = image.dataset.height/devicePixelRatio;

      image.style.backgroundSize = width + "px " + height + "px";
      image.style.maxWidth = width + 'px';
      image.style.height = height + 'px';
    });

    var lense = document.querySelector('#lense'),
      lense_width = lense.dataset.width/devicePixelRatio,
      lense_height = lense.dataset.height/devicePixelRatio;

    lense.style.backgroundSize = lense_width + "px " + lense_height + "px";


    var background_info_el = document.querySelector('#background-info');

    var html_background_width = background_info_el.dataset['imageWidth']/devicePixelRatio,
      html_background_height = background_info_el.dataset['imageHeight']/devicePixelRatio,
      body_background_width = background_info_el.dataset['lenseWidth']/devicePixelRatio,
      body_background_height = background_info_el.dataset['lenseHeight']/devicePixelRatio;

    document.documentElement.style.backgroundSize = html_background_width + "px " + html_background_height + "px";
    document.body.style.backgroundSize = body_background_width + "px " + body_background_height + "px";
  }

}).call();