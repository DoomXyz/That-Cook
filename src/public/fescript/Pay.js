document.addEventListener("DOMContentLoaded", function () {
  // Lấy tất cả các radio buttons và input containers
  const radioCredit = document.querySelector("#creditCard");
  const radioBank = document.querySelector("#bankCard");
  const radioCOD = document.querySelector("#cod");
  const inputCredit = document.querySelector("#creditInput");
  const inputBank = document.querySelector("#bankInput");

  // Hàm kiểm tra và hiển thị/ẩn input
  function toggleInputs() {
    if (radioCredit.checked) {
      inputCredit.classList.add("block");
      inputBank.classList.remove("block");
    } else if (radioBank.checked) {
      inputBank.classList.add("block");
      inputCredit.classList.remove("block");
    } else {
      inputCredit.classList.remove("block");
      inputBank.classList.remove("block");
    }
  }

  // Gắn sự kiện change cho các radio buttons
  radioCredit.addEventListener("change", toggleInputs);
  radioBank.addEventListener("change", toggleInputs);
  radioCOD.addEventListener("change", toggleInputs);

  // Gọi hàm lần đầu để kiểm tra trạng thái ban đầu
  toggleInputs();
});
