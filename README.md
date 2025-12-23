# 🎓 Student Management System (MERN Stack)

A comprehensive Student Management System built using the **MERN Stack** (MongoDB, Express.js, React, Node.js). This application features role-based access control for Students and Administrators, modern UI design, and secure authentication.

![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Maintained-green?style=for-the-badge)

## ✨ Features

- **🔐 Robust Authentication**: Secure Login and Signup functionality using **JWT (JSON Web Tokens)** and **BCrypt** for password hashing.
- **🛡️ Role-Based Access Control**:
    - **Student Portal**: View personalized dashboards, programs, and about section.
    - **Admin Dashboard**: Manage students, view database statistics, and system overview.
- **🎨 Modern UI/UX**:
    - Built with **React 19** and **Tailwind CSS**.
    - Fully responsive design for Desktop, Tablet, and Mobile.
    - Beautiful glassmorphism effects and smooth transitions (Lucide React Icons).
- **🚀 Production Ready**: configured for direct deployment on **Vercel** with separate frontend/backend architecture.
- **⚡ Error Handling**: Custom middleware for error handling and real-time toast notifications (`react-toastify`).

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **State Management**: Context API
- **Routing**: React Router DOM v7
- **HTTP Client**: Axios
- **Notifications**: React Toastify
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Atlas)
- **ODM**: Mongoose v9
- **Authentication**: JWT & BcryptJS
- **Security**: CORS, Environment Variables (Dotenv)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas Account (or local MongoDB)

### Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/assignment-mern-stack.git
    cd assignment-mern-stack
    ```

2.  **Setup Backend**
    ```bash
    cd backend
    npm install
    ```
    - Create a `.env` file in the `backend` folder:
      ```env
      PORT=5000
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_super_secret_key
      ```
    - Start the server:
      ```bash
      npm start
      ```

3.  **Setup Frontend**
    ```bash
    cd ../frontend
    npm install
    ```
    - Create a `.env` file (`.env.development` for local) in the `frontend` folder:
      ```env
      VITE_API_BASE_URL=http://localhost:5000/api
      ```
    - Start the React app:
      ```bash
      npm run dev
      ```

## 🌐 Deployment (Vercel)

This project is designed to be deployed as two separate services on Vercel.

### 1. Backend Deployment
- **Project Type**: Node.js / Other
- **Root Directory**: `backend`
- **Environment Variables**: `MONGO_URI`, `JWT_SECRET`.
- **Note**: Ensure MongoDB Network Access allows `0.0.0.0/0`.

### 2. Frontend Deployment
- **Project Type**: Vite
- **Root Directory**: `frontend`
- **Environment Variables**:
    - `VITE_API_BASE_URL`: `https://your-backend-url.vercel.app/api`
- **Important**: Add `/api` at the end of the Backend URL.

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License
This project is licensed under the MIT License.
