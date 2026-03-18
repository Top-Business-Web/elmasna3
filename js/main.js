$(function (){

    'use strict';

     // fixed navbar

     var navbar = $('.navbar');
     $(window).scroll(function(){
         if($(window).scrollTop() <= 100){
             navbar.removeClass('fixed-top');
         }else{
             navbar.addClass('fixed-top');
         }
     });

// scroll to top

$(window).scroll(function () {
    if ($(window).scrollTop() >= 700) {
        $('.scroll-top').fadeIn(400);
    }else{
        $('.scroll-top').fadeOut(400);
    }
});
$('.scroll-top').click(function () {
    
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


 // involoved

    $(".involoved.owl-carousel").owlCarousel({
        autoplay: true,
        autoplayhoverpause: true,
        autoplaytimeout: 100,
        items: 5,
        nav: true,
        loop: true,
        dots: false,
        responsive: {
            0 : {
                items: 1
            },
            485 : {
                items: 3
            },
            728 : {
                items: 4
            },
            1200 : {
                items: 5
            }
        }
    });

// loading page

$(window).on('load',function(){
    $('.loader').css({'display': 'none'});
});

});