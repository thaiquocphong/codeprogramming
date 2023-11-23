$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()){
            $('.button').fadeIn();
        } else {
            $('.button').fadeOut();
        }
    });
    $(".button").click(function(){
        $('html, body').animate({scrollTop: 0}, 2000);
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });    
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 5,
    nav: false,
    dots: false,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})