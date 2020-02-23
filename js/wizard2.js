;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }
  

})(jQuery, this);

function enterToTab(e) {
    var intKey = window.Event ? e.which : e.KeyCode;

    if (intKey == 13)
        e.returnValue = false;
}

$('body').keypress(enterToTab(e));
