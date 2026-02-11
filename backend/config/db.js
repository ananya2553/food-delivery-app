import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        // Step 1: Password confirm karein (tlUegyg7iZTrs8Kc)
        // Step 2: Humne 'SRV' hata kar direct addresses use kiye hain
        
        const dbUrl = "mongodb://ananya:tlUegyg7iZTrs8Kc@cluster0-shard-00-00.kc0zips.mongodb.net:27017,cluster0-shard-00-01.kc0zips.mongodb.net:27017,cluster0-shard-00-02.kc0zips.mongodb.net:27017/food-del?ssl=true&authSource=admin";

        await mongoose.connect(dbUrl);
        console.log("DB Connected ✅");
    } catch (error) {
        console.log("DB Connection Error ❌: ", error.message);
    }
}