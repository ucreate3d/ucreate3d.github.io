var menuClicked = function() {
  $('#js-navigation-menu').slideToggle(function() {
    if ($('#js-navigation-menu').is(':hidden')) {
      $('#js-navigation-menu').removeAttr('style');
    }
  });
};
$('li.nav-link a').click(function() {
  $.scrollTo($(this).attr('href'), 800, {offset: -100, easing: 'easeOutQuad'});
  menuClicked();
  return false;
});

$(document).ready(function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass('show');

  menuToggle.on('click', function(e) {
    e.preventDefault();
    menuClicked();
  });
});
