$(function() {
  console.log('Hello Bootstrap5');
});
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.5,
  spaceBetween: 0,
  containerModifierClass: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 4.5,
    },
    768: {
      slidesPerView: 8,
    },
    // 1024: {
    //   slidesPerView: 5,
    // },
  },
});

const swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});