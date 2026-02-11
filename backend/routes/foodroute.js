import express from "express";
// Path check kijiye: controllers folder ke andar foodcontrollers.js
import { addFood } from "../controllers/foodcontrollers.js"; 
import multer from "multer";

const foodRouter = express.Router();

// Image Storage Engine (Multer)
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

// POST request for adding food
foodRouter.post("/add", upload.single("image"), addFood);

export default foodRouter;