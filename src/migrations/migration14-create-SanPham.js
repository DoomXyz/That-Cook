"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "SanPham",
      {
        MASP: {
          type: Sequelize.CHAR(10),
          primaryKey: true,
          allowNull: false,
        },
        TenSanPham: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        SoLuongTon: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        KhuyenMai: {
          type: Sequelize.DECIMAL(5, 2),
          allowNull: true,
        },
        GiaBan: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false,
        },
        TinhTrang: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        MoTa: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        HinhAnh: {
          // Thêm trường HinhAnh
          type: Sequelize.STRING(255),
          allowNull: true,
        },
        MaLoaiSP: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: "LoaiSanPham",
            key: "MALOAISP",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
      { engine: "InnoDB" }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("SanPham");
  },
};
