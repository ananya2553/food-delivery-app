import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }
}, { minimize: false })

// Agar model pehle se bana hai toh wahi use karo, nahi toh naya banao
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;