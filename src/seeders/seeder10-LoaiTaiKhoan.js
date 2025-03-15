'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('LoaiTaiKhoan', [
            {
                TenLoaiTK: 'Admin',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TenLoaiTK: 'Khách hàng',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                TenLoaiTK: 'Chủ cửa hàng',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('LoaiTaiKhoan', null, {});
    }
};