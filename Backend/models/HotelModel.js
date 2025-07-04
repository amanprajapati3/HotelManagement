import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    owner: { type: String, required: true, ref: "user" },
    city: { type: String, required: true },
},{ timestamps: true })

const HotelModel = mongoose.models.HotelSchema || mongoose.models("hotelSchema", HotelSchema)

export default HotelModel;