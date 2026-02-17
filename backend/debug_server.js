try {
    console.log("Attempting to import userController...");
    await import("./controllers/userController.js");
    console.log("Success with controller!");
} catch (error) {
    console.error("Controller import failed:", error);
}

try {
    console.log("Attempting to import userModel...");
    await import("./models/userModel.js");
    console.log("Success with model!");
} catch (error) {
    console.error("Model import failed:", error);
}
