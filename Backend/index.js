import express from "express";
import cors from "cors";
import "dotenv/config";
import dotenv from "dotenv";
import connectDb from "./config/Mongodb.js";
import connectCloudinary from "./config/Cloudinary.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebHook from "./controller/clerkWebHooks.js";

// App config
const app = express();
dotenv.config();
const port = process.env.PORT || 6000;
connectDb();
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware())

// api to listen clerk web hooks
app.use("/api/clerk", clerkWebHook);

// api endpoints
app.get("/", (req, res) => {
  res.send("api working successfully");
});

app.listen(port, () => 
  console.log(`Website is running at http://localhost:${port}`)
);
