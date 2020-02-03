$('a').click(function (e) {
    if ($.attr(this, 'href').indexOf('#') === -1 && $.attr(this, 'data-lightbox') === undefined) {
        location.href = $.attr(this, 'href');
        return
    }
    e.preventDefault();
    let navbar = document.querySelector('.navbar');
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - navbar.offsetHeight
    }, 800);
});

const topButton = $('.top-button');
document.addEventListener('scroll', function (e) {
    if (window.scrollY === 0) {
        topButton.css('opacity', 0);
    } else {
        topButton.css('opacity', 1);
    }
});


const navbar = document.querySelector('.navbar');
let prevScrollValue = window.pageYOffset;

window.addEventListener('scroll', () => {
    if (prevScrollValue < window.pageYOffset) {
        navbar.style.top = '-75px';
        prevScrollValue = window.pageYOffset;
    } else {
        navbar.style.top = '0';
    }
}, {'passive': true});
