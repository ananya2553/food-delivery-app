import axios from "axios";

const updateOrderStatus = async () => {
    // You'll need to manually get an Order ID from your DB or logs after placing an order
    const orderId = "REPLACE_WITH_ORDER_ID";

    try {
        console.log(`Updating status for order ${orderId}...`);

        await axios.post("http://localhost:4000/api/order/status", {
            orderId: orderId,
            status: "Food Processing"
        });
        console.log("Status updated to: Food Processing");

        setTimeout(async () => {
            await axios.post("http://localhost:4000/api/order/status", {
                orderId: orderId,
                status: "Out for delivery"
            });
            console.log("Status updated to: Out for delivery");
        }, 5000);

        setTimeout(async () => {
            await axios.post("http://localhost:4000/api/order/status", {
                orderId: orderId,
                status: "Delivered"
            });
            console.log("Status updated to: Delivered");
        }, 10000);

    } catch (error) {
        console.error("Error updating status:", error.message);
    }
}

updateOrderStatus();
