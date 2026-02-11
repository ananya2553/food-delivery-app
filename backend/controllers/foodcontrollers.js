import foodModel from "../models/foodmodel.js";
import fs from 'fs'; // Ab ye use hoga toh bright ho jayega!

// 1. Function: Naya Food Item Add karne ke liye
const addFood = async (req, res) => {
    
    // Multer se jo file aayi uska naam nikalna
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })

    try {
        await food.save(); // Database mein save karna
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log(error);
        
        // YAHAN UPDATE KIYA HAI: fs ka use karke folder se image delete karna agar DB error aaye
        fs.unlink(`uploads/${image_filename}`, () => {}); 
        
        res.json({ success: false, message: "Error saving to DB" });
    }
}

export { addFood };