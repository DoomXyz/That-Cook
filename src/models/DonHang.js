'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class DonHang extends Model {
        static associate(models) {
            DonHang.belongsTo(models.TaiKhoan, {
                foreignKey: 'MaKH',
                as: 'KhachHang'
            });
            DonHang.belongsTo(models.LoaiThanhToan, {
                foreignKey: 'MaLoaiTT',
                as: 'LoaiThanhToan'
            });
            DonHang.hasMany(models.ChiTietDonHang, {
                foreignKey: 'MADH',
                as: 'ChiTietDonHangs'
            });
        }
    }

    DonHang.init({
        MADH: {
            type: DataTypes.CHAR(10),
            primaryKey: true,
            allowNull: false
        },
        MaKH: {
            type: DataTypes.CHAR(10),
            allowNull: false
        },
        NgayLapDonHang: {
            type: DataTypes.DATE,
            allowNull: false
        },
        TenKhachHang: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        SDTNhanHang: {
            type: DataTypes.STRING(11),
            allowNull: false
        },
        DiaChiNhanHang: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        LoiNhan: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        TongTien: {
            type: DataTypes.DECIMAL(12, 2),
            allowNull: false
        },
        TrangThai: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        MaLoaiTT: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        DaThanhToan: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        MaVanChuyen: {
            type: DataTypes.STRING(50),
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'DonHang',
        tableName: 'DonHang'
    });

    return DonHang;
};