"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SanPham extends Model {
    static associate(models) {
      SanPham.belongsTo(models.LoaiSanPham, {
        foreignKey: "MaLoaiSP",
        as: "LoaiSanPham",
      });
      SanPham.hasMany(models.HinhAnhSanPham, {
        foreignKey: "MASP",
        as: "HinhAnhSanPhams",
      });
      SanPham.belongsToMany(models.LoaiThuCung, {
        through: "SanPhamThuCung",
        foreignKey: "MASP",
        otherKey: "MALOAITC",
        as: "LoaiThuCungs",
      });
      SanPham.hasMany(models.ChiTietSanPham, {
        foreignKey: "MASP",
        as: "ChiTietSanPhams",
      });
    }
  }

  SanPham.init(
    {
      MASP: {
        type: DataTypes.CHAR(10),
        primaryKey: true,
        allowNull: false,
      },
      TenSanPham: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      SoLuongTon: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      KhuyenMai: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: true,
      },
      GiaBan: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      TinhTrang: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      MoTa: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      HinhAnh: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      MaLoaiSP: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "SanPham",
      tableName: "SanPham",
      timestamps: true,
    }
  );

  return SanPham;
};
