'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('SanPham', [
            // 1. Thức ăn khô cho chó - Royal Canin Mini Adult (có chi tiết)
            {
                MASP: 'SP00000001',
                TenSanPham: 'Thức ăn khô Royal Canin Mini Adult',
                SoLuongTon: 120,
                KhuyenMai: 8.00,
                GiaBan: 650000.00,
                TinhTrang: true,
                MoTa: 'Thức ăn khô dành cho chó trưởng thành giống nhỏ, hỗ trợ tiêu hóa và sức khỏe răng miệng.',
                MaLoaiSP: 1, // Thức ăn
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // 2. Thức ăn ướt cho mèo - Whiskas Pouch Cá Ngừ (có chi tiết)
            {
                MASP: 'SP00000002',
                TenSanPham: 'Thức ăn ướt Whiskas Pouch',
                SoLuongTon: 500,
                KhuyenMai: null,
                GiaBan: 22000.00,
                TinhTrang: true,
                MoTa: 'Thức ăn ướt dạng pate, bổ sung vitamin và khoáng chất cho mèo mọi lứa tuổi.',
                MaLoaiSP: 1, // Thức ăn
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // 3. Snack cho mèo - Catnip Snack Me-O (không có chi tiết)
            {
                MASP: 'SP00000003',
                TenSanPham: 'Snack Me-O Catnip',
                SoLuongTon: 300,
                KhuyenMai: 10.00,
                GiaBan: 45000.00,
                TinhTrang: true,
                MoTa: 'Snack vị catnip giúp mèo thư giãn và tăng cường tương tác.',
                MaLoaiSP: 1, // Thức ăn
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // 4. Thức ăn khô cho mèo - Cat’s Eye Adult (có chi tiết - hương vị)
            {
                MASP: 'SP00000004',
                TenSanPham: 'Thức ăn khô Cat’s Eye Adult',
                SoLuongTon: 80,
                KhuyenMai: null,
                GiaBan: 280000.00,
                TinhTrang: true,
                MoTa: 'Thức ăn khô cho mèo trưởng thành, hỗ trợ sức khỏe lông và hệ miễn dịch.',
                MaLoaiSP: 1, // Thức ăn
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // 5. Thức ăn hạt cho chó - Pedigree Adult Beef (không có chi tiết)
            {
                MASP: 'SP00000005',
                TenSanPham: 'Thức ăn khô Pedigree Adult Beef',
                SoLuongTon: 150,
                KhuyenMai: 5.00,
                GiaBan: 480000.00,
                TinhTrang: true,
                MoTa: 'Thức ăn khô vị bò cho chó trưởng thành, tăng cường cơ bắp và xương chắc khỏe.',
                MaLoaiSP: 1, // Thức ăn
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // 6. Vòng cổ cho chó/mèo - Vòng cổ da PetHome (không có chi tiết)
            {
                MASP: 'SP00000006',
                TenSanPham: 'Vòng cổ da PetHome',
                SoLuongTon: 100,
                KhuyenMai: null,
                GiaBan: 95000.00,
                TinhTrang: true,
                MoTa: 'Vòng cổ da cao cấp, bền đẹp, phù hợp cho cả chó và mèo.',
                MaLoaiSP: 2, // Phụ kiện
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // 7. Dây dắt cho chó - Dây dắt nylon 1.5m (không có chi tiết)
            {
                MASP: 'SP00000007',
                TenSanPham: 'Dây dắt nylon 1.5m',
                SoLuongTon: 200,
                KhuyenMai: 10.00,
                GiaBan: 75000.00,
                TinhTrang: true,
                MoTa: 'Dây dắt nylon chắc chắn, dài 1.5m, phù hợp dắt chó đi dạo.',
                MaLoaiSP: 2, // Phụ kiện
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // 8. Bát ăn đôi inox cho chó/mèo (có chi tiết - màu sắc)
            {
                MASP: 'SP00000008',
                TenSanPham: 'Bát ăn đôi inox',
                SoLuongTon: 180,
                KhuyenMai: null,
                GiaBan: 85000.00,
                TinhTrang: true,
                MoTa: 'Bát đôi inox không gỉ, tiện lợi cho cả thức ăn và nước.',
                MaLoaiSP: 2, // Phụ kiện
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // 9. Nhà cây cho mèo - Cat Tree 3 tầng (không có chi tiết)
            {
                MASP: 'SP00000009',
                TenSanPham: 'Nhà cây Cat Tree 3 tầng',
                SoLuongTon: 15,
                KhuyenMai: 15.00,
                GiaBan: 1250000.00,
                TinhTrang: true,
                MoTa: 'Nhà cây 3 tầng cho mèo, có trụ cào móng và chỗ nghỉ ngơi.',
                MaLoaiSP: 2, // Phụ kiện
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // 10. Lược chải lông cho chó/mèo (có chi tiết - màu sắc)
            {
                MASP: 'SP00000010',
                TenSanPham: 'Lược chải lông 2 mặt',
                SoLuongTon: 250,
                KhuyenMai: 5.00,
                GiaBan: 65000.00,
                TinhTrang: true,
                MoTa: 'Lược 2 mặt tiện dụng, giúp loại bỏ lông rụng và làm mượt lông.',
                MaLoaiSP: 2, // Phụ kiện
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('SanPham', null, {});
    }
};