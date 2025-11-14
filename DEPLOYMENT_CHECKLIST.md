# Deployment Checklist ✅

Use this checklist before deploying EchoCapsule.

## Pre-Deployment

### Backend Setup
- [ ] MongoDB Atlas cluster created
- [ ] Database user created with password
- [ ] IP whitelist configured (0.0.0.0/0 for all or specific IPs)
- [ ] Connection string copied
- [ ] JWT_SECRET generated (32+ characters)
- [ ] All environment variables documented

### Code Preparation
- [ ] All code committed to GitHub
- [ ] `.env` files NOT committed (in .gitignore)
- [ ] `.env.example` files created
- [ ] README.md updated
- [ ] No console.logs with sensitive data
- [ ] Error handling in place
- [ ] CORS configured properly

### Testing
- [ ] Backend runs locally (`npm run dev` in server/)
- [ ] Frontend runs locally (`npm start` in client/)
- [ ] API endpoints tested
- [ ] Authentication works
- [ ] Database connection works
- [ ] No build errors

## Deployment Steps

### Backend Deployment
- [ ] Platform account created (Render/Railway/Heroku)
- [ ] Repository connected
- [ ] Environment variables set:
  - [ ] NODE_ENV=production
  - [ ] PORT (auto or manual)
  - [ ] MONGODB_URI
  - [ ] JWT_SECRET
  - [ ] JWT_EXPIRE
  - [ ] JWT_COOKIE_EXPIRE
- [ ] Build command configured
- [ ] Start command configured
- [ ] Deployment successful
- [ ] Health check endpoint works: `/api/health`

### Frontend Deployment
- [ ] Platform account created (Vercel/Netlify)
- [ ] Repository connected
- [ ] Root directory set to `client`
- [ ] Build command: `npm run build`
- [ ] Output directory: `build`
- [ ] Environment variables set:
  - [ ] REACT_APP_API_URL (backend URL)
- [ ] Deployment successful
- [ ] Frontend loads correctly

### Post-Deployment
- [ ] Backend URL tested
- [ ] Frontend URL tested
- [ ] API calls work from frontend
- [ ] User registration works
- [ ] User login works
- [ ] CORS errors resolved
- [ ] All routes accessible
- [ ] No console errors

## Environment Variables Reference

### Backend
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/echocapsule
JWT_SECRET=your_32_character_secret_key
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30
```

### Frontend
```env
REACT_APP_API_URL=https://your-backend-url.onrender.com/api
```

## Troubleshooting

If deployment fails:
1. Check platform logs
2. Verify environment variables
3. Check build commands
4. Verify file paths
5. Check Node.js version compatibility
6. Review error messages

## Security Reminders

- [ ] JWT_SECRET is strong and unique
- [ ] MongoDB password is strong
- [ ] CORS origins are specific (not *)
- [ ] HTTPS enabled
- [ ] Environment variables not in code
- [ ] .env files in .gitignore

## Post-Deployment Monitoring

- [ ] Monitor server logs
- [ ] Check error rates
- [ ] Monitor database connections
- [ ] Test all features
- [ ] Check response times
- [ ] Monitor API usage

---

**Ready to deploy?** Follow [DEPLOY.md](./DEPLOY.md) for step-by-step instructions!

