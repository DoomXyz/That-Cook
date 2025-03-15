'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('LoaiThuCung', [
            { MALOAITC: 1, TenLoaiThuCung: 'Chó', createdAt: new Date(), updatedAt: new Date() },
            { MALOAITC: 2, TenLoaiThuCung: 'Mèo', createdAt: new Date(), updatedAt: new Date() }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('LoaiThuCung', null, {});
    }
};