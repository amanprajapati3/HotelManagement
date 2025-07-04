import express from "express"
import RegisterHotel from "../controller/hotelController.js";

const hotelRoute = express.Router();

hotelRoute.post("/registerHotel", RegisterHotel )