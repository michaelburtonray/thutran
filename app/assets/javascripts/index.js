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
  var initial_scale = 1 / window.devicePixelRatio;
  var viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute('content', 'initial-scale=' + initial_scale);

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