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

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ISHITA-YADAV12/internship.git
cd internship
```

2. Create `.env` file in the root directory:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/echocapsule
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30
REACT_APP_API_URL=http://localhost:5000/api
```

3. Install server dependencies:
```bash
cd server
npm install
```

4. Install client dependencies:
```bash
cd ../client
npm install
```

### Running the Application

#### Start the Backend Server

```bash
cd server
npm run dev    # Development mode with nodemon
# or
npm start      # Production mode
```

Server will run on `http://localhost:5000`

#### Start the Frontend Client

```bash
cd client
npm start
```

Client will run on `http://localhost:3000`

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

### Backend Development
```bash
cd server
npm run dev    # Uses nodemon for auto-restart
```

### Frontend Development
```bash
cd client
npm start      # React development server with hot reload
```

## Production Build

### Build Frontend
```bash
cd client
npm run build
```

### Run Production Server
```bash
cd server
NODE_ENV=production npm start
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy

1. **Backend**: Deploy `server/` folder to Render/Railway/Heroku
2. **Frontend**: Deploy `client/` folder to Vercel/Netlify
3. **Database**: Set up MongoDB Atlas
4. **Environment Variables**: Configure in deployment platform

See [DEPLOY.md](./DEPLOY.md) for quick reference.

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
