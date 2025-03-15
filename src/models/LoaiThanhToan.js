'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class LoaiThanhToan extends Model {
        static associate(models) {
            LoaiThanhToan.hasMany(models.DonHang, {
                foreignKey: 'MaLoaiTT',
                as: 'DonHangs'
            });
        }
    }

    LoaiThanhToan.init({
        MALOAITT: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        TenLoaiTT: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'LoaiThanhToan',
        tableName: 'LoaiThanhToan'
    });

    return LoaiThanhToan;
};