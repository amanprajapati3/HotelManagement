import UserModel from "../models/UserModel.js";
import { Webhook } from "svix";

const clerkWebHook = async (req, res) => {
    try {

        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        //   getting headers    
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        }

        // verifying headers
        await whook.verify(JSON.stringify(req.body), headers);

        // getting data from request body
        const { data, type } = req.body;

        const userData = {
            _id: data.id,
            email: data.email_addresses[0].email_address,
            username: data.first_name + " " + data.last_name,
            image: data.image_url,
        }

        // using switch case
        switch (type) {
            case "user.created": {
                await UserModel.create(userData);
                break;
            }
            case "user.updated": {
                await UserModel.findByIdAndUpdate(data.id, userData);
                break;
            }
            case "user.deleted": {
                await UserModel.findByIdAndDelete(data.id);
                break;
            }
            default:
                break;
        }
        res.json({ success: true, message: "webHook received" });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message }) 
    }
}

export default clerkWebHook;
