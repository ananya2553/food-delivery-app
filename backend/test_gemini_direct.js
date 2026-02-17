import { GoogleGenerativeAI } from "@google/generative-ai";

async function testGemini() {
    const apiKey = "AIzaSyCNvoc4JY4Na197NX4i6_hoBCv-wmuc0uo"; // Hardcoded for test
    console.log("Testing Gemini with key:", apiKey);

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        // List models
        // Note: listModels is not directly on genAI in some versions, but let's try the newer API
        // actually it is not exposed directly on the client in the node SDK?
        // Let's try getting a model and running it, but maybe catch the 404 error better.

        console.log("Retrying with gemini-pro...");
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent("Hello?");
        const response = await result.response;
        console.log("SUCCESS with gemini-pro:", response.text());

    } catch (error) {
        console.error("ERROR Details:", error);
    }
}

testGemini();
