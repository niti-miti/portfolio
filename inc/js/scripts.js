$(document).ready(function () {
  $('.header-nav__link').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href');
    if(dest !== undefined && dest !== '') {
        $('html').animate({ 
    	    scrollTop: $(dest).offset().top
        }, 500
        );
    }
    return false;
});
    var scrolled;
    window.onscroll = function() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled > 1){
            $(".header").css({"box-shadow": "0px 5px 8px 1px rgba(0, 0, 0, 0.25)"})
            $(".header").css({"border": "none"})
        }
        if(1 > scrolled){
            $(".header").css({"box-shadow": "none"})    
            $(".header").css({"border-bottom": "1px solid #C4C4C4"})    
        }

    }

    $('.portfolio-slider').slick({
        infinite: false,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<span class="icon-arr"></span>',
        prevArrow: '<span class="icon-arr icon-arr--prev"></span>',
    })
});