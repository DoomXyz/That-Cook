import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine"
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
import cors from "cors";
import jwt from "jsonwebtoken";
require('dotenv').config();

let app = express();

// app.use(cors({ origin: true }));
app.use(cors({
    origin: process.env.URL_REACT, // Chỉ định rõ origin của frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Cho phép credentials
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware kiểm tra token JWT
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']; // Lấy header Authorization
    const token = authHeader && authHeader.split(' ')[1]; // Tách token từ "Bearer <token>"
    if (!token) {
        return res.status(401).json({ errCode: 1, errMessage: 'No token provided' });
    }
    // Xác minh token
    jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key', (err, user) => {
        if (err) {
            return res.status(403).json({ errCode: 2, errMessage: 'Invalid token' });
        }
        req.user = user; // Lưu thông tin user từ token vào req
        next();
    });
};

// Middleware kiểm tra quyền admin (MaLoaiTK = 1)
const requireAdmin = (req, res, next) => {
    if (req.user && req.user.MaLoaiTK === 1) {
        next();
    } else {
        return res.status(403).json({ errCode: 3, errMessage: 'Admin access required' });
    }
};

// Middleware kiểm tra quyền chủ cửa hàng (MaLoaiTK = 2)
const requireOwner = (req, res, next) => {
    if (req.user && req.user.MaLoaiTK === 2) {
        next();
    } else {
        return res.status(403).json({ errCode: 4, errMessage: 'Owner access required' });
    }
};

viewEngine(app);
initWebRoutes(app, authenticateToken, requireAdmin, requireOwner);
connectDB();

let port = process.env.PORT;
app.listen(port, () => {
    console.log("Server running on port: " + port);
});