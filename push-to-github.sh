#!/bin/bash
# Run this from ~/Documents/Website to push to GitHub

set -e

cd ~/Documents/Website

echo "→ Initializing git..."
git init

echo "→ Adding files..."
git add .

echo "→ Creating commit..."
git commit -m "feat: initial portfolio website

- React 18 + Vite + Tailwind CSS v4 + Framer Motion
- Hero, Projects, About, Contact, Footer sections
- Project detail pages with React Router
- Security hardened: CSP, Referrer-Policy, input validation
- Mobile-first responsive design"

echo "→ Creating public GitHub repo and pushing..."
gh repo create portfolio --public --source=. --remote=origin --push

echo ""
echo "✅ Done! Visit: https://github.com/mergenhan/portfolio"
