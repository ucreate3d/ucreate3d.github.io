// https://www.uncinc.nl/en/blog/dealing-with-mailto-links-if-no-mail-client-is-available
$('a[href^=mailto]').each(function() {
  var href = $(this).attr('href');

  $(this).click(function() {
    var t;
    var self = $(this);

    $(window).blur(function() {
      // browser responded, so stop the timeout
      clearTimeout(t);
    });

    t = setTimeout(function() {
      // browser didn't respond after 500ms, so let's send them to Gmail
      document.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sales@getgrom.com&su=Need+a+GROM+Quote';
    }, 500);
  });
});
