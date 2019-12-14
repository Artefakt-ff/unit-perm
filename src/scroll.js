$('a').click(function (e) {
    e.preventDefault();
    let navbar = document.querySelector('.navbar');
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - navbar.offsetHeight
    }, 800);
});