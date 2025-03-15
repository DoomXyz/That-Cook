'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class SanPhamThuCung extends Model {
        static associate(models) {
            // Không cần định nghĩa quan hệ ở đây vì đây là bảng trung gian
        }
    }

    SanPhamThuCung.init({
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        MASP: {
            type: DataTypes.CHAR(10),
            allowNull: false
        },
        MALOAITC: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'SanPhamThuCung',
        tableName: 'SanPhamThuCung'
    });

    return SanPhamThuCung;
};