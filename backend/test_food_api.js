import { openAsBlob } from 'node:fs';

async function testAddFood() {
    try {
        // Updated path to point to existing asset
        const file = await openAsBlob('../frontend/src/assets/food_1.png');
        const formData = new FormData();
        formData.append('name', 'Test Food Item');
        formData.append('description', 'Delicious test item');
        formData.append('price', '10');
        formData.append('category', 'Salad');
        formData.append('image', file, 'food_1.png');

        console.log("Sending request to http://localhost:4001/api/food/add...");

        const response = await fetch('http://localhost:4001/api/food/add', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        console.log("Response:", data);

    } catch (error) {
        console.error("Error:", error);
    }
}

testAddFood();
