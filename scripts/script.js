// This section contains the JavaScript code for the hamburger menu.

const hamburgerIcon = document.querySelector(
  ".hamburger-header__hamburger-icon"
);
const closeIcon = document.querySelector(".hamburger-header__close-icon");
const navMenu = document.querySelector(".hamburger-header__nav");
const allNavMenuLinks = document.querySelectorAll(
  ".hamburger-header__nav-link"
);

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.style.display = "none";
  closeIcon.style.display = "block";
  navMenu.classList.replace(
    "hamburger-header__nav",
    "hamburger-header__nav--active"
  );
});

closeIcon.addEventListener("click", () => {
  hamburgerIcon.style.display = "block";
  closeIcon.style.display = "none";
  navMenu.classList.replace(
    "hamburger-header__nav--active",
    "hamburger-header__nav"
  );
});

allNavMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerIcon.style.display = "block";
    closeIcon.style.display = "none";
    navMenu.classList.replace(
      "hamburger-header__nav--active",
      "hamburger-header__nav"
    );
  });
});

// This section contains the JavaScript code for the Swiper slider.

var swiper = new Swiper(".projects__content", {
  spaceBetween: 80,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      autoplay: false,
    },
    1024: {
      slidesPerView: 3,
      autoplay: false,
    },
  },
});

// This section contains the JavaScript code for the Intersection Observer API.

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => {
  observer.observe(element);
});
