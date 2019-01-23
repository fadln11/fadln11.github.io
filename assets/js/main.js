/* =================================
------------------------------------
	Faustina Adeline - personal site
  Version: 0.X
	from Civic - CV Resume
 ------------------------------------
 ====================================*/

$(document).ready(function () {

	'use strict';


	$(window).on('load', function() {
		/*------------------
			Preloder
		--------------------*/
		$(".loader").fadeOut();
		$("#preloder").delay(400).fadeOut("slow");
	});


	// IIFE
	(function($) {

		/*------------------
			Background set
		--------------------*/
		$('.set-bg').each(function() {
			var bg = $(this).data('setbg');
			$(this).css('background-image', 'url(' + bg + ')');
		});


		/*------------------
			Common elements
		--------------------*/

		// Carousel
		$('.review-slider').owlCarousel({
			loop: true,
			nav: false,
			dots: true,
			items: 1,
			autoplay: true,
			autoplayTimeout: 6000,
			autoplayHoverPause: true,
		});

		// var owl = $('.owl-carousel')
		// owl.mouseover(function () {
		// 	owl.trigger('stop.owl.autoplay');
		// })
		// owl.mouseleave(function () {
		// 	owl.trigger('play.owl.autoplay', [1000]);
		// })

		// Progress bar
		$('.progress-bar-style').each(function() {
			var progress = $(this).data("progress");
			var prog_width = progress + '%';
			if (progress <= 100) {
				$(this).append('<div class="bar-inner" style="width:' + prog_width + '"><span>' + prog_width + '</span></div>');
			}
			else {
				$(this).append('<div class="bar-inner" style="width:100%"><span>' + prog_width + '</span></div>');
			}
		});


		$('.lan-prog').each(function() {
			var progress = $(this).data("lanprogesss");
			var ele      = '<span></span>';
			var ele_fade = '<span class="fade-ele"></span>';

			for (var i = 1; i <= 5; i++) {
				if (i <= progress) {
					$(this).append(ele);
				} else {
					$(this).append(ele_fade);
				}
			}
		});


		/*------------------
			Popup
		--------------------*/
		$('.portfolio-item .port-pic').magnificPopup({
			type: 'image',
			mainClass: 'img-popup-warp',
			removalDelay: 500,
		});

		$('.musing-item .musing-pic').magnificPopup({
			type: 'image',
			mainClass: 'img-popup-warp',
			removalDelay: 500,
		});

		$('#my-pdf').magnificPopup({
			type: 'iframe',
			mainClass: 'pdf-popup',
			removalDelay: 300,
		});


		/*------------------
			Back to top and
			button down
		--------------------*/
		$(window).scroll(function () {
			var height = $(window).scrollTop();
			if (height > 550) {
				$('.back-to-top').fadeIn();
				$('#to-resume').fadeOut();
			} else {
				$('.back-to-top').fadeOut();
				$('#to-resume').fadeIn();
			}
		});

		$('.back-to-top').click(function (event) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: 0 }, 'slow');
			return false;
		});

		$('#to-resume').click(function (event) {
			event.preventDefault();
			$('html,body').animate({
				scrollTop: $('.resume-section').offset().top
				},'slow');
		});


		/*------------------
			Navbar
		--------------------*/

		$('.navbar-toggler').on('click', function(e) {
			e.preventDefault();

			// isVisible checks the state at that instant,
			// while it takes around 0.4 seconds for the
			// #navbar-content to change visibility state.
			var isVisible = $('#navbar-content').is(':visible');

			// reverse logic due to isVisible condition
			if (isVisible) {
				$('.navbar').css('background', 'transparent')
			} else {
				$('.navbar').css('background', '#343a40')
			}
		});

		$('.nav-item a').on('click', function (event) {
			event.preventDefault();
			// close toggler on click
			$('.navbar-toggler').click();
			// slow scroll to href
			var target = $(this).attr('href');
			$('html,body').animate({
				scrollTop: $(target).offset().top
			}, 'slow');
		});


		/*------------------
			Progress circle
		--------------------*/

		if($().circleProgress){

			// Set progress circle 1
			$("#progress1").circleProgress({
				value: 0.75,
				size: 175,
				thickness: 2,
				fill: "#40424a",
				emptyFill: "rgba(0, 0, 0, 0)"
			});
			// Set progress circle 2
			$("#progress2").circleProgress({
				value: 0.83,
				size: 175,
				thickness: 2,
				fill: "#40424a",
				emptyFill: "rgba(0, 0, 0, 0)"
			});

			// Set progress circle white
			$("#progress3").circleProgress({
				value: 0.75,
				size: 175,
				thickness: 2,
				fill: "#ffffff",
				emptyFill: "rgba(0, 0, 0, 0)"
			});

			// Set progress circle white
			$("#progress4").circleProgress({
				value: 0.83,
				size: 175,
				thickness: 2,
				fill: "#ffffff",
				emptyFill: "rgba(0, 0, 0, 0)"
			});

			// Set progress circle skyblue
			$("#progress5").circleProgress({
				value: 0.75,
				size: 175,
				thickness: 2,
				fill: "#009fff",
				emptyFill: "rgba(0, 0, 0, 0)"
			});

			// Set progress circle skyblue
			$("#progress6").circleProgress({
				value: 0.83,
				size: 175,
				thickness: 2,
				fill: "#009fff",
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}

	// ------ end IIFE
	})(jQuery);

});
