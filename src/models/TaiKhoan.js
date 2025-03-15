'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TaiKhoan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TaiKhoan.belongsTo(models.LoaiTaiKhoan, {
        foreignKey: 'MaLoaiTK',    // Khóa ngoại tham chiếu đến MALOAITK
        as: 'LoaiTaiKhoan'         // Tên thay thế để truy cập LoaiTaiKhoan của TaiKhoan này
      });
    }
  };

  TaiKhoan.init({
    MATK: {
      type: DataTypes.CHAR(10),
      primaryKey: true,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    Password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    HoTen: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    GioiTinh: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    SDT: {
      type: DataTypes.CHAR(11),
      allowNull: false,
    },
    DiaChi: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    MaLoaiTK: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Khoa: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'TaiKhoan',    // Tên model
    tableName: 'TaiKhoan',    // Tên bảng trong database
    timestamps: true,         // Tự động quản lý createdAt/updatedAt
  });

  return TaiKhoan;
};