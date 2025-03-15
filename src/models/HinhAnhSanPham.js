'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class HinhAnhSanPham extends Model {
        static associate(models) {
            // Quan hệ n-1 với SanPham
            HinhAnhSanPham.belongsTo(models.SanPham, {
                foreignKey: 'MASP',
                as: 'SanPham' // Tên thay thế để truy cập sản phẩm
            });
        }
    }

    HinhAnhSanPham.init({
        MAHINHANH: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        MASP: {
            type: DataTypes.CHAR(10),
            allowNull: false
        },
        HinhAnh: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'HinhAnhSanPham',
        tableName: 'HinhAnhSanPham'
    });

    return HinhAnhSanPham;
};