$('.advert__case').on("click", function () {
    $('.advert__case-item').toggleClass('_active-case')
})
//первый кейс 
$('.case__content-item').on("click", function () {
    $(this).find('.case__content-img').toggleClass('_active-case')
})
// вторые кейсы 
$('.burger').on("click", function () {
    $('.burger-block').fadeIn('burger__active')
})
// бургер открытватся
$('.close-btn').on("click", function () {
    $('.burger-block').fadeOut('burger__active')
})
// закрывается