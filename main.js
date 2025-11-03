// ==================== AOS INIT ====================
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    offset: 100,
    duration: 1000,
    once: true,
    disable: function () {
      return window.innerWidth <= 992; // disable on smaller screens
    }
  });
});

// ==================== SWIPER INIT ====================
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: "#custom-next",
    prevEl: "#custom-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
  },
});

const swiperr = new Swiper(".mySwiperr", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: "#custom-nextt",
    prevEl: "#custom-prevv",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
    1200: { slidesPerView: 4 },
  },
});

// ==================== ISOTOPE INIT ====================
const $grid = $(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
});

$(".filter-button-group").on("click", "button", function () {
  const filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});

// ==================== NAVBAR OVERLAY & COLLAPSE ====================
const navbar = document.querySelector(".navbar");
const toggler = document.querySelector(".navbar-toggler");
const collapse = document.querySelector("#navbarNav");
const closeBtn = document.querySelector("#closeMenu");

toggler.addEventListener("click", () => {
  navbar.classList.toggle("show-overlay");
});

closeBtn.addEventListener("click", () => {
  const bsCollapse = bootstrap.Collapse.getInstance(collapse);
  bsCollapse.hide();
  navbar.classList.remove("show-overlay");
});

document.querySelectorAll("#navbarNav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show-overlay");
    const bsCollapse = bootstrap.Collapse.getInstance(collapse);
    bsCollapse.hide();
  });
});

// ==================== NAVBAR SCROLL EFFECT ====================
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
