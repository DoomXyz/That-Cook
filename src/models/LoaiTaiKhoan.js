'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class LoaiTaiKhoan extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            LoaiTaiKhoan.hasMany(models.TaiKhoan, {
                foreignKey: 'MaLoaiTK', // Khóa ngoại trong bảng TaiKhoan
                as: 'TaiKhoans'         // Tên thay thế để truy cập danh sách TaiKhoan
            });
        }
    };
    LoaiTaiKhoan.init({
        MALOAITK: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        TenLoaiTK: {
            type: DataTypes.STRING(50),
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'LoaiTaiKhoan',
        tableName: 'LoaiTaiKhoan',
    });
    return LoaiTaiKhoan;
};