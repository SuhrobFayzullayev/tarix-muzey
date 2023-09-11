$(document).ready(function(){

$('.slider__list').slick({
    dots: true,
    arrows:true,
    autoplaySpeed:5000,
    infinite: true,
    speed: 1500,
    autoplay:true,
    fade: true,
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    data:true,
    nav:false,
    autoplaySpeed:1500,
    autoplay:true,
    responsive:{
      0:{
        items:1
      },

      650:{
        items:1
      },

      1220:{
        items:1.5
      }
  }
});

$('.useful_links__list').slick({
    dots: true,
    arrows:false,
    infinite: true,
    autoplaySpeed:5000,
    speed: 1000,
    autoplay:true,
    slidesToShow: 3, 
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
});

$('.fotogalereya_in__list1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  fade: true,
  asNavFor: '.fotogalereya_in__list2'
});

$('.fotogalereya_in__list2').slick({
              arrows: false,
              asNavFor:'.fotogalereya_in__list1',
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 7,
              slidesToScroll: 1,
              focusOnSelect: true,
               responsive: [
             {
            breakpoint: 1630,
            settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            dots: false
            }
          },
           {
            breakpoint: 1440,
            settings: {
            slidesToShow: 5,
           slidesToScroll: 1
            }
           },

           {
            breakpoint: 1180,
            settings: {
            slidesToShow: 4,
           slidesToScroll: 1
            }
           },

           {
            breakpoint: 900,
            settings: {
            slidesToShow: 3,
           slidesToScroll: 1
            }
           },

           {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
           slidesToScroll: 1
            }
           },
         ]
});
})