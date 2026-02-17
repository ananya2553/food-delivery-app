
// Native fetch in Node 18+
async function testGeminiRest() {
    const apiKey = "AIzaSyCNvoc4JY4Na197NX4i6_hoBCv-wmuc0uo";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

    console.log("Testing REST API:", url.replace(apiKey, "HIDDEN_KEY"));

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: "Hello" }]
                }]
            })
        });

        if (!response.ok) {
            console.error("HTTP Error:", response.status, response.statusText);
            const errorText = await response.text();
            console.error("Error Body:", errorText);
            return;
        }

        const data = await response.json();
        console.log("SUCCESS:", JSON.stringify(data, null, 2));

    } catch (error) {
        console.error("Fetch Error:", error);
    }
}

testGeminiRest();
