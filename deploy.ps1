# PowerShell deployment script for GRAVIT website

Write-Host "Starting deployment..." -ForegroundColor Green

# Build the project
Write-Host "Building project..." -ForegroundColor Yellow
npm run build

# Copy dist files to root
Write-Host "Copying dist files to root..." -ForegroundColor Yellow
Copy-Item -Path "dist\*" -Destination "." -Recurse -Force

# Add all files to git
Write-Host "Adding files to git..." -ForegroundColor Yellow
git add .

# Commit the changes
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Deploy website files to root for hosting"

# Push to master
Write-Host "Pushing to master..." -ForegroundColor Yellow
git push origin master

Write-Host "Deployment completed!" -ForegroundColor Green
Write-Host "Your website should now be live on Hostinger!" -ForegroundColor Cyan
