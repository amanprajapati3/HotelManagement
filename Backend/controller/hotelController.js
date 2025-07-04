import { messageInRaw } from "svix";
import HotelModel from "../models/HotelModel.js";
import UserModel from "../models/UserModel.js";

const RegisterHotel = async(req, res) => {

  try {

    const {name, address, contact, city} = req.body;
    const owner = req.user._id;

    const hotel = await HotelModel.findOne({owner});
    if(hotel){
        res.json({success:false, message:"user already registered"})
    }

    await HotelModel.create({name, address, contact, city, owner});
    await UserModel.findByIdAndUpdate(owner, {role: "hotelowner"});
    res.json({success:true, message:"Hotel Registered Successfully."}); 

  } catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
}

}

export default RegisterHotel;