$(function(){
  $('.content').slice(0, 3).show();

  $('.load_more').on('click', function(e){
    e.preventDefault();
    $('.content:hidden').slice(0, 3).slideDown();
  });

  $('.load_less').on('click', function (e) {
    e.preventDefault();
    $('.content').slice(0).slideUp();
  });

});