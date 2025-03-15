'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('TaiKhoan', {
            MATK: {
                type: Sequelize.CHAR(10),
                primaryKey: true,
                allowNull: false,
            },
            Email: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true,
            },
            Password: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            HoTen: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            GioiTinh: {
                type: Sequelize.TINYINT,
                allowNull: false,
            },
            SDT: {
                type: Sequelize.CHAR(11),
                allowNull: false,
            },
            DiaChi: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            MaLoaiTK: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'LoaiTaiKhoan', // Tên bảng tham chiếu
                    key: 'MALOAITK'        // Khóa chính của LoaiTaiKhoan
                },
                onUpdate: 'CASCADE',       // Cập nhật khi MALOAITK thay đổi
                onDelete: 'RESTRICT'       // Không cho xóa LoaiTaiKhoan nếu còn TaiKhoan
            },
            Khoa: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('TaiKhoan');
    }
};