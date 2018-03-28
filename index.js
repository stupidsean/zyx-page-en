/* global $ */
$(function() {
  var navHeight = $('.nav-wrapper').height();

  var navItems = ['bio', 'tc', 'publications', 'awards', 'patents', 'others'];

  navItems.forEach(function(itemName) {
    $('a[href="#'+ itemName +'"]').click(function() {
      $('html, body').animate({
        scrollTop: $('#' + itemName).offset().top - navHeight
      }, 500);
    });
  });


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
