//http://codepen.io/nodws/pen/Cbjhs

// @nodws
(function() {
  $(".icon").on('click', function() {
    $(this).toggleClass('active');
    $('.box').toggleClass('active');
    return $('.tap').addClass('active');
  });

}).call(this);