# The-Backenders-Web_043
# PurePharma

PurePharma is a comprehensive solution for purchasing health and wellness products online. It provides a user-friendly platform for browsing, filtering, and buying products like multivitamins, ensuring a seamless shopping experience. Built with a robust **React** front-end and a powerful **Node.js** back-end, this app delivers performance and reliability.

---

## Features

### Front-End
- Built using **React**, **HTML**, **CSS**, and **JavaScript**.
- Fully responsive design for seamless use across devices.
- Interactive UI for product browsing, filtering, and purchasing.
- Dynamic loading of product data from the back-end.

### Back-End
- Developed with **Node.js** and **Express.js**.
- RESTful API to manage product data.
- Data stored in **MongoDB** for scalability.
- Deployed on **Render** for high availability.

### Core Functionalities
- **Product Catalog**: View all available products with detailed information.
- **Search and Filter**: Quickly find products based on name, category, or price.
- **Shopping Cart**: Add items to the cart, view total prices, and checkout.
- **User Authentication**: Secure login and registration system.
- **Admin Panel**: Add, edit, or delete products from the inventory (optional).
- **Order Tracking**: Monitor order status from purchase to delivery.

---

## Tech Stack

### Front-End
- **React**: Framework for building dynamic user interfaces.
- **HTML**: Markup language for the structure.
- **CSS**: Styling for layout and design.
- **JavaScript**: Dynamic content and interactivity.
- **Netlify**: Front-end hosting platform.

### Back-End
- **Node.js**: Server-side runtime environment.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing product and user data.
- **Render**: Back-end hosting platform.

---

## Deployment

### Front-End
- **Netlify**: [Visit Front-End](#)
  - Features continuous deployment directly from the GitHub repository.
  - Deployed using optimized build settings for performance.

### Back-End
- **Render**: [Visit Back-End API](#)
  - Set up with environment variables for secure configuration.
  - Auto-deployment from the GitHub repository.

---

## Installation and Setup

### Prerequisites
- Node.js and npm installed.
- MongoDB instance (local or cloud-based).

### Back-End Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/username/centrum-store-backend.git
   cd centrum-store-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   MONGO_URI=your-mongodb-connection-string
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Your API will be live at `http://localhost:5000`.

### Front-End Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/username/centrum-store-frontend.git
   cd centrum-store-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. The app will be live at `http://localhost:3000`.

---

## API Endpoints

### Products
- `GET /products`: Fetch all products.
- `GET /products/:id`: Fetch a specific product by ID.
- `POST /products`: Add a new product (Admin only).
- `PUT /products/:id`: Update product details (Admin only).
- `DELETE /products/:id`: Delete a product (Admin only).

### User Authentication
- `POST /register`: Register a new user.
- `POST /login`: User login.

---

## Live Links
- **Frontend (Netlify)**: [Netlify Live Link](#)
- **Backend (Render)**: [Render Live API Link](#)

---

## Screenshots

### Home Page
![Home Page](https://via.placeholder.com/800x400?text=Home+Page)

### Product Catalog
![Product Catalog](https://via.placeholder.com/800x400?text=Product+Catalog)

### Shopping Cart
![Shopping Cart](https://via.placeholder.com/800x400?text=Shopping+Cart)

### Admin Panel
![Admin Panel](https://via.placeholder.com/800x400?text=Admin+Panel)

---

## Team Members
This project was collaboratively developed by a team of 4 members:
1. Member 1
2. Member 2
3. Member 3
4. Member 4

---

## Future Enhancements
- Add payment gateway integration for seamless checkout.
- Implement user profiles with order history.
- Include product reviews and ratings.
- Real-time order tracking with delivery notifications.

---

## Contributing

Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add a meaningful message'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments
- MongoDB for database support.
- Netlify and Render for deployment platforms.
- Open source libraries and tools used in this project.

---

Feel free to reach out for any queries or suggestions!

