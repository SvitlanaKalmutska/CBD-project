$(function () {
  $(".slider").slick({
    arrows: true,
    slidesToShow: 3,
    appendArrows: $(`.shop__arrows`),
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="images/right-green.png" alt="next arrow" /></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="images/left-green.png" alt="prev arrow" /></button>',
  });

  $(".gallary-slider").slick({
    arrows: true,
    slidesToShow: 1,
    nextArrow:
      '<button class="slick-arrow slick-next"><img src="images/right-white.png" alt="next arrow" /></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><img src="images/left-white.png" alt="prev arrow" /></button>',
  });

  $(".menu__btn").click(function (event) {
    $(".menu__btn,.menu__list").toggleClass("active");
  });
});
