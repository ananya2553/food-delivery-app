async function testCart() {
    const email = `testcart${Date.now()}@example.com`;
    const password = "password123";
    const itemId = "food_12345";

    try {
        // 1. Register & Login
        console.log("1. Registering/Logging in...");
        let token;
        const regRes = await fetch('http://localhost:4001/api/user/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: "Cart Tester", email, password })
        });
        const regData = await regRes.json();

        if (regData.success) {
            token = regData.token;
        } else {
            // Try login if already exists
            const loginRes = await fetch('http://localhost:4001/api/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const loginData = await loginRes.json();
            token = loginData.token;
        }

        if (!token) throw new Error("Authentication failed");
        console.log("Token received.");

        // 2. Add to Cart
        console.log("2. Adding to Cart...");
        const addRes = await fetch('http://localhost:4001/api/cart/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'token': token },
            body: JSON.stringify({ itemId })
        });
        const addData = await addRes.json();
        console.log("Add Response:", addData);

        // 3. Get Cart
        console.log("3. Getting Cart...");
        const getRes = await fetch('http://localhost:4001/api/cart/get', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'token': token },
            body: JSON.stringify({})
        });
        const getData = await getRes.json();
        console.log("Cart Data:", getData.cartData);

        // 4. Remove from Cart
        console.log("4. Removing from Cart...");
        const removeRes = await fetch('http://localhost:4001/api/cart/remove', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'token': token },
            body: JSON.stringify({ itemId })
        });
        const removeData = await removeRes.json();
        console.log("Remove Response:", removeData);

        // 5. Get Cart Again
        const getRes2 = await fetch('http://localhost:4001/api/cart/get', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'token': token },
            body: JSON.stringify({})
        });
        const getData2 = await getRes2.json();
        console.log("Cart Data after remove:", getData2.cartData);

    } catch (error) {
        console.error("Test Failed:", error);
    }
}

testCart();
