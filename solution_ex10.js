
/*
1. Bảng so sánh Trade-off

Tiêu chuẩn              Monolithic Switch-Case       Modular Function
Độ dài switch           Dài, khó đọc                  Ngắn, dễ đọc
Bảo trì                 Khó sửa                       Dễ sửa
Kiểm thử độc lập        Khó kiểm thử                  Dễ kiểm thử từng hàm
Tái sử dụng             Thấp                          Cao
Mở rộng 20 chức năng    Phức tạp                      Dễ quản lý
*/

/*
2. Nguyên lý SRP
Mỗi hàm chỉ nên đảm nhận một nhiệm vụ riêng.
Ví dụ: thêm thuê bao, hiển thị danh sách,
cập nhật gói cước và xóa thuê bao.
*/

// Mảng lưu thuê bao
let subscriptions = [];

// Hàm thêm thuê bao
function addSubscription() {
  console.log('Thêm thuê bao mới');
}

// Hàm hiển thị danh sách
function listSubscriptions() {
  console.log('Hiển thị danh sách thuê bao');
}

// Hàm cập nhật thuê bao
function updateSubscription() {
  console.log('Cập nhật gói cước');
}

// Hàm xóa thuê bao
function deleteSubscription() {
  console.log('Hủy thuê bao');
}

// Menu chính
let menuChoice;

do {
  menuChoice = prompt(
    '===== QUẢN LÝ THUÊ BAO =====\n' +
    '1. Thêm thuê bao\n' +
    '2. Xem danh sách\n' +
    '3. Cập nhật gói cước\n' +
    '4. Hủy thuê bao\n' +
    '5. Thoát\n' +
    'Nhập lựa chọn:'
  );

  if (menuChoice === null) {
    break;
  }

  switch (menuChoice.trim()) {
    case '1':
      addSubscription();
      break;

    case '2':
      listSubscriptions();
      break;

    case '3':
      updateSubscription();
      break;

    case '4':
      deleteSubscription();
      break;

    case '5':
      console.log('Thoát chương trình');
      break;

    default:
      console.log('Lựa chọn không hợp lệ');
  }
} while (menuChoice.trim() !== '5');
