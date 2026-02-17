import mongoose from "mongoose";

const dbUrl = "mongodb+srv://ananya:tlUegyg7iZTrs8Kc@cluster0.kc0zips.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster0";

console.log("Testing SRV connection...");

try {
    await mongoose.connect(dbUrl);
    console.log("SRV Connection Successful! ✅");
    process.exit(0);
} catch (error) {
    console.error("SRV Connection Failed ❌:", error);
    process.exit(1);
}
