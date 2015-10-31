---
---
{% comment %}

Be sure to run:

    uglify -s [filename].js -o [filename].min.js

On the custom add-ons.

{% endcomment %}(function($) {
  'use strict';

{% include_relative parallax.js %}
{% include_relative aboutparallax.js %}
{% include_relative jquery.easing.min.js %}
{% include_relative jquery.scrollTo.min.js %}
{% include_relative jquery.actual.min.js %}
{% include_relative grom.navhandler.js %}
{% include_relative mailto.handler.js %}
{% include_relative grom.contact.js %}

}(jQuery));
