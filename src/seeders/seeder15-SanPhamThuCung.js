'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('SanPhamThuCung', [
            // SP00000001 - Thức ăn khô Royal Canin Mini Adult (Chó)
            { ID: 1, MASP: 'SP00000001', MALOAITC: 1, createdAt: new Date(), updatedAt: new Date() },
            // SP00000002 - Thức ăn ướt Whiskas Pouch Cá Ngừ (Mèo)
            { ID: 2, MASP: 'SP00000002', MALOAITC: 2, createdAt: new Date(), updatedAt: new Date() },
            // SP00000003 - Snack Me-O Catnip (Mèo)
            { ID: 3, MASP: 'SP00000003', MALOAITC: 2, createdAt: new Date(), updatedAt: new Date() },
            // SP00000004 - Thức ăn khô Cat’s Eye Adult (Mèo)
            { ID: 4, MASP: 'SP00000004', MALOAITC: 2, createdAt: new Date(), updatedAt: new Date() },
            // SP00000005 - Thức ăn khô Pedigree Adult Beef (Chó)
            { ID: 5, MASP: 'SP00000005', MALOAITC: 1, createdAt: new Date(), updatedAt: new Date() },
            // SP00000006 - Vòng cổ da PetHome (Chó và Mèo)
            { ID: 6, MASP: 'SP00000006', MALOAITC: 1, createdAt: new Date(), updatedAt: new Date() },
            { ID: 7, MASP: 'SP00000006', MALOAITC: 2, createdAt: new Date(), updatedAt: new Date() },
            // SP00000007 - Dây dắt nylon 1.5m (Chó)
            { ID: 8, MASP: 'SP00000007', MALOAITC: 1, createdAt: new Date(), updatedAt: new Date() },
            // SP00000008 - Bát ăn đôi inox (Chó và Mèo)
            { ID: 9, MASP: 'SP00000008', MALOAITC: 1, createdAt: new Date(), updatedAt: new Date() },
            { ID: 10, MASP: 'SP00000008', MALOAITC: 2, createdAt: new Date(), updatedAt: new Date() },
            // SP00000009 - Nhà cây Cat Tree 3 tầng (Mèo)
            { ID: 11, MASP: 'SP00000009', MALOAITC: 2, createdAt: new Date(), updatedAt: new Date() },
            // SP00000010 - Lược chải lông 2 mặt (Chó và Mèo)
            { ID: 12, MASP: 'SP00000010', MALOAITC: 1, createdAt: new Date(), updatedAt: new Date() },
            { ID: 13, MASP: 'SP00000010', MALOAITC: 2, createdAt: new Date(), updatedAt: new Date() }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('SanPhamThuCung', null, {});
    }
};