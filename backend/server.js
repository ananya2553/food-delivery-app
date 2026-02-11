import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodroute.js"

// App Config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
// Ye function db.js se connection initiate karega
connectDB();

// API Endpoints
app.use("/api/food", foodRouter); // Route file yahan map hoti hai
app.use("/images", express.static('uploads')); // Images access karne ke liye

app.get("/", (req, res) => {
    res.send("API Working");
});

// Server Start
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});