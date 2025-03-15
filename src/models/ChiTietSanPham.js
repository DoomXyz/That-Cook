'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ChiTietSanPham extends Model {
        static associate(models) {
            ChiTietSanPham.belongsTo(models.SanPham, {
                foreignKey: 'MASP',
                as: 'SanPham'
            });
        }
    }

    ChiTietSanPham.init({
        MACTSP: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        MASP: {
            type: DataTypes.CHAR(10),
            allowNull: true, // Không bắt buộc, vì không phải sản phẩm nào cũng có chi tiết
            references: {
                model: 'SanPham',
                key: 'MASP'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        ThuocTinh: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        GiaThem: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        SoLuongTon: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'ChiTietSanPham',
        tableName: 'ChiTietSanPham',
        timestamps: true
    });

    return ChiTietSanPham;
};