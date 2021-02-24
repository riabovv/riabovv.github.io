$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.slider2').slick({
        dots: true,
        infinite: false,
        draggable: false,
        prevArrow: '#prev-arrow-click',
        nextArrow: '#next-arrow-click'
    });
});

