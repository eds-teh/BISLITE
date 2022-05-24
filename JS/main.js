$(function(){


    $('.slider__inner').slick({
        arrows: false,
        dots: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // speed: 2500
    });

    $('.works__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/svg/shape-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/svg/shape-right.svg" alt=""></button>',
        // autoplay: true,
        // autoplaySpeed: 2000,
        // speed: 2500
    });

});

// идем в документацию ищем в сетингс prewArrow & nextArrow