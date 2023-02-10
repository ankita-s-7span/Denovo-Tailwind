$(document).ready(function () {
  $(".denovo_slider").slick({
    centerMode: true,
    centerPadding: "300px",
    slidesToShow: 1,
    dots:true,
    arrows:false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: false,
          centerMode: true,
          centerPadding: "180px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
          centerMode: true,
          centerPadding: "140px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          dots: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 399,
        settings: {
          arrows: false,
          dots: false,
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
