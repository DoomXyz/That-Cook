'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('SanPhamThuCung', {
            ID: {
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
            MALOAITC: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'LoaiThuCung',
                    key: 'MALOAITC'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
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
        await queryInterface.dropTable('SanPhamThuCung');
    }
};