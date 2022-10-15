const btnMoreDetails = $('.block-list__list__item__button');
const popupFade = $('.popup-fade');
const popupClose = $('.popup-item__close');

btnMoreDetails.click(function () {
    popupFade.removeClass('popup-fade--close');
    $('body').css('overflow', 'hidden');
});
popupClose.click(function () {
    popupFade.addClass('popup-fade--close');
    $('body').css('overflow', 'scroll');

});

const btnBurger = $('.header__burger');
const burgerMenu = $('.header__burger__menu');
const burgerMenuClose = $('.header__burger__menu__close');

btnBurger.click(function () {
    burgerMenu.addClass('header__burger__menu--open');
});
burgerMenuClose.click(function () {
    burgerMenu.removeClass('header__burger__menu--open');
});

let $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

const btnLang = $('.header__navigation__block-lang');
const LangMenu = $('.header__navigation__block-lang__menu');

btnLang.hover(
    function () {
        LangMenu.toggleClass('header__navigation__block-lang__menu--open');
    }
);
//

