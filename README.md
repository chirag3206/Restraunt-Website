# 🍽️ Restaurant Website

A full-stack restaurant website with an Express.js backend and a feature-rich frontend — including online ordering, event booking, gallery showcases, and user authentication.

## ✨ Features

- **User Authentication** — Secure signup & login with bcrypt password hashing
- **Online Ordering** — Browse the menu, add items to cart, and place orders
- **Event Booking** — Submit inquiries for private dining, banquet halls, night parties, and restaurant buyouts
- **Gallery** — Photo galleries for banquet halls, private dining, night parties, and full buyouts
- **Contact Us** — Reach out via the contact form
- **Responsive Design** — Styled with custom CSS for a clean, modern look

## 🛠️ Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | HTML, CSS, JavaScript             |
| Backend   | Node.js, Express.js               |
| Database  | MongoDB (via Mongoose)            |
| Auth      | bcrypt.js                         |

## 📁 Project Structure

```
Restraunt/
├── Codes/                  # Frontend pages (HTML, CSS, JS)
│   ├── Homepage_Chirag.html
│   ├── Homepage.css / .js / .json
│   ├── order.html / .js
│   ├── cart.html / .js / .css
│   ├── login.html / .css
│   ├── signup.html / .css
│   ├── gallerypage.html / .css / .js
│   ├── Aboutpage.html / .css
│   ├── contactus.html / .css
│   ├── event.html / .css
│   ├── inquiry.html / .css
│   ├── menuData.json
│   └── ... (gallery sub-pages)
├── IMAGES/                 # Static image assets
├── Models/
│   └── User.js             # Mongoose User schema
├── Routes/
│   └── chirag.js           # Auth API routes (signup/login)
├── app.js                  # Express server entry point
├── package.json
└── .env                    # Environment variables (not committed)
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local instance or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Restraunt.git
   cd Restraunt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the server**
   ```bash
   node app.js
   ```

5. Open your browser and go to `http://localhost:5000`

## 📡 API Endpoints

| Method | Endpoint       | Description          |
|--------|----------------|----------------------|
| POST   | `/api/signup`  | Register a new user  |
| POST   | `/api/login`   | Login an existing user |

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
