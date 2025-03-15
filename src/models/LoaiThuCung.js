'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class LoaiThuCung extends Model {
        static associate(models) {
            LoaiThuCung.belongsToMany(models.SanPham, {
                through: 'SanPhamThuCung',
                foreignKey: 'MALOAITC',
                otherKey: 'MASP',
                as: 'SanPhams'
            });
        }
    }

    LoaiThuCung.init({
        MALOAITC: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        TenLoaiThuCung: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'LoaiThuCung',
        tableName: 'LoaiThuCung'
    });

    return LoaiThuCung;
};