# EchoCapsule 

A full-stack MERN application for preserving memories, mapping dreams, and creating collaborative voice journals.

## Features

- **Time Capsules** - Create time capsules that unlock in the future
- **Dream Mapping** - Visualize and connect your dreams and goals
- **Voice Journals** - Record and collaborate on voice journal entries
- **User Authentication** - Secure JWT-based authentication
- **Beautiful UI** - Modern glassmorphism design with smooth animations

## Tech Stack

### Frontend
- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Custom CSS** - Modern glassmorphism design

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## Project Structure

```
echocapsule/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── styles/         # CSS stylesheets
│   │   ├── utils/          # Utility functions
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── server/                 # Express backend
│   ├── config/             # Configuration files
│   ├── controllers/       # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # Express routes
│   ├── middleware/         # Custom middleware
│   ├── utils/              # Helper functions
│   ├── app.js              # Express app
│   ├── server.js           # Server entry point
│   ├── package.json
│   └── README.md
├── .env                    # Environment variables (create this)
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn


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

## Authentication

Protected routes require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

Tokens are returned upon successful login/registration.

## Environment Variables

### Server (.env in root)
- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `JWT_EXPIRE` - JWT expiration time
- `JWT_COOKIE_EXPIRE` - Cookie expiration in days

### Client (create .env in client/)
- `REACT_APP_API_URL` - Backend API URL

## Development



## Features in Development

- [x] Backend API structure
- [x] User authentication
- [x] Database models
- [x] Deployment configuration
- [ ] Frontend-Backend integration
- [ ] Audio recording functionality
- [ ] Dream map visualization enhancements
- [ ] Real-time collaboration features
- [ ] File upload for media

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is part of an internship program.
