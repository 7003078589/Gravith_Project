#!/bin/bash

# Build the project
npm run build

# Copy dist files to root for deployment
cp -r dist/* .

# Add all files to git
git add .

# Commit the changes
git commit -m "Deploy website files to root for hosting"

# Push to master
git push origin master

echo "Deployment completed!"
