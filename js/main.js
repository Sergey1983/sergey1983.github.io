$(function () {

	$('.slider__inner, .news__slider').slick({
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>', 
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>', 
		infinite: false,
		dots: true,
	});

	$('select').styler();

	$('.header__btn-menu').on('click', function(){
		$('.menu ul').slideToggle();
	});

});