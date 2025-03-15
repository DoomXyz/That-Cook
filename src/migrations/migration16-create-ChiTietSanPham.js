'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('ChiTietSanPham', {
            MACTSP: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            MASP: {
                type: Sequelize.CHAR(10),
                allowNull: true,
                references: {
                    model: 'SanPham',
                    key: 'MASP'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            },
            ThuocTinh: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            GiaThem: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: true
            },
            SoLuongTon: {
                type: Sequelize.INTEGER,
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

    down: async (queryInterface) => {
        await queryInterface.dropTable('ChiTietSanPham');
    }
};