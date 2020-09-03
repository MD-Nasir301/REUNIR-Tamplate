(function ($) {
"use strict";

// meanmenu--------------------
// $('#mobile-menu').meanmenu({
// 	meanMenuContainer: '.mobile-menu',
// 	meanScreenWidth: "992"
// });



// Sticky nav ------------------
window.addEventListener("scroll", function(){
    var nav = document.querySelector('nav');
    nav.classList.toggle("sticky-nav", window.scrollY > 100);
});
      

// ityped -------------------
ityped.init(document.querySelector("#ityped"), {
    showCursor: true,
    strings: ['DEPOSIT', 'BETTING', 'CRYPTOCURRENCY', 'EARN MONEY ',' HIGH YIELD','HYIP','INVESTMENT ',' PROFIT','SPORTING','TOURNAMENT','MUCH MORE...'],
    loop: true,
    backSpeed: 50,
    typeSpeed: 50,
    cursorChar: "",
    backDelay:  1100,
  });


// counter ------------------
  $('.counter').counterUp({
    delay: 10,
    time: 1500
});
// Scroll Top----------------
// $(window).on('scroll', function () {
// 	var scroll = $(window).scrollTop();
// 	if (scroll < 245) {
// 		$(".header-sticky").removeClass("sticky");
// 	} else {
// 		$(".header-sticky").addClass("sticky");
// 	}
// });


// mainSlider----------------
// function mainSlider() {
// 	var BasicSlider = $('.slider-active');
// 	BasicSlider.on('init', function (e, slick) {
// 		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
// 		doAnimations($firstAnimatingElements);
// 	});
// 	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
// 		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
// 		doAnimations($animatingElements);
// 	});
// 	BasicSlider.slick({
// 		autoplay: false,
// 		autoplaySpeed: 10000,
// 		dots: false,
// 		fade: true,
// 		arrows: false,
// 		responsive: [
// 			{ breakpoint: 767, settings: { dots: false, arrows: false } }
// 		]
// 	});

// 	function doAnimations(elements) {
// 		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
// 		elements.each(function () {
// 			var $this = $(this);
// 			var $animationDelay = $this.data('delay');
// 			var $animationType = 'animated ' + $this.data('animation');
// 			$this.css({
// 				'animation-delay': $animationDelay,
// 				'-webkit-animation-delay': $animationDelay
// 			});
// 			$this.addClass($animationType).one(animationEndEvents, function () {
// 				$this.removeClass($animationType);
// 			});
// 		});
// 	}
// }
// mainSlider();


// owlCarousel------------------------
$(".owl-carousel-choose").owlCarousel({
    margin:30,
    autoplay:true,
    autoplayTimeout:2000,
    nav:true,
    dots:true,
    navText:['<i class="icofont-thin-left"></i>','<i class="icofont-thin-right"></i>'],
    responsive:{
        0:{
            items:1,
        },
        576:{
            items:2,
        },
        768:{
            items:3,
        },
        992:{
            items:4,
        },
        1200:{
            items:5,
        }

    }
   
});

$(".owl-carousel-investment-plan").owlCarousel({
    margin:30,
    autoplay:true,
    autoplayTimeout:200000000,
    nav:true,
    dots:true,
    navText:['<i class="icofont-thin-left"></i>','<i class="icofont-thin-right"></i>'],
    responsive:{
        0:{
            items:1,
        },
        576:{
            items:1,
        },
        768:{
            items:3,
        },
        1000:{
            items:4,
        }

    }
   
});

$('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.testimonial-thumb'
  });

  $('.testimonial-thumb').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.testimonial-slider',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });

// magnificPopup img view -----------------
$(document).ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});



// magnificPopup video view---------------------
// $('.popup-video').magnificPopup({
// 	type: 'iframe'
// });


// isotop--------------------
// $('.grid').imagesLoaded( function() {
// 	// init Isotope
// 	var $grid = $('.grid').isotope({
// 	  itemSelector: '.grid-item',
// 	  percentPosition: true,
// 	  masonry: {
// 		// use outer width of grid-sizer for columnWidth
// 		columnWidth: '.grid-item',
// 	  }
// 	});
// });


// filter items on button click--------------
// $('.portfolio-menu').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter');
//   $grid.isotope({ filter: filterValue });
// });


//for menu active class-------------
// $('.portfolio-menu button').on('click', function(event) {
// 	$(this).siblings('.active').removeClass('active');
// 	$(this).addClass('active');
// 	event.preventDefault();
// });


// scrollToTop-----------
// $.scrollUp({
// 	scrollName: 'scrollUp', // Element ID
// 	topDistance: '300', // Distance from top before showing element (px)
// 	topSpeed: 300, // Speed back to top (ms)
// 	animation: 'fade', // Fade, slide, none
// 	animationInSpeed: 200, // Animation in speed (ms)
// 	animationOutSpeed: 200, // Animation out speed (ms)
// 	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
// 	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
// });

// One Page Nav---------------
// var top_offset = $('.header-area').height() -0;

// $('.main-menu ul').onePageNav({
//     currentClass: 'active',
//     scrollSpeed: 2000,
// 	scrollThreshold: 0,
// 	scrollOffset: top_offset,
// });
// $('.main-menu ul').onePageNav({
// 	currentClass: 'current',
// 	changeHash: false,
// 	scrollSpeed: 750,
// 	scrollThreshold: 0.5,
// 	easing: 'swing',
// });


// WOW active-------------------
// new WOW().init(); 


})(jQuery);