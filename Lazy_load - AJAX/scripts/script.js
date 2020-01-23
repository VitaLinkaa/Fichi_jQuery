$(function(){

  $('.load_more').on('click', function(){
    const btn = $(this); // текущий елемент
    const spinner = btn.find('.spinner-load');

    $.ajax({
      url: '../data.html', // емуляция постов
      type: 'GET',
      beforeSend: function(){
        btn.attr('disabled', true);// заблокировали кнопку
        spinner.addClass('d-inline-block');
      },
      success: function(responce){
        setTimeout(function(){
          spinner.removeClass('d-inline-block');
          btn.attr('disabled', false);
          $('.after-posts').before(responce);
        }, 500);
      },
      error: function(){
        alert('Error!');
        spinner.removeClass('d-inline-block');
        btn.attr('disabled', false);
      }

    });
    
  });
});