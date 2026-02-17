async function testListFood() {
    try {
        console.log("Fetching list from http://localhost:4001/api/food/list...");
        const response = await fetch('http://localhost:4001/api/food/list');
        const data = await response.json();
        console.log("Response:", JSON.stringify(data, null, 2));

        if (data.success && data.data.length > 0) {
            console.log("SUCCESS: Found " + data.data.length + " items.");
            // Store ID for removal test if needed
            // console.log("First Item ID:", data.data[0]._id);
        } else {
            console.log("WARNING: List is empty or failed.");
        }

    } catch (error) {
        console.error("Error:", error);
    }
}

testListFood();
