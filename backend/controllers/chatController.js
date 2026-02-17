import foodModel from "../models/foodModel.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const chat = async (req, res) => {
    try {
        const { prompt } = req.body;
        const foods = await foodModel.find({});

        // Create context string from food items
        let menuContext = "Current Menu:\n";
        foods.forEach(food => {
            menuContext += `- ${food.name}: $${food.price} (${food.description})\n`;
        });

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const systemPrompt = `You are a helpful support assistant for a food delivery app. 
        Use the following menu data to answer the user's question. 
        Do not answer questions outside of food delivery context.
        If the item is not in the menu, say it's not available.
        
        ${menuContext}
        
        User Question: ${prompt}`;

        const result = await model.generateContent(systemPrompt);
        const response = await result.response;
        const text = response.text();

        res.json({ success: true, message: text });

    } catch (error) {
        console.error("Chat Controller Error:", error);
        console.log("API Key Status:", process.env.GEMINI_API_KEY ? "Present" : "Missing");
        res.json({
            success: false,
            message: "Error",
            error: error.message,
            details: JSON.stringify(error)
        })
    }
}

export { chat }
