const swiper = new Swiper(".slider-search", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".slider-search__arrow.swiper-button-next",
    prevEl: ".slider-search__arrow.swiper-button-prev",
  },
});

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

$(document).ready(function () {
  $(".footer__burger").click(function (event) {
    $(".footer__burger, .footer__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

const tabNavItems = document.querySelectorAll(".tabs-best__button");
const tabItems = document.querySelectorAll(".item-tabs");
document.addEventListener("click", function (e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;
  if (targetElement.closest(".tabs-best__button")) {
    tabNavItems.forEach((tabNavItem, index) => {
      if (tabNavItem.classList.contains("active")) {
        currentActiveIndex = index;
        tabNavItem.classList.remove("active");
      }
      if (tabNavItem === targetElement) {
        newActiveIndex = index;
      }
    });
    targetElement.classList.add("active");
    tabItems[currentActiveIndex].classList.remove("active");
    tabItems[newActiveIndex].classList.add("active");
  }
});
