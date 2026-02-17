import { connectDB } from "./config/db.js";

console.log("Starting connection test...");
try {
    await connectDB();
    console.log("Test script finished.");
} catch (error) {
    console.error("Test script caught error:", error);
}
