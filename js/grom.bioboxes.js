$('.bio').height(function() {
  var totalHeight = 0;
  var bio = $(this);
  bio.children().each(function() {
    totalHeight += $(this).actual('innerHeight');
  });
  return totalHeight;
});
