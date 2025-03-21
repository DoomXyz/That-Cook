// Ẩn phần tử .delivery-content-left-input-bottom ban đầu
document.querySelector('.delivery-content-left-input-bottom').style.display = 'none';

// Lấy tất cả các radio button trong nhóm loaikhach
const radioButtons = document.querySelectorAll('input[name="loaikhach"]');

// Thêm sự kiện change cho từng radio button
radioButtons.forEach(radio => {
  radio.addEventListener('change', function() {
    const inputBottom = document.querySelector('.delivery-content-left-input-bottom');
    
    // Nếu radio button registerr được chọn, hiển thị phần tử
    if (this.id === 'registerr' && this.checked) {
      inputBottom.style.display = 'flex'; // Sử dụng 'flex' để khớp với lớp row
    } else {
      inputBottom.style.display = 'none'; // Ẩn nếu radio khác được chọn
    }
  });
});