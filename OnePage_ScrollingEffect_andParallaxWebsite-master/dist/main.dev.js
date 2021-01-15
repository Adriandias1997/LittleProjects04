"use strict";

$(window).scroll(function () {
  var $window = $(window),
      $body = $('body'),
      $panel = $('.section');
  var scroll = $window.scrollTop() + $window.height() / 3;
  $panel.each(function () {
    var $this = $(this);

    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
      $body.removeClass(function (index, css) {
        return css.match(/(^|\s)color-\s+/g) || [].join('');
      });
      $('.section').removeClass('active');
      $this.addClass('active');
    }
  });
}).scroll();