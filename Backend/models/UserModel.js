import mongoose from "mongoose";

const User_schema = new mongoose.Schema({
    _id: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    role: { type: String, enum: ["user", "hotelowner"], default: "user" },
    recentSearchCity: { type: [String], default: [] }
}, { timestamps: true });

const UserModel = mongoose.model.HotelUsers || mongoose.model("HotelUsers", User_schema);

export default UserModel;
