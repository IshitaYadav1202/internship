# EchoCapsule Server

Backend API server for the EchoCapsule MERN stack application.

## Features

- User authentication (JWT)
- Time Capsules CRUD operations
- Dream Mapping with connections
- Voice Journals with collaboration
- RESTful API design

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## Project Structure

```
server/
├── config/
│   └── db.js              # Database connection
├── controllers/
│   ├── userController.js
│   ├── capsuleController.js
│   ├── dreamController.js
│   └── voiceJournalController.js
├── middleware/
│   ├── authMiddleware.js   # JWT authentication
│   └── errorHandler.js     # Error handling
├── models/
│   ├── User.js
│   ├── Capsule.js
│   ├── Dream.js
│   └── VoiceNote.js
├── routes/
│   ├── userRoutes.js
│   ├── capsuleRoutes.js
│   ├── dreamRoutes.js
│   └── voiceJournalRoutes.js
├── utils/
│   ├── helpers.js          # Helper functions
│   └── validators.js       # Validation utilities
├── app.js                   # Express app setup
├── server.js                # Server entry point
└── package.json
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with:
```
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30
```

3. Start the server:
```bash
# Development (with nodemon)
npm run dev

# Production
npm start
```

## API Endpoints

### Authentication
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users/me` - Get current user (Protected)
- `PUT /api/users/me` - Update user (Protected)
- `DELETE /api/users/me` - Delete user (Protected)

### Time Capsules
- `GET /api/capsules` - Get all capsules (Protected)
- `GET /api/capsules/:id` - Get single capsule (Protected)
- `POST /api/capsules` - Create capsule (Protected)
- `PUT /api/capsules/:id` - Update capsule (Protected)
- `DELETE /api/capsules/:id` - Delete capsule (Protected)
- `PUT /api/capsules/:id/unlock` - Unlock capsule (Protected)

### Dreams
- `GET /api/dreams` - Get all dreams (Protected)
- `GET /api/dreams/:id` - Get single dream (Protected)
- `POST /api/dreams` - Create dream (Protected)
- `PUT /api/dreams/:id` - Update dream (Protected)
- `DELETE /api/dreams/:id` - Delete dream (Protected)
- `POST /api/dreams/:id/connect` - Create connection (Protected)

### Voice Journals
- `GET /api/voice-journals` - Get all journals (Protected)
- `GET /api/voice-journals/:id` - Get single journal (Protected)
- `POST /api/voice-journals` - Create journal (Protected)
- `PUT /api/voice-journals/:id` - Update journal (Protected)
- `DELETE /api/voice-journals/:id` - Delete journal (Protected)
- `POST /api/voice-journals/:id/collaborators` - Add collaborator (Protected)
- `POST /api/voice-journals/:id/comments` - Add comment (Protected)

## Environment Variables

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `JWT_EXPIRE` - JWT expiration time
- `JWT_COOKIE_EXPIRE` - Cookie expiration in days

## Authentication

Protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

Tokens are returned upon successful login/registration.

