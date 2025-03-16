"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("SanPham", [
      {
        MASP: "SP00000001",
        TenSanPham: "Thức ăn khô Royal Canin Mini Adult",
        SoLuongTon: 120,
        KhuyenMai: 8.0,
        GiaBan: 650000.0,
        TinhTrang: true,
        MoTa: "Thức ăn khô dành cho chó trưởng thành giống nhỏ, hỗ trợ tiêu hóa và sức khỏe răng miệng.",
        HinhAnh: "images/productha/hinhtest.jpg", // Thêm ảnh
        MaLoaiSP: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        MASP: "SP00000002",
        TenSanPham: "Thức ăn ướt Whiskas Pouch",
        SoLuongTon: 500,
        KhuyenMai: null,
        GiaBan: 22000.0,
        TinhTrang: true,
        MoTa: "Thức ăn ướt dạng pate, bổ sung vitamin và khoáng chất cho mèo mọi lứa tuổi.",
        HinhAnh: "anh1SP00000002.jpg", // Thêm ảnh
        MaLoaiSP: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        MASP: "SP00000003",
        TenSanPham: "Snack Me-O Catnip",
        SoLuongTon: 300,
        KhuyenMai: 10.0,
        GiaBan: 45000.0,
        TinhTrang: true,
        MoTa: "Snack vị catnip giúp mèo thư giãn và tăng cường tương tác.",
        HinhAnh: "anh1SP00000003.jpg", // Thêm ảnh
        MaLoaiSP: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        MASP: "SP00000004",
        TenSanPham: "Thức ăn khô Cat’s Eye Adult",
        SoLuongTon: 80,
        KhuyenMai: null,
        GiaBan: 280000.0,
        TinhTrang: true,
        MoTa: "Thức ăn khô cho mèo trưởng thành, hỗ trợ sức khỏe lông và hệ miễn dịch.",
        HinhAnh: "anh1SP00000004.jpg", // Thêm ảnh
        MaLoaiSP: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        MASP: "SP00000005",
        TenSanPham: "Thức ăn khô Pedigree Adult Beef",
        SoLuongTon: 150,
        KhuyenMai: 5.0,
        GiaBan: 480000.0,
        TinhTrang: true,
        MoTa: "Thức ăn khô vị bò cho chó trưởng thành, tăng cường cơ bắp và xương chắc khỏe.",
        HinhAnh: "anh1SP00000005.jpg", // Thêm ảnh
        MaLoaiSP: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        MASP: "SP00000006",
        TenSanPham: "Vòng cổ da PetHome",
        SoLuongTon: 100,
        KhuyenMai: null,
        GiaBan: 95000.0,
        TinhTrang: true,
        MoTa: "Vòng cổ da cao cấp, bền đẹp, phù hợp cho cả chó và mèo.",
        HinhAnh: "anh1SP00000006.jpg", // Thêm ảnh
        MaLoaiSP: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        MASP: "SP00000007",
        TenSanPham: "Dây dắt nylon 1.5m",
        SoLuongTon: 200,
        KhuyenMai: 10.0,
        GiaBan: 75000.0,
        TinhTrang: true,
        MoTa: "Dây dắt nylon chắc chắn, dài 1.5m, phù hợp dắt chó đi dạo.",
        HinhAnh: "anh1SP00000007.jpg", // Thêm ảnh
        MaLoaiSP: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        MASP: "SP00000008",
        TenSanPham: "Bát ăn đôi inox",
        SoLuongTon: 180,
        KhuyenMai: null,
        GiaBan: 85000.0,
        TinhTrang: true,
        MoTa: "Bát đôi inox không gỉ, tiện lợi cho cả thức ăn và nước.",
        HinhAnh: "anh1SP00000008.jpg", // Thêm ảnh
        MaLoaiSP: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        MASP: "SP00000009",
        TenSanPham: "Nhà cây Cat Tree 3 tầng",
        SoLuongTon: 15,
        KhuyenMai: 15.0,
        GiaBan: 1250000.0,
        TinhTrang: true,
        MoTa: "Nhà cây 3 tầng cho mèo, có trụ cào móng và chỗ nghỉ ngơi.",
        HinhAnh: "anh1SP00000009.jpg", // Thêm ảnh
        MaLoaiSP: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        MASP: "SP00000010",
        TenSanPham: "Lược chải lông 2 mặt",
        SoLuongTon: 250,
        KhuyenMai: 5.0,
        GiaBan: 65000.0,
        TinhTrang: true,
        MoTa: "Lược 2 mặt tiện dụng, giúp loại bỏ lông rụng và làm mượt lông.",
        HinhAnh: "anh1SP00000010.jpg", // Thêm ảnh
        MaLoaiSP: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("SanPham", null, {});
  },
};
