'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('LoaiSanPham', [
            { MALOAISP: 1, TenLoaiSP: 'Thức ăn', createdAt: new Date(), updatedAt: new Date() },
            { MALOAISP: 2, TenLoaiSP: 'Phụ kiện', createdAt: new Date(), updatedAt: new Date() }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('LoaiSanPham', null, {});
    }
};