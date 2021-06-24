let headerLinks = document.querySelectorAll('.header-nav__link');

let header = document.querySelector('.header');
let headerWrapper = document.querySelector('div.header-wrapper');

function checkPosition() {
    var winPos = window.scrollY;
    if (winPos >= 40) {
        header.classList.add('scroll');
        headerWrapper.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
        headerWrapper.classList.remove('scroll');
    }
}

window.addEventListener('scroll', checkPosition);
document.addEventListener('DOMContentLoaded', checkPosition);

const headerCollectionLink = document.querySelectorAll('.header-nav__link');

for (let headerLink of headerCollectionLink) {
    headerLink.addEventListener('click', function (event) {
        event.preventDefault();

        let id = headerLink.getAttribute('href').substr(1);

        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
}

$(document).ready(function () {
    $('.portfolio-slider').slick({
        infinite: false,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<span class="icon-arr"></span>',
        prevArrow: '<span class="icon-arr icon-arr--prev"></span>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    $('.burger').click(function () {
        $('.header-nav--mobile').slideToggle();
    });

    if ($(window).width() < 1024) {
        $('.header-nav__link').click(function () {
            $('.header-nav--mobile').slideToggle();
        });
    }
});
