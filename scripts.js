document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  burgerMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});
$(document).ready(function () {
  $(".slider1").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // dotsClass: "w-0.5 h-0.5",
  });
  $("#burger-menu-btn").on("click", function () {
    $("#burger-menu").toggleClass("hidden");
  });

  $("#burger-menu_close_btn").on("click", function () {
    $("#burger-menu").addClass("hidden");
  });
});
