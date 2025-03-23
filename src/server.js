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

viewEngine(app);
initWebRoutes(app);
connectDB();

let port = process.env.PORT;
app.listen(port, () => {
    console.log("Server running on port: " + port);
});