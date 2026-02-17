async function testAuth() {
    const email = `test${Date.now()}@example.com`;
    const password = "password123";

    console.log(`Testing with email: ${email}`);

    try {
        // 1. Register
        console.log("1. Registering...");
        const regRes = await fetch('http://localhost:4001/api/user/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: "Test User", email, password })
        });
        const regData = await regRes.json();
        console.log("Register Response:", regData);

        if (!regData.success) return;

        // 2. Login
        console.log("2. Logging in...");
        const loginRes = await fetch('http://localhost:4001/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const loginData = await loginRes.json();
        console.log("Login Response:", loginData);

        if (loginData.success && loginData.token) {
            console.log("SUCCESS: Authentication working!");
        } else {
            console.log("FAILURE: Login failed.");
        }

    } catch (error) {
        console.error("Error:", error);
    }
}

testAuth();
