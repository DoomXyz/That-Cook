'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('DonHang', {
            MADH: {
                type: Sequelize.CHAR(10),
                primaryKey: true,
                allowNull: false
            },
            MaKH: {
                type: Sequelize.CHAR(10),
                allowNull: false,
                references: { model: 'TaiKhoan', key: 'MATK' },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT'
            },
            NgayLapDonHang: {
                type: Sequelize.DATE,
                allowNull: false
            },
            TenKhachHang: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            SDTNhanHang: {
                type: Sequelize.STRING(11),
                allowNull: false
            },
            DiaChiNhanHang: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            LoiNhan: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            TongTien: {
                type: Sequelize.DECIMAL(12, 2),
                allowNull: false
            },
            TrangThai: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0 // 0 = Chờ xử lý
            },
            MaLoaiTT: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: 'LoaiThanhToan', key: 'MALOAITT' },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT'
            },
            DaThanhToan: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            MaVanChuyen: {
                type: Sequelize.STRING(50),
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
        }, { engine: 'InnoDB' });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('DonHang');
    }
};