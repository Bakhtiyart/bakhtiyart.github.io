$(function() {
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();

        // menu fixed on scroll
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        if ( scrolled >= 150  ) {
            $(".header-top-wrap").addClass("fixed");

        } else {
            $(".header-top-wrap").removeClass("fixed");
        }
    });

     // anchors
    $('a[href^="#"]').on("click", function (e) {
        var anchor = $(this);
        if(!anchor.hasClass('btn')){
            $('a[href^="#"]').parent().removeClass('menu__item--active');
            anchor.parent().addClass('menu__item--active');
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 80
            }, 777);
            e.preventDefault();
            return false;
        }

    });

    $(".hamburger").click(function(){
        $(this).toggleClass('is-active');
        $('.navbar').toggleClass('menu-active');
        $('.header-top-wrap').toggleClass("background-blue");
    });

    $('.case-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        prevArrow: $('.prev-button'),
        nextArrow: $('.next-button')
    });

    // $('.brands li').mouseenter(function(){
    //     var atribut = $(this).attr('style');
    //     console.log(atribut);
    //     $(this).css("background", "red");
    // } )//.mouseleave( handlerOut );


});