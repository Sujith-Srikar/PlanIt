# Todo Backend

A robust backend application for managing todos using Express, JWT, bcrypt, and MongoDB.

## Prerequisites

- Node.js
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd server

2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following configurations:
   ```
   JWT_SECRET=your_jwt_secret_key
   PORT=your_port
   MONGODB_URL=your_mongodb_connection_string
   ```

## Authentication Routes

### Sign Up
- **URL**: `/auth/signup`
- **Method**: POST
- **Body**: 
  ```json
  {
    "username": "example",
    "password": "securepassword"
  }
  ```

### Sign In
- **URL**: `/auth/signin`
- **Method**: POST
- **Body**: 
  ```json
  {
    "username": "example",
    "password": "securepassword"
  }
  ```
- **Response**: JWT token for authentication

## Todo Routes

### Get All Todos
- **URL**: `/todo`
- **Method**: GET
- **Authorization**: Required (JWT token)

### Create Todo
- **URL**: `/todo`
- **Method**: POST
- **Authorization**: Required (JWT token)
- **Body**:
  ```json
  {
    "title": "Todo title",
    "description": "Todo description"
  }
  ```

### Update Todo
- **URL**: `/todo/:id`
- **Method**: PUT
- **Authorization**: Required (JWT token)
- **Body**:
  ```json
  {
    "title": "Updated title",
    "description": "Updated description"
  }
  ```

### Delete Todo
- **URL**: `/todo/:id`
- **Method**: DELETE
- **Authorization**: Required (JWT token)

## Running the Application

```bash
npm start
```

## Development

```bash
npm run dev
```

## Technologies Used

- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- Bcrypt

## Security

- Passwords are hashed using bcrypt
- JWT used for authentication
- Protected routes require valid authentication token