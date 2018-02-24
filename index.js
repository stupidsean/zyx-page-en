/* global $ */
$(function() {
  $('#top-arrow').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });
  $(window).scroll(function() {
    $(window).scrollTop() > 600
      ? $('#top-arrow').addClass('show')
      : $('#top-arrow').removeClass('show');
  });
});
