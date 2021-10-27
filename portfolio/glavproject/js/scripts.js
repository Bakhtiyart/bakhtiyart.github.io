document.addEventListener("DOMContentLoaded", function() {
 
   $('.hamburger').click(function () {
      $(this).toggleClass('is-active');
      $('.mobile-menu-wrap').addClass('mobile-menu-wrap_show')
      $('body').toggleClass('open-mobile-menu');
      if(!$('body').hasClass('open-mobile-menu')){
          setTimeout(function () {
              $('.mobile-menu-wrap').removeClass('mobile-menu-wrap_show');
          }, 1000);
      }
   })
    //

    $('.overlay').click(function () {
        $('.hamburger').removeClass('is-active');
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
        cssEase: 'linear'
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
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
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
        slidesToShow: 3,
        slidesToScroll: 3,
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
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
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
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});