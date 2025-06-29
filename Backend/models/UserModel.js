import mongoose from "mongoose";

const User_schema = new mongoose.Schema({
     _id:{type:String, require:true},
     Username : {type: String, require : true},
     email : {type : String, require : true, unique : true},
     image:{type:String, require:true},
     role: {type:String, enum:["user", "hotelowner"], default:"user"},  
     recentSearchCity: [{type:String, require: true}]
}, {timeStamps:true})

const UserModel = mongoose.model.HotelUsers || mongoose.model("HotelUsers", User_schema);

export default UserModel;