# Quick Deployment Guide

## 🚀 Deploy to Production

### Step 1: Prepare Environment Variables

Create `.env` files:

**Root `.env`:**
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/echocapsule
JWT_SECRET=your_32_character_secret_key_here
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30
REACT_APP_API_URL=https://your-backend-url.onrender.com/api
```

### Step 2: Push to GitHub

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 3: Deploy Backend (Choose one)

**Render:**
1. Go to render.com
2. New Web Service
3. Connect GitHub repo
4. Root: `server`
5. Build: `npm install`
6. Start: `npm start`
7. Add env vars

**Railway:**
1. Go to railway.app
2. New Project → GitHub
3. Add service → `server` folder
4. Add env vars
5. Deploy

**Heroku:**
```bash
cd server
heroku create echocapsule-api
heroku config:set MONGODB_URI=your_uri
heroku config:set JWT_SECRET=your_secret
git push heroku main
```

### Step 4: Deploy Frontend

**Vercel:**
1. Go to vercel.com
2. Import GitHub repo
3. Root: `client`
4. Framework: Create React App
5. Add env: `REACT_APP_API_URL=https://your-backend-url/api`
6. Deploy

**Netlify:**
1. Go to netlify.com
2. New site from Git
3. Root: `client`
4. Build: `npm run build`
5. Publish: `client/build`
6. Add env vars
7. Deploy

### Step 5: Update CORS

In `server/app.js`, update CORS:
```javascript
app.use(cors({
  origin: ['https://your-frontend.vercel.app', 'http://localhost:3000'],
  credentials: true
}));
```

### Step 6: Test

- ✅ Backend: `https://your-backend-url/api/health`
- ✅ Frontend: Visit your frontend URL
- ✅ Register a user
- ✅ Create a capsule

Done! 🎉

