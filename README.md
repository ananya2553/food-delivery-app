# 🍅 Food Delivery App (MERN Stack)

A full-stack food delivery application built with the MERN stack (MongoDB, Express, React, Node.js), featuring a complete user ordering system, admin dashboard, and Stripe payment integration.

## 🚀 Features

-   **User Authentication**: Secure login and registration system.
-   **Browse & Search**: Explore food categories and search for specific items.
-   **Cart Management**: Add/remove items, adjust quantities, and view cart summary.
-   **Secure Checkout**: Integrated Stripe payment gateway for safe transactions.
-   **Order Tracking**: View order status (Processing, Out for Delivery, Delivered) in real-time.
-   **Admin Dashboard**: Dedicated panel to manage food items (Add/Edit/Remove) and update order statuses.
-   **Responsive Design**: Optimized for both desktop and mobile devices.

## 🛠️ Tech Stack

-   **Frontend**: React.js, Vite, React Router
-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB
-   **Payment**: Stripe API
-   **State Management**: Context API
-   **Styling**: Vanilla CSS

## ⚙️ Installation & Setup

### 1. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following variables:

```env
PORT=4001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Start the backend server:

```bash
npm run server
```

### 2. Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd frontend
npm install
```

Start the React Development Server:

```bash
npm run dev
```

The app should now be running at `http://localhost:5173`.

### 3. Admin Panel Setup

Navigate to the admin directory and install dependencies:

```bash
cd admin
npm install
```

Start the Admin Dashboard:

```bash
npm run dev
```

The admin panel should be running at `http://localhost:5174` (or next available port).

## 📸 Screenshots

*(Add screenshots of your Home Page, Cart, and Admin Dashboard here)*

## 🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request.

## 📄 License

This project is licensed under the ISC License.
