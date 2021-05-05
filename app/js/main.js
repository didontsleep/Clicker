$('.advert__case').on("click", function () {
    $('.advert__case-item').toggleClass('_active-case')
})
$('.case__content-item').on("click", function () {
    $(this).find('.case__content-img').toggleClass('_active-case')
})
$('.burger').on("click", function () {
    $('.burger-block').fadeIn('burger__active')
})
$('.close-btn').on("click", function () {
    $('.burger-block').fadeOut('burger__active')
})
