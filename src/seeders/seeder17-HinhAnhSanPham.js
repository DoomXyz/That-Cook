'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('HinhAnhSanPham', [
            // SP00000001: 4 ảnh
            { MAHINHANH: 1, MASP: 'SP00000001', HinhAnh: 'anh1SP00000001', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 2, MASP: 'SP00000001', HinhAnh: 'anh2SP00000001', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 3, MASP: 'SP00000001', HinhAnh: 'anh3SP00000001', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 4, MASP: 'SP00000001', HinhAnh: 'anh4SP00000001', createdAt: new Date(), updatedAt: new Date() },
            // SP00000002: 3 ảnh
            { MAHINHANH: 5, MASP: 'SP00000002', HinhAnh: 'anh1SP00000002', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 6, MASP: 'SP00000002', HinhAnh: 'anh2SP00000002', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 7, MASP: 'SP00000002', HinhAnh: 'anh3SP00000002', createdAt: new Date(), updatedAt: new Date() },
            // SP00000003: 5 ảnh
            { MAHINHANH: 8, MASP: 'SP00000003', HinhAnh: 'anh1SP00000003', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 9, MASP: 'SP00000003', HinhAnh: 'anh2SP00000003', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 10, MASP: 'SP00000003', HinhAnh: 'anh3SP00000003', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 11, MASP: 'SP00000003', HinhAnh: 'anh4SP00000003', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 12, MASP: 'SP00000003', HinhAnh: 'anh5SP00000003', createdAt: new Date(), updatedAt: new Date() },
            // SP00000004: 4 ảnh
            { MAHINHANH: 13, MASP: 'SP00000004', HinhAnh: 'anh1SP00000004', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 14, MASP: 'SP00000004', HinhAnh: 'anh2SP00000004', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 15, MASP: 'SP00000004', HinhAnh: 'anh3SP00000004', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 16, MASP: 'SP00000004', HinhAnh: 'anh4SP00000004', createdAt: new Date(), updatedAt: new Date() },
            // SP00000005: 3 ảnh
            { MAHINHANH: 17, MASP: 'SP00000005', HinhAnh: 'anh1SP00000005', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 18, MASP: 'SP00000005', HinhAnh: 'anh2SP00000005', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 19, MASP: 'SP00000005', HinhAnh: 'anh3SP00000005', createdAt: new Date(), updatedAt: new Date() },
            // SP00000006: 5 ảnh
            { MAHINHANH: 20, MASP: 'SP00000006', HinhAnh: 'anh1SP00000006', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 21, MASP: 'SP00000006', HinhAnh: 'anh2SP00000006', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 22, MASP: 'SP00000006', HinhAnh: 'anh3SP00000006', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 23, MASP: 'SP00000006', HinhAnh: 'anh4SP00000006', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 24, MASP: 'SP00000006', HinhAnh: 'anh5SP00000006', createdAt: new Date(), updatedAt: new Date() },
            // SP00000007: 4 ảnh
            { MAHINHANH: 25, MASP: 'SP00000007', HinhAnh: 'anh1SP00000007', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 26, MASP: 'SP00000007', HinhAnh: 'anh2SP00000007', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 27, MASP: 'SP00000007', HinhAnh: 'anh3SP00000007', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 28, MASP: 'SP00000007', HinhAnh: 'anh4SP00000007', createdAt: new Date(), updatedAt: new Date() },
            // SP00000008: 3 ảnh
            { MAHINHANH: 29, MASP: 'SP00000008', HinhAnh: 'anh1SP00000008', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 30, MASP: 'SP00000008', HinhAnh: 'anh2SP00000008', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 31, MASP: 'SP00000008', HinhAnh: 'anh3SP00000008', createdAt: new Date(), updatedAt: new Date() },
            // SP00000009: 5 ảnh
            { MAHINHANH: 32, MASP: 'SP00000009', HinhAnh: 'anh1SP00000009', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 33, MASP: 'SP00000009', HinhAnh: 'anh2SP00000009', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 34, MASP: 'SP00000009', HinhAnh: 'anh3SP00000009', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 35, MASP: 'SP00000009', HinhAnh: 'anh4SP00000009', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 36, MASP: 'SP00000009', HinhAnh: 'anh5SP00000009', createdAt: new Date(), updatedAt: new Date() },
            // SP00000010: 4 ảnh
            { MAHINHANH: 37, MASP: 'SP00000010', HinhAnh: 'anh1SP00000010', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 38, MASP: 'SP00000010', HinhAnh: 'anh2SP00000010', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 39, MASP: 'SP00000010', HinhAnh: 'anh3SP00000010', createdAt: new Date(), updatedAt: new Date() },
            { MAHINHANH: 40, MASP: 'SP00000010', HinhAnh: 'anh4SP00000010', createdAt: new Date(), updatedAt: new Date() }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('HinhAnhSanPham', null, {});
    }
};