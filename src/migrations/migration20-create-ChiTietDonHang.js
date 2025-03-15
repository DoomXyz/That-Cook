'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('ChiTietDonHang', {
            MADH: {
                type: Sequelize.CHAR(10),
                primaryKey: true, // Kết hợp với MASP làm khóa chính
                allowNull: false,
                references: { model: 'DonHang', key: 'MADH' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            MASP: {
                type: Sequelize.CHAR(10),
                primaryKey: true, // Kết hợp với MADH làm khóa chính
                allowNull: false,
                references: { model: 'SanPham', key: 'MASP' },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT'
            },
            SoLuong: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            DonGia: {
                type: Sequelize.DECIMAL(10, 2),
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
        await queryInterface.dropTable('ChiTietDonHang');
    }
};