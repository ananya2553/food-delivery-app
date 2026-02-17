import { food_list } from "./food_data.js";
import { openAsBlob } from 'node:fs';
import path from 'path';

const API_URL = "http://localhost:4001/api/food";
const ASSETS_PATH = "frontend/src/assets"; // Relative to project root

async function clearDatabase() {
    console.log("Fetching existing items...");
    try {
        const response = await fetch(`${API_URL}/list`);
        const result = await response.json();

        if (result.success && result.data.length > 0) {
            console.log(`Found ${result.data.length} items. Removing...`);
            for (const item of result.data) {
                await fetch(`${API_URL}/remove`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: item._id })
                });
                process.stdout.write("."); // Progress indicator
            }
            console.log("\nDatabase cleared.");
        } else {
            console.log("Database is already empty.");
        }
    } catch (error) {
        console.error("Error clearing database:", error);
    }
}

async function seedDatabase() {
    await clearDatabase();

    console.log(`Seeding ${food_list.length} new items...`);

    for (const item of food_list) {
        try {
            const imagePath = path.join(ASSETS_PATH, item.image);
            const blob = await openAsBlob(imagePath);

            const formData = new FormData();
            formData.append('name', item.name);
            formData.append('description', item.description);
            formData.append('price', item.price);
            formData.append('category', item.category);
            formData.append('image', blob, item.image);

            const response = await fetch(`${API_URL}/add`, {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            if (result.success) {
                process.stdout.write("+"); // Success indicator
            } else {
                console.error(`\nFailed to add ${item.name}:`, result.message);
            }

        } catch (error) {
            console.error(`\nError adding ${item.name}:`, error);
        }
    }
    console.log("\nSeeding complete! ✅");
}

seedDatabase();
