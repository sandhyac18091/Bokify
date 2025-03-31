import mongoose from "mongoose";


const signSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userrole:{ type: String, required: true }
});


const register = mongoose.model("Signupdetails", signSchema);
export default register