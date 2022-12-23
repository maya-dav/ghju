$('.counter').counterUp({
  delay: 10,
  time: 1000
});


$(".slide5").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow:".next",
  prevArrow:".prev",
  centerPadding:"0px",
  centerMode:true,
  speed:500,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
  ]
});

