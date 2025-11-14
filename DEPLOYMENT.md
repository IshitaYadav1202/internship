# Deployment Guide for EchoCapsule

This guide covers deploying the EchoCapsule MERN stack application to various platforms.

## Prerequisites

- MongoDB Atlas account (for cloud database) or local MongoDB
- GitHub account
- Accounts on deployment platforms (Vercel, Netlify, Render, Railway, or Heroku)

## Deployment Options

### Option 1: Deploy Backend and Frontend Separately (Recommended)

#### Backend Deployment (Render/Railway/Heroku)

**Render:**
1. Create account at [render.com](https://render.com)
2. Connect your GitHub repository
3. Create a new "Web Service"
4. Set:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment Variables**:
     ```
     NODE_ENV=production
     PORT=5000
     MONGODB_URI=your_mongodb_atlas_uri
     JWT_SECRET=your_secret_key
     JWT_EXPIRE=30d
     JWT_COOKIE_EXPIRE=30
     ```
5. Deploy!

**Railway:**
1. Create account at [railway.app](https://railway.app)
2. New Project → Deploy from GitHub
3. Select your repository
4. Add service → Select `server` folder
5. Add environment variables (same as Render)
6. Deploy!

**Heroku:**
1. Install Heroku CLI: `npm install -g heroku`
2. Login: `heroku login`
3. Create app: `heroku create echocapsule-backend`
4. Set environment variables:
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set MONGODB_URI=your_mongodb_atlas_uri
   heroku config:set JWT_SECRET=your_secret_key
   heroku config:set JWT_EXPIRE=30d
   heroku config:set JWT_COOKIE_EXPIRE=30
   ```
5. Deploy: `git push heroku main`

#### Frontend Deployment (Vercel/Netlify)

**Vercel:**
1. Create account at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Set:
   - **Root Directory**: `client`
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Environment Variables**:
     ```
     REACT_APP_API_URL=https://your-backend-url.onrender.com/api
     ```
4. Deploy!

**Netlify:**
1. Create account at [netlify.com](https://netlify.com)
2. New site from Git → Connect GitHub
3. Set:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `client/build`
   - **Environment Variables**:
     ```
     REACT_APP_API_URL=https://your-backend-url.onrender.com/api
     ```
4. Update `netlify.toml` with your backend URL
5. Deploy!

### Option 2: Deploy Full Stack on Vercel

1. Push code to GitHub
2. Import project to Vercel
3. Configure:
   - **Root Directory**: `.` (root)
   - **Build Command**: `cd client && npm install && npm run build`
   - **Output Directory**: `client/build`
   - **Install Command**: `cd server && npm install && cd ../client && npm install`
4. Add environment variables in Vercel dashboard
5. Deploy!

## MongoDB Atlas Setup

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist IP addresses (0.0.0.0/0 for all)
5. Get connection string:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/echocapsule?retryWrites=true&w=majority
   ```
6. Use this in your backend environment variables

## Environment Variables Checklist

### Backend (.env or platform environment variables)
- ✅ `NODE_ENV=production`
- ✅ `PORT=5000` (or platform assigned port)
- ✅ `MONGODB_URI=mongodb+srv://...`
- ✅ `JWT_SECRET=your_strong_secret_key`
- ✅ `JWT_EXPIRE=30d`
- ✅ `JWT_COOKIE_EXPIRE=30`

### Frontend (.env or platform environment variables)
- ✅ `REACT_APP_API_URL=https://your-backend-url/api`

## Post-Deployment Steps

1. **Test API endpoints**: Visit `https://your-backend-url/api/health`
2. **Test frontend**: Visit your frontend URL
3. **Test authentication**: Try registering a new user
4. **Check CORS**: Ensure backend allows frontend origin
5. **Update CORS in server/app.js** if needed:
   ```javascript
   app.use(cors({
     origin: ['https://your-frontend-url.vercel.app', 'http://localhost:3000'],
     credentials: true
   }));
   ```

## Troubleshooting

### Backend Issues
- **Database connection failed**: Check MongoDB Atlas IP whitelist
- **Port issues**: Use `process.env.PORT || 5000` in server.js
- **CORS errors**: Update CORS configuration in app.js

### Frontend Issues
- **API calls failing**: Check `REACT_APP_API_URL` environment variable
- **Build fails**: Check Node version (use 16.x or 18.x)
- **Routing issues**: Ensure redirects are configured for SPA

### Common Errors
- **Module not found**: Run `npm install` in both client and server
- **Environment variables not working**: Restart server after adding vars
- **MongoDB connection timeout**: Check network settings and IP whitelist

## Quick Deploy Commands

```bash
# Backend (Heroku example)
cd server
heroku create echocapsule-api
heroku config:set MONGODB_URI=your_uri
git push heroku main

# Frontend (Vercel example)
cd client
vercel --prod
```

## Monitoring

- Use platform dashboards to monitor:
  - Server logs
  - Error rates
  - Response times
  - Database connections

## Security Checklist

- ✅ Use strong JWT_SECRET (32+ characters)
- ✅ Enable HTTPS only
- ✅ Set secure CORS origins
- ✅ Use environment variables (never commit .env)
- ✅ Enable MongoDB authentication
- ✅ Use MongoDB IP whitelist
- ✅ Regular dependency updates

## Support

For deployment issues, check:
- Platform documentation
- Server logs
- Browser console errors
- Network tab in DevTools

