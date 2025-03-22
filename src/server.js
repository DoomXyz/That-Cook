import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine"
import initWebRoutes from "./route/web";
import cors from "cors"
import connectDB from "./config/connectDB"
require('dotenv').config();

let app = express();

// app.use(cors({ origin: true }));
app.use(cors({
    origin: 'http://localhost:3000', // Chỉ định rõ origin của frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
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