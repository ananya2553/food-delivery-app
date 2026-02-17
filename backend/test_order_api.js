

async function testOrder() {
    const email = `testorder${Date.now()}@example.com`;
    const password = "password123";

    console.log(`Testing Order API with email: ${email}`);

    try {
        // 1. Register
        console.log("1. Registering...");
        const regRes = await fetch('http://localhost:4002/api/user/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: "Order Tester", email, password })
        });
        const regData = await regRes.json();

        let token = regData.token;
        if (!token) {
            console.log("Registration failed or user exists, trying login...");
            const loginRes = await fetch('http://localhost:4001/api/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const loginData = await loginRes.json();
            token = loginData.token;
        }

        if (!token) {
            console.error("Auth Failed");
            return;
        }
        console.log("Token received.");

        // 2. Place Order
        console.log("2. Placing Order...");
        const orderData = {
            userId: "", // Will be set by middleware
            items: [{ name: "Test Food", price: 10, quantity: 1 }],
            amount: 10,
            address: {
                firstName: "Test",
                lastName: "User",
                email: email,
                street: "123 Test St",
                city: "Test City",
                state: "Test State",
                zipcode: "12345",
                country: "Test Country",
                phone: "1234567890"
            }
        };

        const orderRes = await fetch('http://localhost:4001/api/order/place', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': token
            },
            body: JSON.stringify(orderData)
        });

        const orderResponse = await orderRes.json();
        if (orderResponse.success && orderResponse.session_url) {
            console.log("SUCCESS: Session URL Created: " + orderResponse.session_url);
        } else {
            console.log("FAILURE: " + JSON.stringify(orderResponse));
        }

    } catch (error) {
        console.error("Test Failed:", error);
    }
}

testOrder();
