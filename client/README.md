# EchoCapsule Client

Frontend React application for EchoCapsule.

## Features

- Beautiful modern UI with glassmorphism design
- Time Capsules management
- Dream Mapping visualization
- Voice Journal recording and playback
- User authentication
- Responsive design

## Tech Stack

- **React 18** - UI library
- **React Router v6** - Routing
- **Custom CSS** - Styling with modern design

## Project Structure

```
client/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── styles/          # CSS stylesheets
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main app component
│   └── index.js         # Entry point
└── package.json
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner

## Environment Variables

Create a `.env` file in the client directory:
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Features in Development

- [ ] Backend API integration
- [ ] Audio recording functionality
- [ ] Dream map visualization enhancements
- [ ] Real-time collaboration features

