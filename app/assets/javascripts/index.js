window.requestAnimationFrame || (window.requestAnimationFrame =
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame    ||
  window.oRequestAnimationFrame      ||
  window.msRequestAnimationFrame     ||
  function(callback, element) {
    return window.setTimeout(function() {
      callback(+new Date());
  }, 1000 / 60);
});

var flag,
  direction;

$(function() {

  "use strict";

  //set viewport settings
  // var initial_scale = 1 / window.devicePixelRatio;
  // var viewport = document.querySelector("meta[name=viewport]");
  // viewport.setAttribute('content', 'initial-scale=' + initial_scale);

  // viewport.setAttribute('content', 'width=1200');


  if('ontouchstart' in window) {
    document.documentElement.classList.add('touch');
  } else {
    document.documentElement.classList.add('no-touch');
    $('.image.SPACEBAR').on('click', enableFullscreen);
  }

  flag = false,
  direction = 'down';

  (function animloop(){
    requestAnimationFrame(animloop);

    if(flag === true) render();
  })();

  $(document).on('keypress', respondToKeypress);


  $(window).on('load', fadeInContent);


  checkDevicePixelRatio();

});

var xpos = 0,
  ypos = 0,
  modulus = 1,
  i = 0;


function render() {
  // var interval = 17;
  var interval = 1;
  if(i % modulus === 0) {
    if(window.direction === 'down')
      ypos += interval;
    else ypos -= interval;
  }
  console.log(window.direction);
  window.scrollTo(xpos, ypos);

  i++;
}

function fadeInContent() {
  $('html').removeClass('loading');
}

function respondToKeypress(event) {
  event.preventDefault();

  console.log(event);

  switch(event.originalEvent.charCode) {

    // Return
    case 32:
      ypos = $(window).scrollTop();
      flag = (flag === true) ? false : true;
      window.direction = (event.shiftKey === true || (window.innerHeight + window.scrollY) >= document.body.offsetHeight) ? 'up' : 'down';
      // window.direction = 'down';
    break;

  }
}

function enableFullscreen(event) {

  console.log(event);


  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
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

    var lense = this.querySelector('.lense'),
      lense_width = lense.dataset.width/devicePixelRatio,
      lens_height = lense.dataset.height/devicePixelRatio,
      lense.style.backgroundSize =  lense_width + "px " + lense_height + "px";

  });

  var background_info_el = document.querySelector('#background-info');

  var html_background_width = background_info_el.dataset['imageWidth']/devicePixelRatio,
    html_background_height = background_info_el.dataset['imageHeight']/devicePixelRatio,
    body_background_width = background_info_el.dataset['lenseWidth']/devicePixelRatio,
    body_background_height = background_info_el.dataset['lenseHeight']/devicePixelRatio;

  document.documentElement.style.backgroundSize = html_background_width + "px " + html_background_height + "px";
  document.body.style.backgroundSize = body_background_width + "px " + body_background_height + "px";
}