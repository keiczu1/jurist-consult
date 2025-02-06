jQuery(document).ready(function($){
    console.log('yeah');

    var win=$(window);
    
    $(".fancybox, .button_expertPlagin-item").fancybox({
        padding: 0
    });


    $(".tablepress ul br, .tablepress ol br").each(function(index, el) {
        $(this).remove();
    });
    $(".tablepress ul, .tablepress ol").prev('br').remove();
    $(".tablepress ul, .tablepress ol, .tablepress p").next('br').remove();


    $(window).scroll(function () {
        if ($(this).scrollTop() > 0){
            $('#to_top:not(.mobile)').fadeIn();
        } else {
            $('#to_top').fadeOut();
        }
        if ($(this).scrollTop() > 60 && !$('#top').hasClass('hide')){
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });
    
    $('#btn_menu').click(function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('#header nav').toggleClass('active').slideToggle(400);
    });
    
    $('#main_menu > li > a').click(function(event){
        var w_win=win.width();
        if (w_win>1024){
            if ($(this).siblings('.sub').length){
                return false;
            }
        }else{
            event.preventDefault();
            $(this).siblings('.sub').toggleClass('open');
            $(this).siblings('.arrow').toggleClass('open');
            return false;
        }
    });

    $('#search_open').click(function(event) {
        event.preventDefault();
        $(this).hide().siblings('.search_form').fadeIn('400');
        $(this).hide().siblings('nav').removeClass('active').removeAttr('style');
    });

    $(document).mouseup(function (e){
        var div = $(".search_form");
        if (!div.is(e.target) && div.has(e.target).length === 0){
            div.fadeOut('400');
            $('#search_open').show();
        }
    });
    $('#top_show').click(function (event){
        event.preventDefault();
        $(this).slideUp();
        $('#top').removeClass('hide').fadeIn();
        return false;
    });
    $('#top a.close').click(function (event){
        event.preventDefault();
        $(this).parents('#top').addClass('hide').fadeOut();
        $('#top_show').slideDown();
        return false;
    });
    $('#to_top a').click(function (event){
        event.preventDefault();
        $('body, html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    function inits(){        
        var w_win=win.width();
        if (w_win>1024){
            $('#main_menu .sub.open, #main_menu .arrow.open').removeClass('open');
        }else{
            var to_top=$('#to_top');
            if(w_win>768){
                to_top.removeClass('mobile');
            }else{
                to_top.addClass('mobile').fadeOut();
            }
        }
        $('.cs-expertPlagin-tpl').each(function(){
            var self=$(this);
            var button_expertPlagin=self.find('.button_expertPlagin-item');
            if ($(window).width()>768){
                self.find('.head_expertPlagin-top').append(button_expertPlagin);
            }else{
                self.find('.descpage_expertPlagin-item').append(button_expertPlagin);
            }
        });
        if (win.scrollTop() > 60 && !$('#top').hasClass('hide')){
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    }

    inits();
    win.on('resize', function(event) {
        event.preventDefault();
        inits();
    });


    if ("geolocation" in navigator) {
        /* геолокация доступна */
        console.log('geolocation true');
    } else {
        /* геолокация НЕдоступна */
        console.log('geolocation false');
    }

    // console.log('TEST', '0');
    /*form*/

    //ymaps.ready(init_ymaps);
    /*function init_ymaps(){

        ymaps.ready(function () {
            let service = new GeolocationService(),
                // myLocation = service.getLocation({
                //     // Режим получения наиболее точных данных.
                //     enableHighAccuracy: true,
                //     // Максимальное время ожидания ответа (в миллисекундах).
                //     timeout: 50000,
                //     // Максимальное время жизни полученных данных (в миллисекундах).
                //     maximumAge: 1000
                // }),
                yandexIp = service.getLocation({
                    provider: 'yandex',
                    enableHighAccuracy: false
                });

            // myLocation.then(function(res) {
            //     console.log('res', res);
            //     let city = res.city,
            //         country = res.country,
            //         region = res.region;
            //     ip_location(country, region, city);
            // });
            comsole.log(service);

            yandexIp.then(function(res) {

                //let address = result.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.AddressDetails,
                //     country = address.Country,
                //     ip_country = country.CountryName,
                //     region = country.AdministrativeArea,
                //     ip_region = region.AdministrativeAreaName,
                //     city = region.SubAdministrativeArea.Locality,
                //     ip_city = city.LocalityName;
                //
                // document.ip_country = ip_country;
                // document.ip_region = ip_region;
                // document.ip_city = ip_city;

                console.log('res', res);
                let city = res.city,
                    country = res.country,
                    region = res.region;
                
                ip_location(country, region, city);
                
                document.ip_country = country;
                document.ip_region = region;
                document.ip_city = city;

                console.warn("res yandex", res);
            }, function(err) {
                console.warn('geolocation.yandex.err: ', err);
            });
        });

        // console.log('yanMap INIT');
        // mapStateAutoApply:true,
        // autoReverseGeocode: false

        // ymaps.geolocation.get({
        //     provider: 'auto',
        //     autoReverseGeocode: true
        // })
        //     .then(function (result) {
        //         console.warn('geolocation.auto.resolve: ', result);
        //     }, function(err) {
        //         console.warn('geolocation.auto.err: ', err);
        //     }
        // );

        // navigator.geolocation.getCurrentPosition(
        //     //onGeolocationSuccess, // Функция будет вызвана при удачном определении местоположения (в ней инициализируем карту с пришедшими в параметрах координатами центра)
        //     //onGeolocationError, // функция, будет вызвана, если произошла ошибка (в ней можно инициализировать карту в какой-то точке по-умолчанию)
        //     //options, // опции геолокации
        //     function (result) {
        //         var crd = result.coords;
        //         var html = '[' + crd.latitude + ',' + crd.longitude + ']';
        //         console.warn(result, html);
        //     },
        //     function (err) {
        //         var html = JSON.stringify(err);
        //         console.warn(err, html);
        //     },
        //     {}
        // );


        // ymaps.geolocation.get({
        //     provider: 'yandex',
        //     // Включим автоматическое геокодирование результата.
        //     autoReverseGeocode: true
        // }).then(function (result) {
        //
        //     // console.log('yandex', result);
        //
        //     var address = result.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.AddressDetails;
        //     var country = address.Country;
        //     var ip_country = country.CountryName;
        //     document.ip_country = ip_country;
        //     var region = country.AdministrativeArea;
        //     var ip_region = region.AdministrativeAreaName;
        //     document.ip_region = ip_region;
        //     var city = region.SubAdministrativeArea.Locality;
        //     var ip_city = city.LocalityName;
        //     document.ip_city = ip_city;
        //     ip_location(ip_country, ip_region, ip_city);
        //
        //     // console.log({'yandex_geo: ': address, 'ip_city: ': ip_city});
        // }, function(err) {
        //         console.warn('geolocation.yandex.err: ', err);
        //     }
        // );

        // ymaps.geolocation.get({
        //     provider: 'browser'
        // }).then(function (result) {
        //     // console.log('browser ', result);
        //
        //     var address = result.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.AddressDetails;
        //     var country = address.Country;
        //     var ip_country = country.CountryName;
        //     document.ip_country = ip_country;
        //     var region = country.AdministrativeArea;
        //     var ip_region = region.AdministrativeAreaName;
        //     document.ip_region = ip_region;
        //     var city = region.SubAdministrativeArea.Locality;
        //     var ip_city = city.LocalityName;
        //     document.ip_city = ip_city;
        //     ip_location(ip_country, ip_region, ip_city);
        //
        //     // console.log({'browser_geo: ': address, 'ip_city: ': ip_city});
        // }, function(err) {
        //         console.warn('geolocation.browser.err: ', err);
        //     }
        // );
    }*/

    /*function ip_location(country, region, city){
        // console.log('TEST', '2');
        console.log('to form:', [country, region, city]);

        document.ip_address=$('#main_form input[name="ip_address"]').val();
        $('#lld_front_submit_form input[name="ip_country"]').val(country);
        $('#lld_front_submit_form input[name="ip_region"]').val(region);
        $('#lld_front_submit_form input[name="ip_city"]').val(city);
        $('#lld_front_submit_form input[name="city"]').val(city);

        if (city.includes('Санкт-Петербург') || city.includes('Ленинградская')){
            $('#top .city').text('в Санкт-Петербурге');
            $('#top .phone').html('<a href="tel:+78124094323" class="number">+7(812) 409-43-23</a>');
        }else if (city.includes('Москва') || city.includes('Московская')) {
            $('#top .city').text('в Москве');
            $('#top .phone').html(' <a href="tel:+74993808891" class="number">+7(499) 380-88-91</a>');
        }else{
            $('#top .city').text('по всей России');
            $('#top .phone').html('<a href="tel:+74993808891" class="number">+7(499) 380-88-91</a>');
        }

        return false;
    }*/
    function ip_location(){
        setTimeout(function() {
            if (document.ip_country==undefined){
                ip_location();
            }else{
                document.ip_address=$('#main_form input[name="ip_address"]').val();
                var country=document.ip_country;
                var region=document.ip_region;
                var city=document.ip_city;
                $('#lld_front_submit_form input[name="ip_country"]').val(country);
                $('#lld_front_submit_form input[name="ip_region"]').val(region);
                $('#lld_front_submit_form input[name="ip_city"]').val(city);
                $('#lld_front_submit_form input[name="city"]').val(city);

                if (city.includes('Санкт-Петербург') || city.includes('Ленинградская')){
                    $('#top .city').text('в Санкт-Петербурге');
                    $('#top .phone').html('<a href="tel:+78124094323" class="number">+7(812) 409-43-23</a>');
                }else if (city.includes('Москва') || city.includes('Московская')) {
                    $('#top .city').text('в Москве');
                    $('#top .phone').html(' <a href="tel:+74993808891" class="number">+7(499) 380-88-91</a>');
                }else{
                    $('#top .city').text('по всей России');
                    $('#top .phone').html('<a href="tel:+74993808891" class="number">+7(499) 380-88-91</a>');
                }
            }
        }, 1000);
        return false;
    }
    ip_location();


    $('input[name="telephone"]').mask('+7 (999) 999-99-99',{placeholder: '+7 (___) ___-__-__'});
    $('input[data-required="required"]').after('<span class="star">*</span>');

    $('body').on('click', '#lld_front_submit_form .step1 .btn_question', function(event) {
        event.preventDefault();
        var self=$(this);
        var question_form=self.parents('#lld_front_submit_form');
        var textarea=question_form.find('.step1 textarea');

        var error=false;
        if(textarea.val().length<30){
            error=true;
            textarea.addClass('error');
            if (!textarea.siblings('.msg').length){
                textarea.after('<div class="msg">Сообщение должно быть не менее 30 символов</div>');
            }
        }else{
            textarea.removeClass('error');
            textarea.siblings('.msg').remove();
        }
        if (!error){
            question_form.find('.step1').removeClass('active');
            question_form.find('.step2').addClass('active');
            var parent=self.closest('.main_form, .question_form');
            if (parent.hasClass('main_form')){
                if (self.closest('.banner').length>0){
                    ym(44087159, 'reachGoal', 'sent-text-banner-from');
                }else{
                    ym(44087159, 'reachGoal', 'sent-text');
                }
                
            }
            if (parent.hasClass('question_form')){
                ym(44087159, 'reachGoal', 'sent-text-big-form');
            }
        }
        return false;
    });
    $('body').on('click', '#lld_front_submit_form .step2 .btn_question', function(event) {
        event.preventDefault();
        var self=$(this);
        var question_form=self.parents('#lld_front_submit_form');

        var error=false;
        question_form.find('input[data-required="required"]').each(function(){
            var el=$(this);
            if (el.val()==''){
                error=true;
                el.addClass('error');
                if (!el.siblings('.msg').length){
                    el.after('<div class="msg">Заполните поле</div>');
                }
            }else{
                el.removeClass('error');
                el.siblings('.msg').remove();
            }
        });
        if (!error){
            $.ajax({
                url: lld_localization.ajaxurl,
                data: question_form.serialize(),
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
                }/*,
                error: function() {
                  alert('Не удалось подключиться к серверу. Проверьте соединение с интернетом ...');
                }*/
              });
            question_form.find('.step2').removeClass('active');
            question_form.find('.step3').addClass('active');
            var parent=self.closest('.main_form, .question_form');
            if (parent.hasClass('main_form')){
                if (self.closest('.banner').length>0){
                    ym(44087159, 'reachGoal', 'sent-lead-banner-from');
                }else{
                    ym(44087159, 'reachGoal', 'sent-lead');
                }
            }
            if (parent.hasClass('question_form')){
                ym(44087159, 'reachGoal', 'sent-lead-big-form');
            }
        }
        return false;
    });
    $('body').on('click', '#lld_front_submit_form .step3 .btn_question', function(event) {
        event.preventDefault();
        var self=$(this);
        var question_form=self.parents('#lld_front_submit_form');
        question_form.find('textarea').val('');
        question_form.find('input[type="text"]:not([name="city"])').val('');
        question_form.find('.step3').removeClass('active');
        question_form.find('.step1').addClass('active');
        return false;
    });



    /*form*/

});
