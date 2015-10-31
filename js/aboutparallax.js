$(document).ready(function() {
  if ($('#js-parallax-about-window').length) {
    parallaxAbout();
  }
});

$(window).scroll(function(e) {
  if ($('#js-parallax-about-window').length) {
    parallaxAbout();
  }
});

function parallaxAbout() {
  if ($('#js-parallax-about-window').length > 0) {
    var plxBackground = $('#js-parallax-about-background');
    var plxWindow = $('#js-parallax-about-window');

    var plxWindowTopToPageTop = $(plxWindow).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
  }
}
