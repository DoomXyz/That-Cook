let listImg = document.querySelector(".list-img");
let images = document.querySelectorAll(".list-img img");
let btnleft = document.querySelector(".btn-left");
let btnright = document.querySelector(".btn-right");
// --------------------------SLIDE-SHOW-------------------------
let i = 0;
let changeslide = () => {
  if (i == images.length - 1) {
    i = 0;
    listImg.style.transform = `translateX(${1500 * -1 * i}px)`;
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".index-item-" + i).classList.add("active");
  } else {
    i++;
    listImg.style.transform = `translateX(${1500 * -1 * i}px)`;
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".index-item-" + i).classList.add("active");
  }
};
let autochangeslide = setInterval(changeslide, 4000);
btnright.addEventListener("click", () => {
  clearInterval(autochangeslide);
  changeslide();
  autochangeslide = setInterval(changeslide, 4000);
});
btnleft.addEventListener("click", () => {
  clearInterval(autochangeslide);
  if (i == 0) {
    i = images.length - 1;
    listImg.style.transform = `translateX(${1500 * -1 * i}px)`;
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".index-item-" + i).classList.add("active");
  } else {
    i--;
    listImg.style.transform = `translateX(${1500 * -1 * i}px)`;
    document.querySelector(".active").classList.remove("active");
    document.querySelector(".index-item-" + i).classList.add("active");
  }
  autochangeslide = setInterval(changeslide, 4000);
});

// --------------------------MENU-CARTEGORY-------------------------
let itemsliderbar = document.querySelectorAll(".cartegory-left-li");
itemsliderbar.forEach(function (menu, index) {
  menu.addEventListener("click", function () {
    event.preventDefault();
    itemsliderbar.forEach(function (item) {
      if (item != menu) {
        item.classList.remove("block");
      }
    });
    menu.classList.toggle("block");
  });
});

//--------------------------SUB-FILTER---------------------------//
let itemsubfilter = document.querySelectorAll(".sub-filter");
itemsubfilter.forEach(function (menu, index) {
  // Add event listener to the button inside .sub-filter
  menu.parentElement
    .querySelector("button")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default button behavior
      // Close all other sub-filter menus
      itemsubfilter.forEach(function (item) {
        if (item !== menu) {
          item.classList.remove("block");
        }
      });
      // Toggle the 'block' class on the clicked sub-filter
      menu.classList.toggle("block");
    });
});

// --------------------------AD-SLIDE-SHOW-------------------------
let autoSlideFooter = document.querySelector(".auto-slide-footer");
let slides = autoSlideFooter.querySelectorAll(".slide");
let currentSlide = 0;

setInterval(() => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    if (index === currentSlide) {
      slide.classList.add("active");
    }
  });
}, 3000);
