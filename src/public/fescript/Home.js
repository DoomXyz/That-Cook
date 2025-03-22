// --------------------------SLIDE-SHOW-------------------------
let listImg = document.querySelector(".list-img");
let images = document.querySelectorAll(".list-img img");
let btnleft = document.querySelector(".btn-left");
let btnright = document.querySelector(".btn-right");

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

btnright.addEventListener("click", (event) => {
  event.stopPropagation(); // Ngăn sự kiện click lan truyền lên document
  clearInterval(autochangeslide);
  changeslide();
  autochangeslide = setInterval(changeslide, 4000);
});

btnleft.addEventListener("click", (event) => {
  event.stopPropagation(); // Ngăn sự kiện click lan truyền lên document
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

// --------------------------USER PASSWORD TOGGLE-------------------------
const togglePassword = document.querySelector(".toggle-password");
const passwordInput = document.querySelector("#password");
const eyeIcon = togglePassword.querySelector("ion-icon");

togglePassword.addEventListener("click", (event) => {
  event.stopPropagation(); // Ngăn sự kiện click lan truyền lên document
  if (passwordInput.type === "password") {
    passwordInput.type = "text"; // Hiển thị mật khẩu
    eyeIcon.setAttribute("name", "eye-off"); // Chuyển sang biểu tượng mắt đóng
  } else {
    passwordInput.type = "password"; // Ẩn mật khẩu
    eyeIcon.setAttribute("name", "eye"); // Chuyển lại biểu tượng mắt mở
  }
});

// --------------------------USER IMAGE UPLOAD-------------------------
const imageUpload = document.getElementById("image-upload");
const userImg = document.querySelector(".user-img img");

imageUpload.addEventListener("change", (event) => {
  const file = event.target.files[0]; // Lấy file đầu tiên từ input
  if (file) {
    const reader = new FileReader(); // Sử dụng FileReader để đọc file hình ảnh
    reader.onload = (e) => {
      userImg.src = e.target.result; // Cập nhật src của hình ảnh trong .user-img
    };
    reader.readAsDataURL(file); // Chuyển file thành URL dữ liệu để hiển thị
  }
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
  menu.parentElement
    .querySelector("button")
    .addEventListener("click", function (event) {
      event.preventDefault();
      itemsubfilter.forEach(function (item) {
        if (item !== menu) {
          item.classList.remove("block");
        }
      });
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

// --------------------------USER INFO FORM-------------------------
const userIcon = document.getElementById("user-icon");
const userInfoForm = document.getElementById("user-info-form");
const closeForm = document.getElementById("close-form");

// Biến trạng thái để kiểm soát form
let isFormOpen = false;

// Hiện form khi nhấn vào icon "person"
userIcon.addEventListener("click", (event) => {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
  event.stopPropagation(); // Ngăn sự kiện click lan truyền lên document
  isFormOpen = !isFormOpen; // Đảo trạng thái form
  if (isFormOpen) {
    userInfoForm.style.display = "block"; // Hiển thị form
    userInfoForm.style.transform = "translateX(0)"; // Trượt form vào
  } else {
    userInfoForm.style.transform = "translateX(100%)"; // Trượt form ra
    setTimeout(() => {
      userInfoForm.style.display = "none"; // Ẩn form sau khi trượt xong
    }, 300); // Thời gian chờ bằng thời gian transition (0.3s)
  }
});

// Ẩn form khi nhấn vào nút "X"
closeForm.addEventListener("click", (event) => {
  event.stopPropagation(); // Ngăn sự kiện click lan truyền lên document
  isFormOpen = false;
  userInfoForm.style.transform = "translateX(100%)"; // Trượt form ra
  setTimeout(() => {
    userInfoForm.style.display = "none"; // Ẩn form sau khi trượt xong
  }, 300); // Thời gian chờ bằng thời gian transition (0.3s)
});

// Ngăn chặn sự kiện transitionend gây ra vấn đề
userInfoForm.addEventListener("transitionend", (event) => {
  event.stopPropagation(); // Ngăn sự kiện transitionend lan truyền
});
