
async function listModels() {
    const apiKey = "AIzaSyCNvoc4JY4Na197NX4i6_hoBCv-wmuc0uo"; // Key from .env
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

    console.log("Fetching models...");

    try {
        const response = await fetch(url);

        if (!response.ok) {
            console.error("HTTP Error:", response.status, response.statusText);
            const text = await response.text();
            console.error("Error Body:", text);
            return;
        }

        const data = await response.json();
        console.log("Available Models:", JSON.stringify(data.models, null, 2));

    } catch (error) {
        console.error("Fetch Error:", error);
    }
}

listModels();
