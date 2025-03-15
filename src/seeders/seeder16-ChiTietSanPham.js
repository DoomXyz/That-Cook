'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('ChiTietSanPham', [
            // Chi tiết cho SP00000001 (Thức ăn khô Royal Canin Mini Adult - Hương vị)
            {
                MASP: 'SP00000001',
                ThuocTinh: 'Gà',
                GiaThem: 0.00,
                SoLuongTon: 50,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                MASP: 'SP00000001',
                ThuocTinh: 'Bò',
                GiaThem: 0.00,
                SoLuongTon: 70,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // Chi tiết cho SP00000002 (Thức ăn ướt Whiskas Pouch - Hương vị)
            {
                MASP: 'SP00000002',
                ThuocTinh: 'Cá Ngừ',
                GiaThem: 0.00,
                SoLuongTon: 200,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                MASP: 'SP00000002',
                ThuocTinh: 'Gà',
                GiaThem: 0.00,
                SoLuongTon: 300,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // Chi tiết cho SP00000004 (Thức ăn khô Cat’s Eye Adult - Hương vị)
            {
                MASP: 'SP00000004',
                ThuocTinh: 'Cá Hồi',
                GiaThem: 0.00,
                SoLuongTon: 30,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                MASP: 'SP00000004',
                ThuocTinh: 'Thịt Gà',
                GiaThem: 0.00,
                SoLuongTon: 50,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // Chi tiết cho SP00000008 (Bát ăn đôi inox - Màu sắc)
            {
                MASP: 'SP00000008',
                ThuocTinh: 'Xanh Lá',
                GiaThem: 5000.00,
                SoLuongTon: 60,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                MASP: 'SP00000008',
                ThuocTinh: 'Đỏ',
                GiaThem: 5000.00,
                SoLuongTon: 60,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                MASP: 'SP00000008',
                ThuocTinh: 'Xám',
                GiaThem: 5000.00,
                SoLuongTon: 60,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            // Chi tiết cho SP00000010 (Lược chải lông 2 mặt - 4 màu cơ bản)
            {
                MASP: 'SP00000010',
                ThuocTinh: 'Đỏ',
                GiaThem: 3000.00,
                SoLuongTon: 60,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                MASP: 'SP00000010',
                ThuocTinh: 'Xanh Dương',
                GiaThem: 3000.00,
                SoLuongTon: 60,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                MASP: 'SP00000010',
                ThuocTinh: 'Đen',
                GiaThem: 3000.00,
                SoLuongTon: 60,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                MASP: 'SP00000010',
                ThuocTinh: 'Trắng',
                GiaThem: 3000.00,
                SoLuongTon: 70,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('ChiTietSanPham', null, {});
    }
};