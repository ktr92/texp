function initFEcustom() {
	worksSliderInit()
	reviewsSliderInit()
	partnersSliderInit()
	animationCounter1()
	showCallback()
	fileUpload()
	detailSliderInit()
	fancyInit
}

$(document).ready(function () {
	$("input[type=tel]").mask("+7 999 999 99 99");
	new WOW().init();

})


function fancyInit() {

}

function detailSliderInit() {
	var swiper = new Swiper(".mySwiper", {
		spaceBetween: 15,
		slidesPerView: 5,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		centerInsufficientSlides: true,
		slideToClickedSlide: true, scrollbar: {
			el: '.swiper-scrollbar',
			hide: false,
			draggable: true
		},
	});
	var swiper2 = new Swiper(".mySwiper2", {
		spaceBetween: 0,
		pagination: {
			el: ".swiper-pagination",
		},

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: swiper,
		},

		/* on: {
			slideChange: function () {
				let activeIndex = this.activeIndex + 1;

				let activeSlide = document.querySelector(`.mySwiper2 .swiper-slide:nth-child(${activeIndex})`);
				let nextSlide = document.querySelector(`.mySwiper2 .swiper-slide:nth-child(${activeIndex + 1})`);
				let prevSlide = document.querySelector(`.mySwiper2 .swiper-slide:nth-child(${activeIndex - 1})`);

				if (nextSlide && !nextSlide.classList.contains('swiper-slide-visible')) {
					this.thumbs.swiper.slideNext()
				} else if (prevSlide && !prevSlide.classList.contains('swiper-slide-visible')) {
					this.thumbs.swiper.slidePrev()
				}
			}
		} */
	});
}

function fileUpload() {
	const actualBtn = document.getElementById('actual-btn');

	const fileChosen = document.getElementById('file-chosen');

	actualBtn.addEventListener('change', function () {
		fileChosen.textContent = this.files[0].name
	})
}

function showCallback() {
	$(document).scroll(function () {
		var y = $(this).scrollTop();
		if (y > 500) {
			$('.cbb').fadeIn();
		} else {
			$('.cbb').fadeOut();
		}
	});
}

function animationCounter1() {
	$('.js-appear-count').each(function () {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: 2000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});


}




function reviewsSliderInit() {
	$('.reviewsblock__slider').slick({
		dots: false,
		infinite: true,
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1484,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,

				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,

				}
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,

				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,

				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,

				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,

				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,

				}
			},
		]

	});
}

function partnersSliderInit() {
	$('.parntersblock__slider').slick({
		dots: false,
		infinite: true,
		arrows: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1484,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,

				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,

				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,

				}
			},
		]

	});
}

function worksSliderInit() {

	$('.sliderworks__slider').on('init', function (event, slick, currentSlide, nextSlide) {
		console.log('init')
		$(slick.$slides.get(0)).addClass('currentslide')
		$(slick.$slides.get(1)).addClass('nextslide')
		$(slick.$slides.get(2)).addClass('nextnextslide')
	});

	$('.sliderworks__slider').slick({
		dots: false,
		infinite: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,

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
			NextSlideDom = CurrentSlideDom.next()
			NextNExtSlideDom = NextSlideDom.next();

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