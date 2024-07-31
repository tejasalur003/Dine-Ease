import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';

const app = express();
dotenv.config({ path: './config/config.env' });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['POST'],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/reservation', reservationRouter);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


dbConnection();

app.use(errorMiddleware);

export default app;


// require("dotenv").config();
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const connection = require("./db");
// const userRoutes = require("./routes/users");
// const authRoutes = require("./routes/auth");

// // database connection
// connection();

// // middlewares
// app.use(express.json());
// app.use(cors());

// // routes
// app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);

// const port = process.env.PORT || 8080;
// app.listen(port, console.log(`Listening on port ${port}...`));
