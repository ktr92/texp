function initFEcustom() {


	$('.sliderworks__slider').on('init', function (event, slick, currentSlide, nextSlide) {
		console.log('init')
		$(slick.$slides.get(0)).addClass('currentslide')
		$(slick.$slides.get(1)).addClass('nextslide')
		$(slick.$slides.get(2)).addClass('nextnextslide')
	});
	$('.sliderworks__slider').slick({
		dots: false,
		infinite: true,
		arrows: true,
		slidesToShow: 1,
		variableWidth: true,
		nextArrow: $(this).closest('[data-sliderwrapper="sliderworks"]').find('[data-slidernext="sliderworks"]'),
		prevArrow: $(this).closest('[data-sliderwrapper="sliderworks"]').find('[data-slidernext="sliderworks"]'),

	});





	$('.sliderworks__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		let direction
		if (currentSlide === 0 && nextSlide === slick.$slides.length - 1) {
			// its going from the first slide to the last slide (backwards)
			direction = 'prev';
		} else if (nextSlide > currentSlide || (currentSlide === (slick.$slides.length - 1) && nextSlide === 0)) {
			// its either going normally forwards or going from the last slide to the first
			direction = 'next';
		} else {
			direction = 'prev';
		}



		let CurrentSlideDom = 1
		let NextSlideDom = 2
		let NextNExtSlideDom = 3

		if (direction === 'next') {
			CurrentSlideDom = $(slick.$slides.get(nextSlide));
			NextSlideDom = $(slick.$slides.get(nextSlide)).next();
			NextNExtSlideDom = NextSlideDom.next();
		} else {
			CurrentSlideDom = $(slick.$slides.get(nextSlide));
			NextSlideDom = CurrentSlideDom.prev()
			NextNExtSlideDom = NextSlideDom.prev();

		}

		$(slick.$slides.removeClass('currentslide'));
		$(slick.$slides.removeClass('nextslide'));
		$(slick.$slides.removeClass('nextnextslide'));


		CurrentSlideDom.addClass('currentslide')
		NextSlideDom.addClass('nextslide')
		NextNExtSlideDom.addClass('nextnextslide')
	});
}


window.addEventListener('load', function () {
	initFEcustom()
});