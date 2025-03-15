'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ChiTietDonHang extends Model {
        static associate(models) {
            ChiTietDonHang.belongsTo(models.DonHang, {
                foreignKey: 'MADH',
                as: 'DonHang'
            });
            ChiTietDonHang.belongsTo(models.SanPham, {
                foreignKey: 'MASP',
                as: 'SanPham'
            });
        }
    }

    ChiTietDonHang.init({
        MADH: {
            type: DataTypes.CHAR(10),
            primaryKey: true,
            allowNull: false
        },
        MASP: {
            type: DataTypes.CHAR(10),
            primaryKey: true,
            allowNull: false
        },
        SoLuong: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        DonGia: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'ChiTietDonHang',
        tableName: 'ChiTietDonHang'
    });

    return ChiTietDonHang;
};