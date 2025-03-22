const userIcon = document.getElementById("user-icon");
const userInfoForm = document.getElementById("user-info-form");
const closeForm = document.getElementById("close-form");

let isFormOpen = false;

userIcon.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  isFormOpen = !isFormOpen;
  if (isFormOpen) {
    userInfoForm.style.display = "block";
    userInfoForm.style.transform = "translateX(0)";
  } else {
    userInfoForm.style.transform = "translateX(100%)";
    setTimeout(() => {
      userInfoForm.style.display = "none";
    }, 300);
  }
});

closeForm.addEventListener("click", (event) => {
  event.stopPropagation();
  isFormOpen = false;
  userInfoForm.style.transform = "translateX(100%)";
  setTimeout(() => {
    userInfoForm.style.display = "none";
  }, 300);
});

userInfoForm.addEventListener("transitionend", (event) => {
  event.stopPropagation();
});

// --------------------------USER PASSWORD TOGGLE-------------------------
const togglePassword = document.querySelector(".toggle-password");
const passwordInput = document.querySelector("#password");
const eyeIcon = togglePassword.querySelector("ion-icon");

togglePassword.addEventListener("click", (event) => {
  event.stopPropagation();
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.setAttribute("name", "eye-off");
  } else {
    passwordInput.type = "password";
    eyeIcon.setAttribute("name", "eye");
  }
});

// --------------------------USER IMAGE UPLOAD-------------------------
const imageUpload = document.getElementById("image-upload");
const userImg = document.querySelector(".user-img img");

imageUpload.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      userImg.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
