// document.addEventListener("DOMContentLoaded", function () {
//   const burgerMenu = document.querySelector(".burger-menu");
//   const mobileMenu = document.querySelector(".mobile-menu");

//   burgerMenu.addEventListener("click", function () {
//     mobileMenu.classList.toggle("active");
//   });
// });
// $(document).ready(function () {
//   $(".slider1").slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     dots: true,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//     // dotsClass: "w-0.5 h-0.5",
//   });
//   $("#burger-menu-btn").on("click", function () {
//     $("#burger-menu").toggleClass("hidden");
//   });

//   $("#burger-menu_close_btn").on("click", function () {
//     $("#burger-menu").addClass("hidden");
//   });
// });


// document.addEventListener("DOMContentLoaded", function () {
//   const burgerMenu = document.querySelector(".burger-menu");
//   const mobileMenu = document.querySelector(".mobile-menu");

//   burgerMenu.addEventListener("click", function () {
//     mobileMenu.classList.toggle("active");
//   });
// });
// $(document).ready(function () {
//   $(".slider1").slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     dots: true,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 900,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//     // dotsClass: "w-0.5 h-0.5",
//   });
//   $("#burger-menu-btn").on("click", function () {
//     $("#burger-menu").toggleClass("hidden");
//   });

//   $("#burger-menu_close_btn").on("click", function () {
//     $("#burger-menu").addClass("hidden");
//   });

//   // Initialize testimonials slider
//   $('.testimonials-slider').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     prevArrow: '<button type="button" class="slick-prev">Previous</button>',
//     nextArrow: '<button type="button" class="slick-next">Next</button>',
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           centerMode: true,
//           centerPadding: '20px'
//         }
//       }
//     ]
//   });
// });






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

  // Initialize testimonials slider with updated options
  $('.testimonials-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '0',
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
          arrows: true,
          dots: true
        }
      }
    ]
  });

  $('.testimonials-slider .slider-container').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true
        }
      }
    ]
  });

  // Custom arrow functionality
  $('.prev-arrow').click(function(){
    $('.testimonials-slider .slider-container').slick('slickPrev');
  });

  $('.next-arrow').click(function(){
    $('.testimonials-slider .slider-container').slick('slickNext');
  });
});
