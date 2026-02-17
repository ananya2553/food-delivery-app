import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const dbUrl = "mongodb+srv://ananya:tlUegyg7iZTrs8Kc@cluster0.kc0zips.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster0";

        await mongoose.connect(dbUrl);

        console.log("DB Connected ✅");
    } catch (error) {
        console.log("DB Connection Error ❌: ", error.message);
    }
}