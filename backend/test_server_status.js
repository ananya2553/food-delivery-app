async function checkServer() {
    try {
        const response = await fetch('http://localhost:4001/');
        const text = await response.text();
        console.log("Server Response:", text);
    } catch (error) {
        console.error("Server Check Failed:", error.cause || error);
    }
}
checkServer();
