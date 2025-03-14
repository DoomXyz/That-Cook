'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SanPhams', [
      {
        MASP: '1',
        TenSanPham: 'San Pham 99',
        SLTon: 10,
        KhuyenMai: 0,
        GiaBan: 102000,
        TinhTrang: 1,
        MoTa: 'co cai lon',
        HinhAnh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReNMaL9w-q2ZWlKezR76JKG15q79eNIq8bFQ&s",
        MALOAISP: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        MASP: '2',
        TenSanPham: 'Minh caxxxx',
        SLTon: 2,
        KhuyenMai: 0,
        GiaBan: 9999,
        TinhTrang: 1,
        MoTa: 'FECL3',
        HinhAnh: "images/productha/hinhtest.webp",
        MALOAISP: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
