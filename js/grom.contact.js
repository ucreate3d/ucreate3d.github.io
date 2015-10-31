$(document).ready(function() {
  hbspt.forms.create({
    css: '',
    cssClass: '',
    target: 'hbspt-form-container',
    inlineMessage: 'Thanks for your message!',
    portalId: '744105',
    formId: '489614db-7cf3-4ed7-9564-f954ceb3910b',
    onFormReady: function($form, ctx) {
      // http://help.hubspot.com/articles/KCS_Article/Reports/How-does-HubSpot-track-the-analytic-interactions-of-contacts-created-via-APIs
      // http://developers.hubspot.com/docs/methods/forms/submit_form

      $('#hsForm_489614db-7cf3-4ed7-9564-f954ceb3910b')
        .attr('method', 'POST');

      var p = $('#hsForm_489614db-7cf3-4ed7-9564-f954ceb3910b').position();
      $('#hsForm_489614db-7cf3-4ed7-9564-f954ceb3910b')
        .append('<input type="hidden" id="hutk" name="hutk" value="' +
        ctx.hutk + '">');


      $('#hsForm_489614db-7cf3-4ed7-9564-f954ceb3910b')
        .submit(function(event) {
          // fake ajax since Hubspot won't allow it
          $('.contact-form-container')
            .append('<div class="loading-spinner"></div>');
          $('#hsForm_489614db-7cf3-4ed7-9564-f954ceb3910b').fadeTo(2, 0.4);

          // Send the form via ajax instead
          // var data = $('#hsForm_489614db-7cf3-4ed7-9564-f954ceb3910b')
          //   .serialize();
          //
          // var url = $('#hsForm_489614db-7cf3-4ed7-9564-f954ceb3910b')
          //   .attr('action');
          //
          // var posting = $.post(url, data);
          // posting.done(function(data) {
          window.setTimeout(function() {
            $.scrollTo(
              $('#contact'), 800, {
                offset: -100,
                easing: 'easeOutQuad'
              }
            );
            $('#hsForm_489614db-7cf3-4ed7-9564-f954ceb3910b').hide();
            $('.loading-spinner').remove();
            $('.contact-form-container')
              .append('<div>Thanks for your message!</div>');
          }, 3000);
        });

    }
  });
});
