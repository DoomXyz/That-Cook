'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('LoaiThanhToan', {
            MALOAITT: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            TenLoaiTT: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        }, { engine: 'InnoDB' });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('LoaiThanhToan');
    }
};