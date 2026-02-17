

async function testChat() {
    const prompt = "What is the price of a Burger?";
    console.log(`Testing Chat API with prompt: "${prompt}"`);

    try {
        const response = await fetch('http://localhost:4002/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt })
        });

        const data = await response.json();
        console.log("Chat Response:", JSON.stringify(data, null, 2));

    } catch (error) {
        console.error("Test Failed:", error);
    }
}

testChat();
