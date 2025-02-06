(function(jQuery) {

  /*jQuery(document).ready(function() {

    // Ajax request form submit
    jQuery('body').on('click', '.question_form .submit.step2', function(e) {
      e.preventDefault();
      var question_form=jQuery(this).parents('.question_form');
      jQuery.ajax({
        url: lld_localization.ajaxurl,
        data: question_form.find('#lld_front_submit_form').serialize(),
        method: 'POST',
        success: function(response) {

          switch (response){
            case 'failed_region':
              alert('Ошибка! Регион не найден!');
            break;
            case 'failed_city':
              alert('Ошибка! Город не найден!');
            break;
            case 'failed_add_lead':
              alert('Ошибка! Лид не добавлен!');
            break;
            default:
            break;
          }
        },
        error: function() {
          alert('Не удалось подключиться к серверу. Проверьте соединение с интернетом ...');
        }
      });
    });
  });*/

})(jQuery);