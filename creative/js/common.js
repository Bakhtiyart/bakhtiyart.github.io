$(function() {



 var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });

  var link = $('.top-menu');
  var menuLink = $('.menu a')

	$hamburger.click(function(){
		link.toggleClass('top-menu_active');
	});
	menuLink.click(function(){
		link.toggleClass('top-menu_active');
		$hamburger.toggleClass("is-active");
	});



//плавный скролл

$(".down").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1000 мс
		$('body,html').animate({scrollTop: top}, 800);
	});

	$('a[data-target^="anchor"]').on('click.smoothscroll', function(){
		var target = $(this).attr('href'),
					bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 800);
		return false;
	});


// Отправка заявки 
	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.user_name.value == '' || document.form.user_phone.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});


});﻿



// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function() { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-thank-you').fadeOut();
    }
});

// Маска ввода номера телефона (плагин maskedinput)
$(function($){
	$('[name="user_phone"]').mask("+7(999) 999-9999");
});


