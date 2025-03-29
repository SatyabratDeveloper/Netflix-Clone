import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Middleware setup for the Express application
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// route imports
import userRouter from "./routes/user.routes.js";
import videoRouter from "./routes/video.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/browse", videoRouter);

export default app;
