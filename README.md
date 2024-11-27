# RBAC System

A **Role-Based Access Control (RBAC)** system built using Node.js, Express.js, and MongoDB. This system provides secure authentication and authorization mechanisms to manage user access based on their roles (e.g., Admin, Moderator, User).

## Features
- User registration and login with password hashing.
- JWT-based authentication for session management.
- Role-based authorization for securing resources.
- Flexible middleware to control access based on user roles.
- Built-in roles: `admin`, `moderator`, `user`.

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Rajdeep777/RBAC-System-Backend
   ```
2. Navigate to the project directory:
   ```bash
   cd RBAC-System-Backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and configure it as follows:
   ```env
   MONGO_URI=mongodb://localhost:27017/rbac-system
   JWT_SECRET=your_jwt_secret
   PORT=8000
   ```

5. Start the server:
   ```bash
   npm start
   ```

The server will start at `http://localhost:8000`.

---

## API Documentation

### Base URL
`http://localhost:8000`

### Endpoints

#### **Authentication**

1. **Register User**
   - **POST** `/api/users/register`
   - **Request Body**:
     ```json
     {
       "username": "example",
       "email": "example@example.com",
       "password": "yourpassword",
       "role": "user"
     }
     ```
   - **Response**:
     ```json
      {
       "username": "example",
       "email": "example@example.com",
       "password": "hashedpassword",
       "role": "user"
     }
     ```

2. **Login User**
   - **POST** `/api/users/login`
   - **Request Body**:
     ```json
     {
       "email": "example@example.com",
       "password": "yourpassword"
     }
     ```
   - **Response**:
     ```json
     {
       "token": "jwt_token_here"
     }
     ```

#### **Resources (Protected)**

1. **Admin Resource**
   - **GET** `/api/resources/admin`
   - **Authorization**: Requires `<jwt_token>` in the headers.
   - Accessible by `admin` only.

2. **Moderator Resource**
   - **GET** `/api/resources/moderator`
   - **Authorization**: Requires `<jwt_token>` in the headers.
   - Accessible by `admin` and `moderator`.

3. **User Resource**
   - **GET** `/api/resources/user`
   - **Authorization**: Requires `<jwt_token>` in the headers.
   - Accessible by `admin`, `moderator`, and `user`.

---

## Folder Structure
```
RBAC-System-Backend/
├── config/                       # Configuration logic
├── error-handler/                # Application Error
├── src/                          # Main app logic
      ├── features/               # Features of App
            ├── resources/        # Resources feature for users
            ├── user/             # Adding users feature
       ├── middlewares/           # Middlewares to handle authentication
├── index.js                      # Entry point
├── .env                          # Environment variables
├── package.json                  # Dependencies and scripts
├── package-lock.json/            # Dependencies management
├── swagger.json/                 # API documentation
```

---

## Security Features
1. **Password Hashing:** User passwords are securely hashed using **BCrypt**.
2. **JWT Authentication:** Ensures secure user session handling with tokens.

---

## Author
**Rajdeep Singh**  
For inquiries, email: [rajdeepsingh1177@gmail.com]

---

## License
This project is licensed under the ISC License.

---

Let me know if you want additional sections, such as a step-by-step video guide or extended security documentation!
