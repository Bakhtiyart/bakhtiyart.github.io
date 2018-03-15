

jQuery(document).ready(function($) {
	$('.slider').slick({
	dots: true,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	arrows: true,
	prevArrow: '<button id="prev" type="button"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
	nextArrow: '<button id="next" type="button"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
	
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