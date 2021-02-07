$(function(){
$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  adaptiveHeight: true
});
});

$(document).ready(function(){
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu,.header__logo').toggleClass('active');
    $('body').toggleClass('lock');
  });

});
