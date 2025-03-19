/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});



	
	////////////////////////////////////////////////////
	// 02. Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "1199",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	////////////////////////////////////////////////////
	// 09. Sidebar Js
	$(".tp-menu-bar").on("click", function () {
		$(".tpoffcanvas").addClass("opened");
		$(".body-overlay").addClass("apply");
	});
	
	$(".close-btn").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});

	$(".body-overlay").on("click", function () {
		$(".tpoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});

	// last child menu
	$('.wp-menu nav > ul > li').slice(-4).addClass('menu-last');

	////////////////////////////////////////////////////
	// 03. Search Js
	$(".search-open-btn").on("click", function () {
		$(".search__popup").addClass("search-opened");
		$(".search-popup-overlay").addClass("search-popup-overlay-open");
	});

	
	$(".search-close-btn").on("click", function () {
		$(".search__popup").removeClass("search-opened");
		$(".search-popup-overlay").removeClass("search-popup-overlay-open");
	});


	////////////////////////////////////////////////////
	// 06. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	////////////////////////////////////////////////////
	// 07. Data CSS Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	// settings open btn
	$(".tp-theme-settings-open-btn").on("click", function () {
		$(".tp-theme-settings-area").toggleClass("settings-opened");
	});


	// hero-active active
	if ($('.hero-active').length > 0) {
		var hero_slider_1 = new Swiper('.hero-active', {
			slidesPerView: 1,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			centeredSlides: true,
			effect: 'fade',
			navigation: {
				nextEl: ".hero-button-next",
				prevEl: ".hero-button-prev",
			},
			breakpoints: {
				'991': {

				},
				'768': {
					slidesPerView: 1,
				},
				'767': {
					slidesPerView: 1,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	}

	// hero-active active
	if ($('.hero-active-2').length > 0) {
		var hero_slider_2 = new Swiper('.hero-active-2', {
			slidesPerView: 1,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			effect: 'fade',
			centeredSlides: true,
			navigation: {
				nextEl: ".hero-button-next-2",
				prevEl: ".hero-button-prev-2",
			},
			breakpoints: {
				'991': {

				},
				'768': {
					slidesPerView: 1,
				},
				'767': {
					slidesPerView: 1,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	}
	// hero-active active
	if ($('.hero-active-3').length > 0) {
		var hero_slider = new Swiper('.hero-active-3', {
			slidesPerView: 1,
			loop: true,
			autoplay: {
				delay: 5000,
			},
			effect: 'fade',
			centeredSlides: true,
			navigation: {
				nextEl: ".tpslick-prev",
				prevEl: ".tpslick-next",
			},
			breakpoints: {
				'991': {

				},
				'768': {
					slidesPerView: 1,
				},
				'767': {
					slidesPerView: 1,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	}

	// testimonial active
	var testimonials_swiper = new Swiper('.testimonials-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 2,
		spaceBetween: 90,
		pagination: {
			el: ".testimonial-slider-dots",
			clickable: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 2,
				spaceBetween: 90,
			},
			'1199': {
				slidesPerView: 1,
				spaceBetween: 50,
			},
			'768': {
				slidesPerView: 1,
			},
			'767': {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			'0': {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			pagination: {
				el: ".testimonial-slider-dots",
				clickable: true,
			},
		},
		navigation: {
			nextEl: '.test-n',
			prevEl: '.test-p',
		},
	});

	// testimonial 2 active
	var testimonials_2_swiper = new Swiper('.testimonials-2-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 2,
		spaceBetween: 30,
		pagination: {
			el: ".testimonial-2-slider-dots",
			clickable: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 2,
			},

			'1199': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'767': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
			pagination: {
				el: ".testimonial-2-slider-dots",
				clickable: true,
			},
		},
		navigation: {
			nextEl: '.test-n',
			prevEl: '.test-p',
		},

	});

	// testimonial 3 active
	var testimonials_3_swiper = new Swiper('.testimonials-3-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 2,
		spaceBetween: 60,
		pagination: {
			el: ".testimonial-3-slider-dots",
			clickable: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 2,
			},

			'1199': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'767': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			pagination: {
				el: ".testimonial-3-slider-dots",
				clickable: true,
			},
		},
		navigation: {
			nextEl: '.test-n',
			prevEl: '.test-p',
		},

	});

	// brand active
	var brand_swiper = new Swiper('.brand-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 5,
		spaceBetween: 0,
		breakpoints: {
			'1200': {
				slidesPerView: 5,
			},

			'1199': {
				slidesPerView: 5,
			},
			'768': {
				slidesPerView: 4,
			},
			'767': {
				slidesPerView: 4,
			},
			'576': {
				slidesPerView: 3,
			},
			'0': {
				slidesPerView: 2,
			},
			pagination: {
				el: ".testimonial-slider-dots",
				clickable: true,
			},
		},
		navigation: {
			nextEl: '.test-n',
			prevEl: '.test-p',
		},

	});

	// team active
	var team_swiper = new Swiper('.team-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 2,
		spaceBetween: 30,
		pagination: {
			el: ".team-slider-dots",
			clickable: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 4,
				spaceBetween: 30,
			},

			'1199': {
				slidesPerView: 4,
				spaceBetween: 30,
			},
			'768': {
				slidesPerView: 3,
			},
			'767': {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
			pagination: {
				el: ".team-slider-dots",
				clickable: true,
			},
		},
		navigation: {
			nextEl: '.test-n',
			prevEl: '.test-p',
		},
	});

	// project active
	var project_swiper = new Swiper('.project-active', {
		// Optional parameters
		loop: true,
		slidesPerView: 2,
		spaceBetween: 30,
		pagination: {
			el: ".project-slider-dots",
			clickable: true,
		},
		breakpoints: {
			'1200': {
				slidesPerView: 4,
				spaceBetween: 30,
			},

			'1199': {
				slidesPerView: 4,
				spaceBetween: 30,
			},
			'768': {
				slidesPerView: 3,
			},
			'767': {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		navigation: {
			nextEl: '.test-n',
			prevEl: '.test-p',
		},

	});
	////////////////////////////////////////////////////
	// 07. Nice Select Js
	$('.active-class-select').niceSelect();

	// back_to_top
	function back_to_top() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');

		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();

	var tp_rtl = localStorage.getItem('tp_dir');
	let rtl_setting = tp_rtl == 'rtl' ? true : false;


	////////////////////////////////////////////////////
	// 08. slider__active Slider Js
	if ($(".slider__active").length > 0) {
		let sliderActive1 = ".slider__active";
		let sliderInit1 = new Swiper(sliderActive1, {
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			rtl: rtl_setting,
			effect: 'fade',

			autoplay: {
				delay: 5000000,
			},

			// If we need pagination
			pagination: {
				el: ".main-slider-dot",
				dynamicBullets: false,
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".slider-button-next",
				prevEl: ".slider-button-prev",
			},

			a11y: false,
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + " [data-animation]").each(function () {
					let anim = $(this).data("animation");
					let delay = $(this).data("delay");
					let duration = $(this).data("duration");

					$(this)
						.removeClass("anim" + anim)
						.addClass(anim + " animated")
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one(
							"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
							function () {
								$(this).removeClass(anim + " animated");
							}
						);
				});
			};
			animated();
			// Make animated when slide change
			init.on("slideChange", function () {
				$(sliderActive1 + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}


	var slider = new Swiper('.active-class', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		rtl: rtl_setting,
		pagination: {
			el: ".testimonial-pagination-6",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
			},
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	var postboxSlider = new Swiper('.postbox__slider', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		rtl: rtl_setting,
		autoplay: {
			delay: 3000,
		},
		// Navigation arrows
		navigation: {
			nextEl: ".postbox-slider-button-next",
			prevEl: ".postbox-slider-button-prev",
		},
		breakpoints: {
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	////////////////////////////////////////////////////
	// 13. Masonary Js
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: '.grid-item',
			}
		});

		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	// 14. Wow Js
	new WOW().init();

	////////////////////////////////////////////////////
	// 21. Counter Js
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

})(jQuery);