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
- **Netlify**:[ [Visit Front-End](#)](https://6768f3ab44e08bdb6d2280c0--candid-mooncake-e8530d.netlify.app/)
  - Features continuous deployment directly from the GitHub repository.
  - Deployed using optimized build settings for performance.

### Back-End
- **Render**: [[Visit Back-End API](#)](https://the-backenders-043-1.onrender.com)
  - Set up with environment variables for secure configuration.
  - Auto-deployment from the GitHub repository.

---

## Installation and Setup

### Prerequisites
- Node.js and npm installed.
- MongoDB instance (local or cloud-based).

### Setup
1. Clone the repository: for Frontend
   ```bash
   git clone (https://github.com/rahulsharma998/The-Backenders-Web_043/)
   ```

1. Clone the repository: for Backend
   ```bash
   git clone (https://the-backenders-043-1.onrender.com)
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm start
   ```



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
- **Frontend (Netlify)**: (https://6768f3ab44e08bdb6d2280c0--candid-mooncake-e8530d.netlify.app/)
- **Backend (Render)**: (https://the-backenders-043-1.onrender.com)

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
1. Rahul Sharma
2. Shivam Gurjar
3. Pritam
4. Shivam Gopal

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

