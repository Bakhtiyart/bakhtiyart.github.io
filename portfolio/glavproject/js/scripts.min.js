// document.addEventListener("DOMContentLoaded", function() {
$(document).ready(function(){
    
    // anchors
    $('a[href^="#"]').on("click", function (e) {
        
        var anchor = $(this);

            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 100
            }, 777);
            e.preventDefault();
            return false;
        

    });


   $('#mobileMenuIcon').click(function () {
      $(this).toggleClass('is-active');
      $('.mobile-menu-wrap').addClass('mobile-menu-wrap_show')
      $('body').toggleClass('open-mobile-menu');
      if(!$('body').hasClass('open-mobile-menu')){
          setTimeout(function () {
              $('.mobile-menu-wrap').removeClass('mobile-menu-wrap_show');
          }, 300);
      }
   })
    
    //menu sticky
    

 var $window = $(window), // Основное окно
 
    $target = $(".header-middle"), // Блок, который нужно фиксировать при прокрутке
 
    $h = $target.offset().top; // Определяем координаты верха нужного блока (например, с навигацией или виджетом, который надо фиксировать)
 
  $window.on('scroll', function() {
 
    // Как далеко вниз прокрутили страницу
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
 
    // Если прокрутили скролл ниже макушки нужного блока, включаем ему фиксацию
    if (scrollTop > $h) {
 
      $target.addClass("header-middle_fixed");
 
    // Иначе возвращаем всё назад
    } else {     
 
      $target.removeClass("header-middle_fixed");
    }
  });



    $('.overlay').click(function () {
        $('#mobileMenuIcon').removeClass('is-active');
        $('body').removeClass('open-mobile-menu');
        setTimeout(function () {
            $('.mobile-menu-wrap').removeClass('mobile-menu-wrap_show');
        }, 1000);
    })


    //
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        // fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000
    });





    $('.project-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    $('.certificate-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.partner-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

    $('.mobile-menu__item').click(function(){
    	$(this).children('.sub-menu-mobile').toggleClass('sub-menu_active');
    });


    // fixed menu-block 
    $(".fixed-menu__item").on('click', function(){
        $('.block-wrap').addClass('open');
        $('.fixed-menu-overlay').addClass('active');
        var name = $(this).data('name');
        $('.info-block').removeClass('active');
        if(name == 'chat-block'){
            $('.chat-block').addClass('active');
        }
        else if(name == 'phone-block'){
            $('.phone-block').addClass('active');
        }
        else if(name == 'message-block'){
            $('.message-block').addClass('active');
        }
        else if(name == 'map-block'){
            $('.map-block').addClass('active');
        }
    });


    $("#closeButton").on('click', function(){
        $('.block-wrap').removeClass('open');
        $('.fixed-menu-overlay').removeClass('active');
    });

    $(".fixed-menu-overlay").on('click', function(){
         $('.block-wrap').removeClass('open');
        $(this).removeClass('active');
    });

    //card page 
    
     $('.single-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.product-slider'
    });
    $('.product-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.single-slider',
      centerMode: true,
      centerPadding: '0px',
      dots: false,
      focusOnSelect: true,
      autoplay: false,
      autoplaySpeed: 5000,
      responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]


    });

    // similar slider
    $('.similar-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

        // other slider
    $('.other-product-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    // caculate popup
    $('#calculateButton').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,
        
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    // order popup
    $('#orderButton').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,
        
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });


    $('#sidebarIcon').on('click', function(){
        $('.sidebar-menu').toggleClass('show');
        $(this).toggleClass('is-active');
    });




var inputs = document.querySelectorAll('.inputfile');
Array.prototype.forEach.call(inputs, function(input){
  var label  = input.nextElementSibling,
      labelVal = label.innerHTML;
  input.addEventListener('change', function(e){
    var fileName = '';
    if( this.files && this.files.length > 1 )
      fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
    else
      fileName = e.target.value.split( '\\' ).pop();
        if( fileName )
      label.querySelector( 'strong' ).innerHTML = fileName;
    else
      label.innerHTML = labelVal;
    });
});

if(navigator.userAgent.search(/Firefox/) === 'Firefox'){
   input.addEventListener('focus', function(){ input.classList.add( 'has-focus' ); });
    input.addEventListener('blur', function(){ input.classList.remove( 'has-focus' ); }); 
}



var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('myMap', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.673179,37.42253], // Москва
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    }),

            // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Россия, Москва, Московская улица, 42',
            balloonContent: 'Россия, Москва, Московская улица, 42'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/map5.png',
            // Размеры метки.
            iconImageSize: [32, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

        myMap.geoObjects
            .add(myPlacemark);
        
        //отключаем зум колёсиком мышки
        myMap.behaviors.disable('scrollZoom');

        //на мобильных устройствах... (проверяем по userAgent браузера)
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            //... отключаем перетаскивание карты
            myMap.behaviors.disable('drag');
        }
    };



});