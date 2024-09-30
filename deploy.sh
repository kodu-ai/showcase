#!/bin/bash

# Build the project
echo "Building the project..."
bun run build

# Add changes to git
echo "Adding changes to git..."
git add .

# Commit changes
echo "Committing changes..."
read -p "Enter commit message: " commit_message
git commit -m "$commit_message"

# Push to main branch
echo "Pushing to main branch..."
git push origin main

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
bun run deploy

echo "Deployment complete!"