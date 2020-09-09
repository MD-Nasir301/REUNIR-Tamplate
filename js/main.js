$( document ).ready(function() {



// Sticky nav ------------------
window.addEventListener("scroll", function(){
    var nav = document.querySelector('.main-menu-content');
    nav.classList.toggle("sticky-nav", window.scrollY > 100);
});

// // Nav background set
$(window).on("resize",function() {
    if ($(window).width() < 992) {
        var nav = document.querySelector('.main-menu-content');
        nav.classList.add("nav-bg");
    }
   else {
    var nav = document.querySelector('.main-menu-content');
      nav.classList.remove("nav-bg");
   }
  });

// // ityped -------------------
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
//   $('.counter').counterUp({
//     delay: 10,
//     time: 1500
// });

// // owlCarousel------------------------
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

// $(".owl-carousel-investment-plan").owlCarousel({
//     margin:30,
//     autoplay:true,
//     autoplayTimeout:200000000,
//     nav:true,
//     dots:true,
//     navText:['<i class="icofont-thin-left"></i>','<i class="icofont-thin-right"></i>'],
//     responsive:{
//         0:{
//             items:1,
//         },
//         576:{
//             items:1,
//         },
//         768:{
//             items:3,
//         },
//         1000:{
//             items:4,
//         }

//     }
   
// });

// // slick-slider
// $('.testimonial-slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: false,
//     asNavFor: '.testimonial-thumb'
//   });

//   $('.testimonial-thumb').slick({
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     asNavFor: '.testimonial-slider',
//     dots: false,
//     centerMode: false,
//     focusOnSelect: true
//   });

// magnificPopup img view -----------------

    // $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    //     disableOn: 700,
    //     type: 'iframe',
    //     mainClass: 'mfp-fade',
    //     removalDelay: 160,
    //     preloader: false,
    //     fixedContentPos: false
    // });


// calculate Profit

$('.investment-input-field input').on("input",function(e){
   var investAmount =parseInt($(this).val());
   var investPer = parseInt($('.investment-input-field select').val());
   var dailyProfit=((investAmount*investPer/100)*1).toFixed(2)
   var weeklyProfit= ((investAmount*investPer/100)*7).toFixed(2)   
   var monthlyProfit=((investAmount*investPer/100)*30).toFixed(2)
   $('.daily-profit span').html(dailyProfit)
   $('.weekly-profit span').html(weeklyProfit)
   $('.monthly-profit span').html(monthlyProfit)

   if(e.target.value == ''){
        $('.daily-profit span').html(0)
        $('.weekly-profit span').html(0)
        $('.monthly-profit span').html(0)
   }
 }) 

$('.investment-input-field select').on("input",function  (){
    if($('.investment-input-field input').val() == ''){
        $('.daily-profit span').html(0)
        $('.weekly-profit span').html(0)
        $('.monthly-profit span').html(0)
    }
    else{
        var investAmount =parseInt($('.investment-input-field input').val());
        var investPer = parseInt($(this).val());
        var dailyProfit=((investAmount*investPer/100)*1).toFixed(2)
        var weeklyProfit= ((investAmount*investPer/100)*7).toFixed(2)   
        var monthlyProfit=((investAmount*investPer/100)*30).toFixed(2)
        $('.daily-profit span').html(dailyProfit)
        $('.weekly-profit span').html(weeklyProfit)
        $('.monthly-profit span').html(monthlyProfit)
    }

});



});
