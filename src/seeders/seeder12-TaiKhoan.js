'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TaiKhoan', [
      // 1. Tài khoản Admin
      {
        MATK: 'TKAD000001',
        Email: 'luckydoom000@gmail.com',
        Password: 'admin',
        HoTen: 'Quản Trị Viên',
        GioiTinh: 1,
        SDT: '0909123456',
        DiaChi: '123 Đường Admin, Phường Bến Nghé, Quận 1, TP.HCM',
        MaLoaiTK: 1, // Admin
        Khoa: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // 2. Tài khoản Chủ cửa hàng
      {
        MATK: 'TKCH000001',
        Email: 'khangchinh28803@gmail.com',
        Password: '123456',
        HoTen: 'Nguyễn Văn Shop',
        GioiTinh: 1,
        SDT: '0918234567',
        DiaChi: '456 Đường Lê Lợi, Phường 2, Quận 3, TP.HCM',
        MaLoaiTK: 2, // Chủ cửa hàng
        Khoa: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // 3-12. 10 tài khoản Khách hàng
      {
        MATK: 'TKKH000001',
        Email: 'luckydoom00@gmail.com',
        Password: '123',
        HoTen: 'Khách hàng A',
        GioiTinh: 0,
        SDT: '0927345678',
        DiaChi: '789 Đường Nguyễn Trãi, Phường 5, Quận 5, TP.HCM',
        MaLoaiTK: 3, // Khách hàng
        Khoa: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MATK: 'TKKH000002',
        Email: 'khachhang2@gmail.com',
        Password: '123',
        HoTen: 'Khách hàng B',
        GioiTinh: 1,
        SDT: '0936456789',
        DiaChi: '101 Đường Võ Văn Tần, Phường 6, Quận 3, TP.HCM',
        MaLoaiTK: 3,
        Khoa: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MATK: 'TKKH000003',
        Email: 'khachhang3@gmail.com',
        Password: '123',
        HoTen: 'Khách hàng C',
        GioiTinh: 0,
        SDT: '0945567890',
        DiaChi: '202 Đường Cách Mạng Tháng Tám, Phường 10, Quận 3, TP.HCM',
        MaLoaiTK: 3,
        Khoa: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MATK: 'TKKH000004',
        Email: 'khachhang4@gmail.com',
        Password: '123',
        HoTen: 'Khách hàng D',
        GioiTinh: 1,
        SDT: '0954678901',
        DiaChi: '303 Đường Trần Hưng Đạo, Phường Cô Giang, Quận 1, TP.HCM',
        MaLoaiTK: 3,
        Khoa: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MATK: 'TKKH000005',
        Email: 'khachhang5@gmail.com',
        Password: '123',
        HoTen: 'Khách hàng E',
        GioiTinh: 0,
        SDT: '0963789012',
        DiaChi: '404 Đường Lý Thường Kiệt, Phường 7, Quận 10, TP.HCM',
        MaLoaiTK: 3,
        Khoa: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MATK: 'TKKH000006',
        Email: 'khachhang6@gmail.com',
        Password: '123',
        HoTen: 'Khách hàng F',
        GioiTinh: 1,
        SDT: '0972890123',
        DiaChi: '505 Đường Hùng Vương, Phường 9, Quận 5, TP.HCM',
        MaLoaiTK: 3,
        Khoa: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MATK: 'TKKH000007',
        Email: 'khachhang7@gmail.com',
        Password: '123',
        HoTen: 'Khách hàng G',
        GioiTinh: 0,
        SDT: '0981901234',
        DiaChi: '606 Đường Nguyễn Văn Cừ, Phường An Hòa, Quận Ninh Kiều, TP. Cần Thơ',
        MaLoaiTK: 3,
        Khoa: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MATK: 'TKKH000008',
        Email: 'khachhang8@gmail.com',
        Password: '123',
        HoTen: 'Khách hàng H',
        GioiTinh: 1,
        SDT: '0990012345',
        DiaChi: '707 Đường Ba Tháng Hai, Phường Hưng Lợi, Quận Ninh Kiều, TP. Cần Thơ',
        MaLoaiTK: 3,
        Khoa: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MATK: 'TKKH000009',
        Email: 'khachhang9@gmail.com',
        Password: '123',
        HoTen: 'Khách hàng I',
        GioiTinh: 0,
        SDT: '0901123456',
        DiaChi: '808 Đường Lê Duẩn, Phường Long Bình, Quận 9, TP.HCM',
        MaLoaiTK: 3,
        Khoa: true, // Khóa tài khoản
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        MATK: 'TKKH000010',
        Email: 'khachhang10@gmail.com',
        Password: '123',
        HoTen: 'Khách hàng K',
        GioiTinh: 1,
        SDT: '0912234567',
        DiaChi: '909 Đường Trần Phú, Phường Lộc Thọ, TP. Nha Trang, Khánh Hòa',
        MaLoaiTK: 3,
        Khoa: true, // Khóa tài khoản
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TaiKhoan', null, {});
  }
};