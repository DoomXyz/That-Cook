'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('HinhAnhSanPham', {
            MAHINHANH: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            MASP: {
                type: Sequelize.CHAR(10),
                allowNull: false,
                references: {
                    model: 'SanPham',
                    key: 'MASP'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            HinhAnh: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('HinhAnhSanPham');
    }
};