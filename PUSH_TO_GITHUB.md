# Push Code to GitHub

Follow these steps to push your EchoCapsule project to GitHub.

## Step 1: Initialize Git (if not already done)

```bash
git init
git remote add origin https://github.com/ISHITA-YADAV12/internship.git
```

## Step 2: Stage All Files

```bash
git add .
```

## Step 3: Commit Changes

```bash
git commit -m "Initial commit: EchoCapsule MERN stack application"
```

## Step 4: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

## If You Get Authentication Errors

### Option 1: Use Personal Access Token
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select scopes: `repo`
4. Copy token
5. Use token as password when pushing:
```bash
git push -u origin main
# Username: your-github-username
# Password: your-personal-access-token
```

### Option 2: Use SSH
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to SSH agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Add public key to GitHub
# Copy: cat ~/.ssh/id_ed25519.pub
# Paste in GitHub → Settings → SSH and GPG keys

# Change remote to SSH
git remote set-url origin git@github.com:ISHITA-YADAV12/internship.git
git push -u origin main
```

## Verify Push

Check your GitHub repository to confirm all files are uploaded.

## Before Pushing Checklist

- [ ] `.env` files are NOT included (check .gitignore)
- [ ] `node_modules/` is NOT included
- [ ] All code is working locally
- [ ] README.md is updated
- [ ] No sensitive data in code

## Quick Push Script

```bash
#!/bin/bash
git add .
git commit -m "Update: EchoCapsule project"
git push origin main
```

Save as `push.sh`, make executable: `chmod +x push.sh`, then run: `./push.sh`

